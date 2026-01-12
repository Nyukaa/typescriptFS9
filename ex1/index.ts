import express from "express";
//const express = require("express"); //старый синтаксис импорта
const app = express();

app.get("/ping", (_req, res) => {
  //_req - неиспользуемый параметр нужна для сигнатуры !!сказать TS: «Я знаю, что переменная не используется»
  res.send("pong");
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
