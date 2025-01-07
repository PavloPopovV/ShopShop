const Router = require("express");
const router = new Router();
const { FavController } = require("../controllers");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/", roleMiddleware(["ADMIN", "USER"]), FavController.getFav);
router.put("/", roleMiddleware(["ADMIN", "USER"]), FavController.addNewProduct);
router.delete(
  "/:id",
  roleMiddleware(["ADMIN", "USER"]),
  FavController.deleteProduct
);

module.exports = router;