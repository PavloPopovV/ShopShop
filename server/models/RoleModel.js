const { Schema, model } = require("mongoose"); // достаємо декілька полів з пакета mongoose

// створюємо схему для User
const Role = new Schema({
  value: { type: String, unique: true, default: "USER" },
},{versionKey:false});

module.exports = model("Role", Role);
