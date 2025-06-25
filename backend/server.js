const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const DATA_PATH = "./blog.json";

app.get("/items", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  res.json(data);
});

app.post("/items", (req, res) => {
  const newItem = req.body;
  const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  data.push(newItem);
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  res.status(201).json({
    message: "Item adicionado com sucesso",
    slug: newItem.slug,
    title: newItem.title,
  });
});

app.get("/item/:slug", (req, res) => {
  const { slug } = req.params;
  const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  const item = data.find((item) => item.slug === slug);

  if (!item) {
    return res.status(404).json({ message: "Item não encontrado" });
  }

  res.json(item);
});

app.listen(3001, () => {
  console.log("API rodando em http://localhost:3001");
});
