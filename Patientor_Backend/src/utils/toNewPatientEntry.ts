import { Gender, NewPatientEntry } from "../types";

const isString = (param: unknown): param is string => {
  return typeof param === "string" || param instanceof String;
};

const isGender = (gender: string): gender is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(gender);
};

const parseName = (name: unknown): string => {
  if (!isString(name)) {
    throw new Error("Incorrect type or missing name");
  }
  return name;
};

const parsedateOfBirth = (dateOfBirth: unknown): string => {
  if (!isString(dateOfBirth)) {
    throw new Error("Incorrect type or missing date Of birth");
  }
  return dateOfBirth;
};

const parsedSSN = (ssn: unknown): string => {
  if (!isString(ssn)) {
    throw new Error("Incorrect type or missing ssn");
  }
  return ssn;
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    console.log(gender);
    throw new Error("Incorrect type or missing gender");
  }
  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if (!isString(occupation)) {
    throw new Error("Incorrect type or missing occupation");
  }
  return occupation;
};

const toNeWPatientEntry = (object: unknown): NewPatientEntry => {
  if (object === null || typeof object !== "object") {
    throw new Error("Incorrect type or missing object");
  }
  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newEntry: NewPatientEntry = {
      name: parseName(object.name),
      dateOfBirth: parsedateOfBirth(object.dateOfBirth),
      ssn: parsedSSN(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
    };

    return newEntry;
  }

  throw new Error("Incorrect data: a field missing");
};

export default toNeWPatientEntry;
