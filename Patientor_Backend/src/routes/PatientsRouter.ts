import express from "express";
import {
  getPatients,
  getPatientsNoSSN,
  addPatient,
} from "../services/patientService";
import toNeWPatientEntry from "../utils/toNewPatientEntry";

const PatientRouter = express.Router();

PatientRouter.get("/", (_req, res) => {
  res.send(getPatientsNoSSN());
});

PatientRouter.get("/ssn", (_req, res) => {
  res.send(getPatients());
});

PatientRouter.get("/:id", (req, res) => {
  const patient = getPatients().find((patient) => patient.id === req.params.id);
  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});

PatientRouter.post("/", (req, res) => {
  if (toNeWPatientEntry(req.body)) {
    const { name, dateOfBirth, gender, occupation, ssn } = req.body;
    const addedPatient = addPatient(name, dateOfBirth, gender, occupation, ssn);
    res.json(addedPatient);
  } else {
    res.status(400).send("Invalid data");
  }
});

export default PatientRouter;
