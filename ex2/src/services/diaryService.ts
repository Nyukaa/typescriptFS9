//import diaryData from "../../data/entries.json";
import diaries from "../../data/entries";
import { NonSensitiveDiaryEntry, DiaryEntry, NewDiaryEntry } from "../types";

// const diaries: DiaryEntry[] = diaryData as DiaryEntry[]; // принудительное приведение типа
// если импортируем JSON файл напрямую not good practice

const getEntries = (): DiaryEntry[] => {
  // явно указываем возвращаемый тип функции
  return diaries; // теперь TypeScript знает, что diaries это массив DiaryEntry
};
const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};
// Утечка данных, если просто вернуть diaries / TypeScript проверяет наличие полей лишние поля разрешены
// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaries;
// };
// for GET by id
const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  return entry;
};
// for POST a new diary entry
// const addDiary = (
//   date: string,
//   weather: Weather,
//   visibility: Visibility,
//   comment: string
// ): DiaryEntry => {
//   const newDiaryEntry = {
//     id: Math.max(...diaries.map((d) => d.id)) + 1, // находим максимальный id и увеличиваем на 1
//     date,
//     weather,
//     visibility,
//     comment,
//   };

//   diaries.push(newDiaryEntry);
//   return newDiaryEntry;
// };

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry: DiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...entry,
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById,
};
