const { request, response } = require('express');
const express = require('express');

const app = express();

app.use(express.json())

app.listen(3333);

const users = [];

app.post("/createUser", (request, response) => {
    const {name, email, nascimento, telefone} = request.body;
    const id = v4()
    users.push({
      id,
      name,
      email,
      nascimento,
      telefone,
    })
    return response.status(201).send({"created": "ok"})
})
app.get("/getUser", (request, response) => {
    return response.status(201).send(users)
})