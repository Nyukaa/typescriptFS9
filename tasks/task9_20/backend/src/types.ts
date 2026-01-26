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
export type NonSensitiveDiaryEntry = Omit<DiaryEntry, "comment">; // exclude comment field

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment?: string | undefined; //  ? means that is optional
}
export type NewDiaryEntry = Omit<DiaryEntry, "id">; // for creating new entries without id
