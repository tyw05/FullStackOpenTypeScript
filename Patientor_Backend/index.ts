import express from "express";

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
