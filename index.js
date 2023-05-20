const express = require("express");
const app = express();
const port = 3000;
const userRoutes =require("./routers/users")
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));

app.use(userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("http://127.0.0.1:3000/");
  console.log("http://127.0.0.1:3000/yemekler");
  console.log("http://127.0.0.1:3000/yemekler-cesit/korea");
  console.log("http://127.0.0.1:3000/yemek-detay/1");
});
