const Router = require("express");
const router = new Router();
const { CategoryController } = require("../controllers");
const roleMiddleware = require("../middleware/roleMiddleware");

router.post("/", roleMiddleware(["ADMIN"]), CategoryController.createCategory);
router.delete("/:id", roleMiddleware(["ADMIN"]), CategoryController.deleteCategory);
router.get("/", CategoryController.getAll);

module.exports = router; // експорт роутера
