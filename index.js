const express = require("express");
const cors = require("cors");
const tabCharacters = require("./characters");

const app = express();

const serverPort = 4242;

app.use(cors("*"));

app.get("/", (req, res) => {
  res.json("je suis sur la route / ");
});

app.get("/characters", (req, res) => {
  res.json(tabCharacters);
});

app.get("/characters/:id", (req, res) => {
  const characterId = parseInt(req.params.id);
  const character = tabCharacters.find((elem) => elem.id === characterId);
  console.info(character);

  res.json(character);
});

app.listen(serverPort, () => {
  console.info(`http://localhost:4242`);
});
