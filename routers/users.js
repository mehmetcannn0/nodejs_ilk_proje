const express =require("express")
const router = express.Router()

const db = require("../data/db");

//routes
router.use("/yemekler-cesit/:category", async (req, res) => {
    //   res.send('yemek detail '+req.params.id)
    try {
      const [category,] = await db.execute("select * from data where category=?",[req.params.category]);
      // const category = data.find((y) => y.category == req.params.category);
      // console.log(category);
      if (category != null) {
        res.render("yemekler-cesit", { data: category, cesit: req.params.category });
      } else {
        res.render("404");
      }
    } catch (error) {
      console.log(error);
    }
  });
  router.use("/yemek-detay/:id", async (req, res) => {
    //   res.send('yemek detail '+req.params.id)
    try {
      const [yemek,] = await db.execute("select * from data where id=?",[req.params.id]);
      // const yemek = data.find((y) => y.id == req.params.id);
      // console.log(yemek[0]);
      if (yemek != null) {
        res.render("yemek-detay", yemek[0]);
      } else {
        res.render("404");
      }
    } catch (error) {
      console.log(error);
    }
  });
  
  router.use("/yemekler", async (req, res) => {
    try {
      const [data,] = await db.execute("select * from data");
      res.render("yemekler", { data: data });
    } catch (error) {
      console.log(error);
    }
  });
  router.use("/", async (req, res) => {
    try {
      const [data,] = await db.execute("select * from data");
      res.render("yemekler", { data: data });
    } catch (error) {
      console.log(error);
    }
  });
  
  module.exports =router;