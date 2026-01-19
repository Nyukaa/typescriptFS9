import express from "express";
import diaryService from "../services/diaryService";
import { Response } from "express"; // импорт типа Response из express
import { NonSensitiveDiaryEntry, NewDiaryEntry, DiaryEntry } from "../types"; //
import { newDiaryParser, errorMiddleware } from "../middleware";
import { Request } from "express";
//import toNewDiaryEntry from "../utils"; // без zod
//import { newEntrySchema } from "../schemas";
//import { z } from "zod";
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

router.post(
  "/",
  newDiaryParser, // проверяем тело запроса
  (
    req: Request<unknown, unknown, NewDiaryEntry>, // указываем типизацию req.body
    // unknown Params (параметры URL) — unknown, пока не используем.
    // unknown ResBody (тело ответа) — unknown, пока не используем.
    // NewDiaryEntry ReqBody —  чтобы TypeScript знал, что req.body уже валидный
    res: Response<DiaryEntry>
  ) => {
    const addedEntry = diaryService.addDiary(req.body);
    res.json(addedEntry);
  }
);

// подключаем обработчик ошибок
router.use(errorMiddleware);

// Без использования middleware
// router.post("/", (req, res) => {
//   try {
//     //const { date, weather, visibility, comment } = req.body;
//     //const newDiaryEntry = toNewDiaryEntry(req.body);
//     const newDiaryEntry = newEntrySchema.parse(req.body);
//     //const addedEntry = diaryService.addDiary(date, weather, visibility, comment);
//     const addedEntry = diaryService.addDiary(newDiaryEntry);
//     res.json(addedEntry);
//   } catch (error: unknown) {
//     if (error instanceof z.ZodError) {
//       res.status(400).send({ error: error.issues }); // показывает, что конкретно не так
//     } else {
//       res.status(400).send({ error: "unknown error" });
//     }
//     // } catch (error: unknown) {
//     //   let errorMessage = "Something went wrong.";
//     //   if (error instanceof Error) {
//     //     errorMessage += " Error: " + error.message;
//     //   }
//     //   res.status(400).send(errorMessage);
//   }
// });

export default router;
