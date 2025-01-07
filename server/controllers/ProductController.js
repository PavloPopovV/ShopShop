const { ProductModel } = require("../models");
const messages = require("../constantes/messages");

class ProductController {
  async createProduct(req, res) {
    try {
      const { title, price, description, categoryId } = req.body;
      const { image1, image2, image3 } = req.files;

      const generateImagePath = (file) => `/uploads/${file[0].filename}`;

      const imagesPathes = [
        generateImagePath(image1),
        generateImagePath(image2),
        generateImagePath(image3),
      ];

      const product = new ProductModel({
        title,
        price,
        description,
        images: imagesPathes,
        categoryId,
      });

      await product.save();
      return res.status(201).json({ product, message: messages.created_201 });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: messages.internal_server_error_500 });
    }
  }

  async getSingleProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductModel.findById(id);
      return res.status(200).json({ product, message: messages.ok_200 });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: messages.internal_server_error_500 });
    }
  }

  async getProducts(req, res) {
    try {
      const { title, categoryId, min_price, max_price } = req.query;

      const query = {};

      if (title) {
        query.title = { $regex: title, $options: "i" };
      }

      if (categoryId) {
        query.categoryId = categoryId;
      }

      if (min_price) {
        query.price = { ...query.price, $gte: Number(min_price) };
      }
    
      if (max_price) {
        query.price = { ...query.price, $lte: Number(max_price) };
      }
      
      const products = await ProductModel.find(query);
      return res.status(200).json({ products, message: messages.ok_200 });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: messages.internal_server_error_500 });
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      await ProductModel.findByIdAndDelete(id);
      return res.status(204).json({ message: messages.no_content_204 });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: messages.internal_server_error_500 });
    }
  }
}

module.exports = new ProductController();
