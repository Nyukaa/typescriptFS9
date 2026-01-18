import express from "express";
import diaryService from "../services/diaryService";
import { Response } from "express"; // импорт типа Response из express
import { NonSensitiveDiaryEntry } from "../types"; //

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitiveDiaryEntry[]>) => {
  //строгая проверка API-контракта
  res.send(diaryService.getNonSensitiveEntries()); // возвращаем только не чувствительные данные
});
router.post("/", (_req, res) => {
  res.send("Saving a diary!");
});

export default router;
