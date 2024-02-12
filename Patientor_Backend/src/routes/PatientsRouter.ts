import express from "express";
import { getPatients, getPatientsNoSSN } from "../services/patientService";

const PatientRouter = express.Router();

PatientRouter.get("/", (_req, res) => {
  res.send(getPatientsNoSSN());
});

PatientRouter.get("/ssn", (_req, res) => {
  res.send(getPatients());
});

export default PatientRouter;
