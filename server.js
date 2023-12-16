const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Dima:fD0ZKhDKxg6PGhuM@cluster0.eawlp1h.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Connection established");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
