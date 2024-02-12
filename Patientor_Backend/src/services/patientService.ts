import patients from "../data/patients";
import { NoSSNPatient, Patient } from "../types";

const getPatients = (): Patient[] => {
  return patients;
};

const getPatientsNoSSN = (): NoSSNPatient[] => {
  return patients.map((patient) => ({
    id: patient.id,
    name: patient.name,
    dateOfBirth: patient.dateOfBirth,
    gender: patient.gender,
    occupation: patient.occupation,
  }));
};

export { getPatients, getPatientsNoSSN };
