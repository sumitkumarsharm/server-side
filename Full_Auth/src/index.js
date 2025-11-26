import app from "./app.js";
import dotenv from "dotenv";
import connetDB from "./db/db.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8080;
connetDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log("Database connection faild");
    console.log(err);
  });
