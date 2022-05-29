const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();
const PORT = 3000;
const PATH = './node-express/users.json';

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Server running on port:' + PORT);
});

app.post('/user', (async (req, res) => {
    const data = await fs.readFile(PATH, 'utf-8');
    const result = Object.keys(data).length === 0 ? [] : JSON.parse(data);
    result.push(req.body);
    await fs.writeFile(PATH, JSON.stringify(result));
    res.status(200).send("user added");
}));

app.get('/user/:name', (async (req, res) => {
    const data = await fs.readFile(PATH, "utf-8");
    const users = JSON.parse(data);
    res.status(200).send(users.find((val) => {
        return val.name === req.params.name;
    }));
}));

app.get('/users', (async (req, res) => {
    const data = await fs.readFile(PATH, "utf-8");
    const users = JSON.parse(data);
    res.status(200).send(users);
}));




