import { NewDiaryEntry, Weather, Visibility } from "./types";
// type guards для проверки типов входящих данных
const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};
// проверка на валидную дату
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};
// функции для парсинга и валидации каждого поля entry.date = "2017-05-11" // unknown
const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    //typeof "2017-05-11" === "string" ✅ Date.parse("2017-05-11") → number ✅

    throw new Error("Incorrect or missing date");
  }
  return date; // возвращаем значение типа string "2017-05-11"
};
// комментарий просто строка без доп. проверок entry.comment = "Nice day"
const parseComment = (comment: unknown): string | undefined => {
  if (comment === undefined) {
    return undefined;
  }

  if (!isString(comment)) {
    throw new Error("Incorrect comment");
  }

  return comment;
};
// проверка на валидное значение перечисления Weather entry.weather = "cloudy" // unknown
// const isWeather = (param: string): param is Weather => {
//   return ["sunny", "rainy", "cloudy", "stormy"].includes(param);
// };

const isWeather = (param: string): param is Weather => {
  return Object.values(Weather)
    .map((v) => v.toString())
    .includes(param);
};

// парсинг и валидация поля weather
const parseWeather = (weather: unknown): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    //isString("cloudy") → true ✅ isWeather("cloudy") → true ✅

    throw new Error("Incorrect or missing weather");
  }
  return weather; // возвращаем значение типа Weather "cloudy" // Weather
};

// проверка на валидное значение перечисления Visibility
// const isVisibility = (param: string): param is Visibility => {
//   return ["great", "good", "ok", "poor"].includes(param);
// };
const isVisibility = (param: string): param is Visibility => {
  return Object.values(Visibility)
    .map((v) => v.toString())
    .includes(param);
};
// парсинг и валидация поля visibility
const parseVisibility = (visibility: unknown): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error("Incorrect or missing visibility");
  }
  return visibility;
};
// функция для валидации и преобразования входящих данных
// const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
//   console.log(object); // now object is no longer unused
//   const newEntry: NewDiaryEntry = {
//     weather: "cloudy", // fake the return value
//     visibility: "great",
//     date: "2022-1-1",
//     comment: "fake news",
//   };

//   return newEntry;
// };
// полный вариант функции toNewDiaryEntry с валидацией всех полей
const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  // 1 проверяем, что объект не пустой и является объектом
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }
  // 1.1 проверяем наличие всех обязательных полей
  if (
    !("date" in object) ||
    !("weather" in object) ||
    !("visibility" in object)
  ) {
    throw new Error("Missing required fields");
  }
  // 2 приводим объект к типу с неизвестными ключами и значениями
  const entry = object as { [key: string]: unknown };
  // 3 парсим и валидируем каждое поле
  const newEntry: NewDiaryEntry = {
    date: parseDate(entry.date),
    weather: parseWeather(entry.weather),
    visibility: parseVisibility(entry.visibility),
  };
  // комментарий необязателен // если он есть, то парсим и валидируем // если нет: parseComment(undefined) → undefined
  const comment = parseComment(entry.comment);
  if (comment !== undefined) {
    newEntry.comment = comment;
  }

  return newEntry;
};

export default toNewDiaryEntry;
