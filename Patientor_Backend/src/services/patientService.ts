import patients from "../data/patients";
import { Gender, NoSSNPatient, Patient } from "../types";
import { v4 as uuidv4 } from "uuid";

const getPatients = (): Patient[] => {
  console.log(patients);
  return patients;
};

const getPatientsNoSSN = (): NoSSNPatient[] => {
  return patients.map((patient) => ({
    id: patient.id,
    name: patient.name,
    dateOfBirth: patient.dateOfBirth,
    gender: patient.gender,
    occupation: patient.occupation,
    entries: patient.entries,
  }));
};

const addPatient = (
  name: string,
  dateOfBirth: string,
  gender: Gender,
  occupation: string,
  ssn: string
) => {
  const newPatient = {
    id: uuidv4(),
    name: name,
    dateOfBirth: dateOfBirth,
    gender: gender,
    occupation: occupation,
    ssn: ssn,
    entries: [],
  };
  patients.push(newPatient);
  return newPatient;
};
export { getPatients, getPatientsNoSSN, addPatient };
