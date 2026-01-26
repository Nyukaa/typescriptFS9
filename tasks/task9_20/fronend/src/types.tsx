export interface DiaryEntry {
  id: number;
  date: string;
  weather: string;
  visibility: string;
  comment?: string;
}

export type NewDiaryEntry = Omit<DiaryEntry, "id">;
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
