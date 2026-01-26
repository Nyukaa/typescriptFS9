import { useState, useEffect } from "react";
import { DiaryEntry, Weather, Visibility } from "./types";
import { getAllDiaries } from "./diaryService";
import { createDiary } from "./diaryService";
import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState<Weather>(Weather.Sunny);
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Great);
  const [comment, setComment] = useState("");
  const [error, setError] = useState<string | null>(null);
  const weatherOptions = Object.values(Weather);
  const visibilityOptions = Object.values(Visibility);
  useEffect(() => {
    getAllDiaries().then((data) => setDiaries(data));
  }, []);
  const dairyCreation = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const newDiary = await createDiary({
        date,
        weather,
        visibility,
        comment,
      });
      setDiaries(diaries.concat(newDiary));
      setDate("");
      setVisibility(Visibility.Great);
      setWeather(Weather.Sunny);

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
      <div>
        <h2>Add new entry</h2>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <form onSubmit={dairyCreation}>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </label>
          <p>Weather:</p>
          <div className="radio-group">
            {weatherOptions.map((w) => (
              <label key={w}>
                <input
                  type="radio"
                  name="weather"
                  value={w}
                  checked={weather === w}
                  onChange={() => setWeather(w)}
                />
                {w}
              </label>
            ))}
          </div>

          <p>Visibility:</p>
          <div className="radio-group">
            {visibilityOptions.map((v) => (
              <label key={v}>
                <input
                  type="radio"
                  name="visibility"
                  value={v}
                  checked={visibility === v}
                  onChange={() => setVisibility(v)}
                />
                {v}
              </label>
            ))}
          </div>
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
