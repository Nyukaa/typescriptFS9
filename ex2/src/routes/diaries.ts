import express from "express";
import diaryService from "../services/diaryService";
import { Response } from "express"; // импорт типа Response из express
import { NonSensitiveDiaryEntry } from "../types"; //
import toNewDiaryEntry from "../utils";
const router = express.Router();

router.get("/", (_req, res: Response<NonSensitiveDiaryEntry[]>) => {
  //строгая проверка API-контракта
  res.send(diaryService.getNonSensitiveEntries()); // возвращаем только не чувствительные данные
});
// Get by id
router.get("/:id", (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));
  // проверяем, найден ли дневник с таким id
  if (diary) {
    res.send(diary);
  } else {
    res.sendStatus(404);
  }
});
// Post a new diary entry
router.post("/", (req, res) => {
  try {
    //const { date, weather, visibility, comment } = req.body;
    const newDiaryEntry = toNewDiaryEntry(req.body);

    //const addedEntry = diaryService.addDiary(date, weather, visibility, comment);
    const addedEntry = diaryService.addDiary(newDiaryEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
