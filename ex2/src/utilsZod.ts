import { newEntrySchema } from "./schemas";
import { NewDiaryEntry } from "./types";

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  return newEntrySchema.parse(object);
};

export default toNewDiaryEntry;

// const parseDate = (date: unknown): string => {
//   if (!date || !isString(date) || !isDate(date)) {
//     throw new Error("Incorrect or missing date");
//   }
//   return date; // возвращаем значение типа string "2017-05-11"
// };
// // комментарий просто строка без доп. проверок entry.comment = "Nice day"
// const parseComment = (comment: unknown): string => {
//   return z.string().parse(comment);
// };

// //
// const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
//   // 1 проверяем, что объект не пустой и является объектом
//   if (!object || typeof object !== "object") {
//     throw new Error("Incorrect or missing data");
//   }
//   // 1.1 проверяем наличие всех обязательных полей
//   if (
//     !("date" in object) ||
//     !("weather" in object) ||
//     !("visibility" in object)
//   ) {
//     throw new Error("Missing required fields");
//   }
//   // 2 приводим объект к типу с неизвестными ключами и значениями
//   const entry = object as { [key: string]: unknown };
//   // 3 парсим и валидируем каждое поле
//   const newEntry: NewDiaryEntry = {
//     date: z.string().date().parse(entry.date),
//     weather: z.nativeEnum(Weather).parse(entry.weather),
//     visibility: z.nativeEnum(Visibility).parse(entry.visibility),
//     comment: z.string().optional().parse(entry.comment),
//   };

//   return newEntry;
// };

//export default toNewDiaryEntry;
