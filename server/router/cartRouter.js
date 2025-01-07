const Router = require("express");
const router = new Router(); // створення роутера для прослуховування запитів
const { CartController } = require("../controllers"); // імпорт функцій наших запитів
const roleMiddleware = require("../middleware/roleMiddleware"); // імпорт func яка буде давати доступ до певного функціонала лише деяким користувачам

router.get("/", roleMiddleware(["ADMIN", "USER"]), CartController.getCart);
router.put(
  "/",
  roleMiddleware(["ADMIN", "USER"]),
  CartController.addNewProduct
);
router.delete(
  "/:id",
  roleMiddleware(["ADMIN", "USER"]),
  CartController.deleteProduct
);

module.exports = router; // експорт роутера
