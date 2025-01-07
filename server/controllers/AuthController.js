const { RoleModel, UserModel } = require("../models");
const bcrypt = require("bcryptjs"); // імпорт для хешування пароля
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator"); // повертає помилки внаслідок поганої валідації
const { secret } = require("../config"); // ключ для токена
const messages = require("../constantes/messages");

const generateAccessToken = (id, roles) => {
  // ховає данні в токен
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class AuthController {
  async registration(req, res) {
    try {
      // повертає помилки внаслідок поганої валідації
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res
          .status(400)
          .json({ message: messages.bad_request_400, errors });

      // достаємо дані з тіла запиту
      const { username, password } = req.body;

      // отримуємо дані користувача
      const candidate = await UserModel.findOne({ username });

      // пролвіряємо чи користувач з таким іменем вже існує
      if (candidate)
        return res.status(409).json({ message: messages.conflict_409 });
      const userR = new RoleModel()
      const adminRole = new RoleModel({value:"ADMIN"})
      await userR.save()
      await adminRole.save()

      // получвємо роль юзера з бази даних
      const userRole = await RoleModel.findOne({ value: "ADMIN" });

      // хeшуємо пароль
      const hashPassword = bcrypt.hashSync(password, 7);

      // створюємо користувача
      const user = new UserModel({
        username,
        password: hashPassword,
        roles: [userRole.value],
      });

      // зберігаємо користувача
      const savedUser = await user.save();

      const token = generateAccessToken(savedUser._id, savedUser.roles);

      return res
        .status(201)
        .json({role:savedUser.roles, token, username: savedUser.username, message: messages.created_201 });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: messages.internal_server_error_500 });
    }
  }

  async login(req, res) {
    try {
      console.log("login")
      // достаємо дані з тіла запиту
      const { username, password } = req.body;

      // отримуємо дані користувача
      const user = await UserModel.findOne({ username });

      // провіряємо чи користувач з таким іменем існує
      if (!user)
        return res.status(404).json({ message: messages.not_found_404 });

      // порівнємо отриманий пароль з тіла запиту з захешованим паролем
      const validPasword = bcrypt.compareSync(password, user.password);
      if (!validPasword)
        return res.status(400).json({ message: messages.bad_request_400 });

      // стврємо токен в який ховаємо дані користуваяа
      const token = generateAccessToken(user._id, user.roles);

      // повертаємо токен
      return res.status(200).json({ token, username, role:user.roles, message:messages.ok_200 });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: messages.internal_server_error_500 });
    }
  }

  async getUser(req, res) {
    try {
     
      const user = await UserModel.findOne({ _id: req.userId }).select('-password');
      const token = generateAccessToken(user._id, user.roles);
      return res.status(200).json({user, role:user.roles, token, username: user.username, message:messages.ok_200 });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: messages.internal_server_error_500 });
    }
  }

  async getUsers(req, res) {
    try {

      // отримуємо користувачів
      const users = await UserModel.find();

      // поветраємо масив користувачів
      return res.status(200).json({ users, message:messages.ok_200 });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: messages.internal_server_error_500 });
    }
  }
}

module.exports = new AuthController();
