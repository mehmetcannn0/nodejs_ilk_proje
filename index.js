const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));
const data = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "1.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "2.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "3.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "3.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "4.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "6.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "7.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "8.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "9.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//   {
//     id: 1,
//     title: "Tteokbokki",
//     category: "Korea",
//     price: 10.99,
//     img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
//     desc: `Spicy rice cakes, serving with fish cake.`,
//   },
//routes
app.use("/yemekler-cesit/:category", (req, res) => {
  //   res.send('yemek detail '+req.params.id)
  const category = data.find((y) => y.category == req.params.category);
  // console.log(category);
  if (category != null) {
    res.render("yemekler-cesit", { data: data, cesit: req.params.category });
  }else{

    res.render("404");
  }
});
app.use("/yemek-detay/:id", (req, res) => {
  //   res.send('yemek detail '+req.params.id)
  const yemek = data.find((y) => y.id == req.params.id);
  if (yemek != null) {
    res.render("yemek-detay", yemek);
  }else{

    res.render("404");
  }
});

app.use("/yemekler", (req, res) => {
  res.render("yemekler", { data: data });
});
app.use("/", (req, res) => {
  res.render("yemekler", { data: data });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("http://127.0.0.1:3000/");
  console.log("http://127.0.0.1:3000/yemekler");
  console.log("http://127.0.0.1:3000/yemekler-cesit/korea");
  console.log("http://127.0.0.1:3000/yemek-detay/1");
});
