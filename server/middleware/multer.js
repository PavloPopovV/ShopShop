const multer = require("multer");

// Визначаємо місце зберігання файлів та імена
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // вказуємо папку для збереження файлів
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Налаштування multer
const upload = multer({ storage: storage });

module.exports = upload
