import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import diagnosesRouter from "./routes/diagnoses";
import patientsRouter from "./routes/patients";
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});
app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientsRouter);

// app.use((_req: Request, res: Response) => {
//   res.sendFile(path.resolve(__dirname, "../dist/index.html"));
// });
// путь к dist (после tsc → build/src/index.js)
const distPath = path.resolve(__dirname, "../../dist");

// Serve static files from the dist directory
app.use(express.static(distPath));

// SPA fallback
app.use((_req: Request, res: Response) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
