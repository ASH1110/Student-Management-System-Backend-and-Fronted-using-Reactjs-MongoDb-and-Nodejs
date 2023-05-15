const mongoose = require('mongoose')
const db_connection = mongoose.connect("mongodb://localhost:27017/studentmgmtsystem")

db_connection.then((data) => {
  console.log("successfully connected to db");
});