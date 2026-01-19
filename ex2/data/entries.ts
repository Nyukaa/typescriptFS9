import { DiaryEntry, Weather, Visibility } from "../src/types"; // импорт типа DiaryEntry

const diaryEntries: DiaryEntry[] = [
  {
    id: 1,
    date: "2017-01-01",
    weather: Weather.Rainy,
    visibility: Visibility.Great,
    comment: "Pretty scary flight",
  },
  {
    id: 2,
    date: "2017-04-01",
    weather: Weather.Sunny,
    visibility: Visibility.Good,
    comment: "Everything went better than expected, I'm learning much",
  },
  {
    id: 3,
    date: "2017-04-15",
    weather: Weather.Windy,
    visibility: Visibility.Good,
    comment: "I'm getting pretty confident although I hit a flock of birds",
  },
  {
    id: 4,
    date: "2017-05-11",
    weather: Weather.Cloudy,
    visibility: Visibility.Good,
    comment: "I almost failed the landing but I survived",
  },
];

export default diaryEntries;
