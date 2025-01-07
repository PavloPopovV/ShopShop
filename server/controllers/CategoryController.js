const { CategoryModel, ProductModel } = require("../models");
const messages = require("../constantes/messages");

class CategoryController {
  async createCategory(req, res) {
    try {
      const { title } = req.body;
      const category = new CategoryModel({
        title,
      });
      await category.save();
      return res.status(201).json({category, message:messages.created_201 });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: messages.internal_server_error_500 });
    }
  }

 
  async getAll(req, res) {
    try {
      const categories = await CategoryModel.find();
      return res.status(200).json({categories, message:messages.ok_200 });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: messages.internal_server_error_500 });
    }
  }

  async deleteCategory(req, res) {
    try {
      const { id } = req.params;

      // Перевіряємо, чи існують продукти з цією категорією
      const products = await ProductModel.find({ categoryId: id });

      if (products.length > 0) {
        return res.status(403).json({
          message: messages.forbiden_403,
        });
      }

      // Видаляємо категорію, якщо немає продуктів з цією категорією
      const deletedCategory = await CategoryModel.findByIdAndDelete(id);

      if (!deletedCategory) {
        return res.status(400).json({ message: messages.bad_request_400 });
      }

      return res.status(204).json({ message:messages.no_content_204 });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: messages.internal_server_error_500 });
    }
  }
}

module.exports = new CategoryController();
