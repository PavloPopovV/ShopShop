const jwt = require("jsonwebtoken");
const { secret } = require("../config"); // ключ для токена
const { UserModel } = require("../models");

// функція яка буде давати доступ до певного функціонала лише деяким користувачам
module.exports = function (roles) {
  return async function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      // дістаємо токен
      const token = req.headers.authorization.split(" ")[1];
      if (!token)
        return res.status(403).json({ message: "The user is not authorized" });

      // отримуємо масив ролей та декодуємо токен
      const { roles: userRoles, id } = jwt.verify(token, secret);

      const user = await UserModel.findById(id);

      if (!user) {
        return res.status(403).json({ message: "User is undefined" });
      }
      // провіряєио чи є в списку ролей ролі яким дозволяються ці функції
      let hasRole = false;
      userRoles.forEach((role) => {
        if (roles.includes(role)) hasRole = true;
      });

      if (!hasRole) {
        return res.status(403).json({ message: "You do not have access" });
      }

      req.userId = id;

      // щоб викликати наступний middleware
      next();
    } catch (err) {
      console.log(err);
      return res.status(403).json({ message: "The user is not authorized" });
    }
  };
};
