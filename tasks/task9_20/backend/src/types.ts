//  строгая типизация

//export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
// меняем на enum для лучшей читаемости и автодополнения
export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Stormy = "stormy",
  Windy = "windy",
}
// export type Visibility = "great" | "good" | "ok" | "poor";
export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
}
export type NonSensitiveDiaryEntry = Omit<DiaryEntry, "comment">; // новый тип без комментария

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment?: string | undefined; //  ? комментарий теперь необязателен
}
export type NewDiaryEntry = Omit<DiaryEntry, "id">; // тип для новых записей без id

// Pick   выбираем нужные поля / хорошо, когда полей мало
// Omit   исключаем опасные поля / чаще используется
// !!TypeScript не фильтрует данные / тип ≠ реальные данные / фильтрацию нужно делать вручную .map
