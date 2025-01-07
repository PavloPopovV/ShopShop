const { Schema, model } = require("mongoose"); // достаємо декілька полів з пакета mongoose

// створюємо схему для User
const User = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: "Role" }],
},{versionKey:false});

module.exports = model("User", User);
