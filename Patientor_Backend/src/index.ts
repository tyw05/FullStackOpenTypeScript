import express from "express";
import cors from "cors";
import DiagnosisRouter from "./routes/DiagnosisRouter";
import PatientRouter from "./routes/PatientsRouter";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use("/api/diagnoses", DiagnosisRouter);
app.use("/api/patients", PatientRouter);
app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
