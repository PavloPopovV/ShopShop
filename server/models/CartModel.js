const { Schema, model } = require("mongoose");

// створюємо схему для Cart з порожнім масивом за замовчуванням
const Cart = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    products: [
      {
        type: Schema.Types.ObjectId, // Тепер масив містить тільки ObjectId
        ref: 'Product'
      }
    ],
  },
  { versionKey: false }
);

module.exports = model("Cart", Cart);
