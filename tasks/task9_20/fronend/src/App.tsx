import { useState, useEffect } from "react";
import { DiaryEntry } from "./types";
import { getAllDiaries } from "./diaryService";
function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  useEffect(() => {
    getAllDiaries().then((data) => setDiaries(data));
  }, []);
  return (
    <div>
      <h1>Flight Diaries</h1>
      <ul>
        {diaries.map((diary) => (
          <li key={diary.id}>
            {diary.date} — Weather: {diary.weather}, Visibility:{" "}
            {diary.visibility}
            {diary.comment && <p>Comment: {diary.comment}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
