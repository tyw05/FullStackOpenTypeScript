import patients from "../data/patients";
import { Gender, NoSSNPatient, Patient } from "../types";
import { v4 as uuidv4 } from "uuid";

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
  };
  patients.push(newPatient);
  return newPatient;
};
export { getPatients, getPatientsNoSSN, addPatient };
