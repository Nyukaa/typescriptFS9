//import diaryData from "../../data/entries.json";
import diaries from "../../data/entries";
import { NonSensitiveDiaryEntry, DiaryEntry } from "../types";

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
const addDiary = () => {
  return null;
};

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
};
