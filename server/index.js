const express = require("express");
const path = require("path");
const cors = require("cors"); // це механізм безпеки, який дозволяє або забороняє веб-додаткам з одного домену (джерела) доступ до ресурсів на іншому домені. Це важливо для захисту веб-додатків від несанкціонованого доступу до ресурсів на сторонніх серверах.
const mongoose = require("mongoose"); // імпорт підключення до бази данних
const router = require("./router"); // імпорт router

const PORT = process.env.PORT || 5000; // порт на якому буде запускатись сервер

const app = express(); // створення сервера

app.use(express.json()); // парсимо json

app.use(cors({ origin: 'http://localhost:5174' }))

app.use("/api", router); // для слідкування за роутами в додатку

app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // налаштовує статичний сервер для обслуговування файлів у папці uploads.

console.log(__dirname)

// func яка буде запускати сервер (опервції з базами данниї завжди асинхронні async/await)
const start = async () => {
  try {
    // підключення до бази данних
    await mongoose.connect(
      "mongodb+srv://admin:den380983151754@cluster0.twcnz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    app.listen(PORT, () => console.log(`server start on port ${PORT}`)); // метод запуску сервера
  } catch (err) {
    console.log(err);
  }
};

// запуск сервера
start();
