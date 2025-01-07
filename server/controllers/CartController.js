const { CartModel } = require("../models");
const { Types } = require("mongoose");
const messages = require("../constantes/messages");

class CartController {
  async getCart(req, res) {
    try {
      // Шукаємо кошик користувача за userId
      let cart = await CartModel.findOne({ userId: req.userId }).populate('products')
      .exec();
      console.log(cart)
      // Якщо кошик не знайдено, створюємо новий
      if (!cart) {
        cart = new CartModel({ userId: req.userId, products: [] });
        // Зберігаємо новий кошик
        await cart.save();
      }
      return res
        .status(200)
        .json({ cart: cart.products, message: messages.ok_200 });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: messages.internal_server_error_500 });
    }
  }

  async addNewProduct(req, res) {
    try {
      const userId = req.userId;
      const { productId } = req.body;
      console.log(productId);
      // Спочатку знайдемо існуючий кошик
      const cart = await CartModel.findOneAndUpdate(
        { userId: userId },
        {
          $push: { products: new Types.ObjectId(productId) },
        },
        {
          new: true, // Повертаємо оновлений документ
          upsert: true, // Створюємо новий документ, якщо він не знайдений
        }
      );

      return res.status(201).json({ cart, message: messages.created_201 });
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
      const userId = req.userId;
      let cart = await CartModel.findOne({ userId: userId });

      const filteredCart = cart.products.filter((productId) => {
        return JSON.stringify(productId) !== JSON.stringify(id);
      });

      cart.products = filteredCart;
      await cart.save();

      return res.status(204).json({ cart, message: messages.no_content_204 });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: messages.internal_server_error_500 });
    }
  }
}
module.exports = new CartController();
