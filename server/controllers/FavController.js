const { FavModel } = require("../models");
const { Types } = require("mongoose");
const messages = require("../constantes/messages");

class FavController {
  async getFav(req, res) {
    try {
      const userId = req.userId;
      let favourite = await FavModel.findOne({ userId: userId }).populate('products').exec();
console.log(favourite)
      if (!favourite) {
        favourite = new FavModel({ userId: userId, products: [] });
        await favourite.save();
      }

      return res
        .status(200)
        .json({ products: favourite.products, message: messages.ok_200 });
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

      const favourite = await FavModel.findOneAndUpdate(
        { userId: userId },
        {
          $push: { products: new Types.ObjectId(productId) },
        },
        {
          new: true,
          upsert: true,
        }
      );
      return res.status(201).json({ favourite, message: messages.created_201 });
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

      let favourite = await FavModel.findOne({ userId: userId });
      
      const filteredCart = favourite.products.filter(
        (item) => JSON.stringify(item) !== JSON.stringify(id)
      );
      favourite.products = filteredCart;

      await favourite.save();

      return res
        .status(204)
        .json({ favourite, message: messages.no_content_204 });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: messages.internal_server_error_500 });
    }
  }
}
module.exports = new FavController();
