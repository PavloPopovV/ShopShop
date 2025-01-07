const { Schema, model } = require("mongoose");

const Product = new Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    title: { type: String, required: true },
    price: { type: Number, required: true }, 
    description: { type: String, required: true },
    images: { type: [String], required: true },
  },
  { versionKey: false }
);

module.exports = model("Product", Product);
