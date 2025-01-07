const { Schema, model } = require("mongoose");

const Category = new Schema({
  title: { type: String, required: true },
},{versionKey:false});

module.exports = model("Category", Category);