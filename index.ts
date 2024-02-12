import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

interface RequestBody {
  daily_exercises: number[];
  target: number;
}
const app = express();

app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);
  if (!height || !weight) {
    res.status(400).json({ error: "malformatted parameters" });
  } else {
    const bmi = calculateBmi(height, weight);
    res.json({ weight, height, bmi });
  }
});

app.post("/exercises", (req, res) => {
  const { daily_exercises, target } = <RequestBody>req.body;
  if (!daily_exercises || !target) {
    res.status(400).json({ error: "parameters missing" });
  } else {
    const result = calculateExercises(daily_exercises, target);
    res.json(result);
  }
});
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
