import express from "express";
import { getDiagnoses } from "../services/diagnosisService";

const DiagnosisRouter = express.Router();

DiagnosisRouter.get("/", (_req, res) => {
  res.send(getDiagnoses());
});

export default DiagnosisRouter;
