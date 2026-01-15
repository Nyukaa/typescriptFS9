import express from "express";
import { calculateBmi } from "./bmiCalc";
import { calculateExercises } from "./exerciseCalculator";
const app = express();
app.use(express.json());
// app.get("/hello", (_req, res) => {
//   res.send("Hello Full Stack!");
// });
//task 9_5 bmi endpoint example http://localhost:3003/bmi?height=180&weight=72.
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
//task 9_7 added exercise endpoint
app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const body: any = req.body;
  //check that daily_exercises and target are present
  if (!body.daily_exercises || !body.target) {
    return res.status(400).json({ error: "parameters missing" });
  }

  const dailyExercises = body.daily_exercises;
  const target = body.target;
  //check that dailyExercises is an array and target is a number
  if (
    !Array.isArray(dailyExercises) ||
    isNaN(Number(target)) ||
    dailyExercises.some((d: unknown) => isNaN(Number(d)))
  ) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  try {
    const result = calculateExercises(
      dailyExercises.map(Number),
      Number(target)
    );

    return res.json(result);
  } catch (error: unknown) {
    return res.status(400).json({ error: "malformatted parameters" });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
