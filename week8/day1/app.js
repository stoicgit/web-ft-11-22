// require our packages
const express = require("express");
const app = express()   
const PORT = 3000

//Routes
app.get("/",(req,res) => {
    res.send("howdy!");
});
//Listen for request
app.listen(PORT, console.log(`Listening on port ${PORT}`));

app.post("/error", (req, res) => {
    res.status("cookie");
});

app.get("/post", (req, res) => {
    res.status("cookie");
});

app.put("/post", (req, res) => {
    res.status("cookie");
});


app.delete("/post", (req, res) => {
    res.status("cookie");
});