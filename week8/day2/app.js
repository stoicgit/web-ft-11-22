const { request } = require("express");
const express = require("express");
const app = express();  
const PORT = 3001;
const savedUser = [ { name: "Joe", id: 1 },
                    { name: "Ethan", id: 2 },
                    { name: "Mauro", id: 3 },
                    { name: "Vinny", id: 4 },];

app.use(express.json());

app.get("/user/:userId", (request, response) => {
    const users = [
        { name: "Joe", id: 1 },
        { name: "Ethan", id: 2 },
        { name: "Mauro", id: 3 },
        { name: "Vinny", id: 4 },
    ];
    console.log(request.body);
    const userFound = users.find(
        (user) => user.id === Number(request.params.userId)
    );
    savedUsers.push(request.body);
    console.log(savedUsers);
    response.send(
        `I am looking at user ${userFound.name} with id ${userFound.id}`
    );
});

app.delete("/delete/userId", (request,respond) => {
    user = user.filter(user => user.id !== request.params.userId)
    respond.send(`users are now ${user}.`)
})

app.listen(PORT, console.log(`Listening on port ${PORT}`))
