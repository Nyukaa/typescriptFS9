import express from "express";
import { calculator, Operation } from "./calculator";
//const express = require("express"); //старый синтаксис импорта
const app = express();
app.use(express.json());

app.get("/ping", (_req, res) => {
  //_req - неиспользуемый параметр нужна для сигнатуры !!сказать TS: «Я знаю, что переменная не используется»
  res.send("pong");
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/calculate", (req, res) => {
  const body: unknown = req.body;

  if (
    typeof body !== "object" ||
    body === null ||
    !("value1" in body) ||
    !("value2" in body) ||
    !("op" in body)
  ) {
    return res.status(400).send({ error: "malformatted parameters" });
  }

  const { value1, value2, op } = body as {
    value1: unknown;
    value2: unknown;
    op: unknown;
  };

  if (
    typeof value1 !== "number" ||
    typeof value2 !== "number" ||
    typeof op !== "string"
  ) {
    return res.status(400).send({ error: "malformatted parameters" });
  }

  if (!["add", "multiply", "divide"].includes(op)) {
    return res.status(400).send({ error: "malformatted parameters" });
  }

  const result = calculator(value1, value2, op as Operation);
  return res.send({ result });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
