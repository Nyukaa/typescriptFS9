import { useState, useEffect } from "react";
import { DiaryEntry } from "./types";
import { getAllDiaries } from "./diaryService";
import { createDiary } from "./diaryService";
import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [visibility, setVisibility] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllDiaries().then((data) => setDiaries(data));
  }, []);
  const dairyCreation = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    // console.log("date:", date);
    // console.log("weather:", weather);
    // console.log("visibility:", visibility);
    // console.log("comment:", comment);
    try {
      const newDiary = await createDiary({
        date,
        weather,
        visibility,
        comment,
      });
      setDiaries(diaries.concat(newDiary));
      setDate("");
      setWeather("");
      setVisibility("");
      setComment("");
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const errorMessage =
          typeof e.response?.data === "string"
            ? e.response.data
            : "Wrong data format";

        setError(errorMessage);

        setTimeout(() => {
          setError(null);
        }, 5000);
      } else {
        setError("Unknown error");

        setTimeout(() => {
          setError(null);
        }, 5000);
      }
    }
  };
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
      <div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <form onSubmit={dairyCreation}>
          <label>
            Date:
            <input
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </label>
          <label>
            Weather:
            <input
              value={weather}
              onChange={(event) => setWeather(event.target.value)}
            />
          </label>
          <label>
            Visibility:
            <input
              value={visibility}
              onChange={(event) => setVisibility(event.target.value)}
            />
          </label>
          <label>
            Comment:
            <input
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </label>
          <button type="submit">add</button>
        </form>
      </div>
    </div>
  );
}
export default App;
