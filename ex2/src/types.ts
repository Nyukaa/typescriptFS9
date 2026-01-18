//  строгая типизация

export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";

export type Visibility = "great" | "good" | "ok" | "poor";

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, "comment">; // новый тип без комментария

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment?: string; //  ? комментарий теперь необязателен
}
// Pick   выбираем нужные поля / хорошо, когда полей мало
// Omit   исключаем опасные поля / чаще используется
// !!TypeScript не фильтрует данные / тип ≠ реальные данные / фильтрацию нужно делать вручную .map
