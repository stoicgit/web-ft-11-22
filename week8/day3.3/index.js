const express = require("express");
const app = express();
const PORT = 3004;
const data = require("./data");

//middleware
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
//middleware

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
  res.render("pages/index", {
    data: data,
    accountBalance: accountBalance,
    pending: pending,
    processedData: processedData,
  });
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
