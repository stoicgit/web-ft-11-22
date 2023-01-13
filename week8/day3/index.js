const express = require("express");
const app = express();
const PORT = 3003;
const data = require("./data");

//middleware
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
//middleware

app.get("/", (req, res) => {
  const mascots = [
    { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
    { name: "Tux", organization: "Linux", birth_year: 1996 },
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  ];
  res.render("pages/index", {
    mascots: mascots,
  });
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/aboutme", (req, res) => {
  const me = {
    name: "mauro",
    city: "atlanta",
    occupation: "unemployed :(",
    favoriteColor: "orange",
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUV_xiPYR1jmmbgOcHg__CmIvsdCAvgOTK77SKt0GW_KnTLhP3GaH-EG0D9TA4h0nh7U&usqp=CAU",
  };
  res.render("pages/aboutme", { me: me });
});

app.get("/dashboard", (req, res) => {
  const accountBalance = {
    amount: "$123,233,322,000.09",
  };
  const pending = {
    amount: "$46,788.21",
  };
  const processedData = {
    amount: "$657,441.22",
  };
  res.render("/pages/dashboard", { data });
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
