const Router = require("express");
const router = new Router();
const { ProductController } = require("../controllers");
const roleMiddleware = require("../middleware/roleMiddleware");
const upload = require("../middleware/multer");

router.post(
  "/",
  roleMiddleware(["ADMIN"]),
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
  ]),
  ProductController.createProduct
);
router.delete(
  "/:id",
  roleMiddleware(["ADMIN"]),
  ProductController.deleteProduct
);
router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getSingleProduct);

module.exports = router;
