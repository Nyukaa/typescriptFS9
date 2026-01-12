import express from "express";
import { calculateBmi } from "./bmiCalc";
const app = express();

// app.get("/hello", (_req, res) => {
//   res.send("Hello Full Stack!");
// });
app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (!height || !weight) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  try {
    const bmi = calculateBmi(height, weight);
    return res.json({
      weight: weight,
      height: height,
      bmi: bmi,
    });
  } catch (error: unknown) {
    let errorMessage = "Something bad happened.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    return res.status(400).json({ error: errorMessage });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
