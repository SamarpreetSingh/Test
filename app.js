const express = require("express");
const app = express();
const PORT = 3000;
const todoRoutes = require("./controllers/todo.js");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(
  "mongodb+srv://samar:todo@cluster0.tdulz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  (err, db) => {
    if (err) throw err;
    if (mongoose.connection.readyState === 1) {
      console.log("Connected to db");
    }
  }
);

// mongoose.connect("mongodb://localhost:27017/TodoListDb", (err, db) => {
//   if (err) throw err;
//   if (mongoose.connection.readyState === 1) {
//     console.log("Connected to db");
//   }
// });
app.use(todoRoutes);

app.listen(PORT, () => console.log("Server is running"));
