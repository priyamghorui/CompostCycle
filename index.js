const express = require("express");
const path = require("path");




const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
// app.use(favicon(path.join(__dirname, 'public/images','favicon.ico')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index");
});


app.listen(process.env.PORT || 8080, () => {
  console.log("connected..");
});
