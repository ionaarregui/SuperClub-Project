const express = require("express");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const cartRoutes = require("./routes/cart");
const productRoutes = require("./routes/product");
const checkoutRoutes = require("./routes/checkout");
const indexRoutes = require("./routes/index");
const errorRoutes = require("./routes/error");

const app = express();
console.clear();
app.set("view engine", "ejs");
app.set("views", "src/views");

//routes

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.use("/", indexRoutes);

app.use("/register", registerRoutes);

app.use("/login", loginRoutes);

app.use("/checkout", checkoutRoutes);

app.use("/cart", cartRoutes);

app.use("/product", productRoutes);

app.use("*", errorRoutes);

app.listen(3000, () => console.log("toy ready"));
