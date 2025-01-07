const Router = require("express");
const router = new Router(); // створення роутера для прослуховування запитів
const { AuthController } = require("../controllers"); // імпорт функцій наших запитів
const { check } = require("express-validator"); // імпорт для валідації
const roleMiddleware = require("../middleware/roleMiddleware"); // імпорт func яка буде давати доступ до певного функціонала лише деяким користувачам

router.post(
  "/registration",
  [
    // валідація полів
    check("username", "Username cannot be empty").notEmpty(),
    check(
      "password",
      "The password must be at least 4 and no more than 18 characters"
    ).isLength({ min: 4, max: 10 }),
  ],
  AuthController.registration
);
router.post("/login", AuthController.login);
router.get(
  "/all",
  roleMiddleware(["ADMIN", "USER"]),
  AuthController.getUsers
);

router.get(
  "/one",
  roleMiddleware(["ADMIN", "USER"]),
  AuthController.getUser
);

module.exports = router; // експорт роутера
