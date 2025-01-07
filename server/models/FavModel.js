const { Schema, model } = require("mongoose");

const Favourite = new Schema(
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

module.exports = model("Favourite", Favourite);
