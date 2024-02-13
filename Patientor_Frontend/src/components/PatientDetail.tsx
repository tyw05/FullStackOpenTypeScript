import { useParams } from "react-router-dom";
import patientService from "../services/patients";
import diagnosesService from "../services/diagnoses";
import { useState, useEffect } from "react";
import { Diagnosis, Entry, Patient } from "../types";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";

interface EntryProps {
  entries: Entry[];
}
const PatientDetail = () => {
  const [patient, setPatient] = useState<null | Patient>(null);
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);
  const params = useParams();
  useEffect(() => {
    const fetchPatient = async () => {
      if (params.id !== undefined) {
        const data = await patientService.getById(params.id);
        setPatient(data);
      }
    };
    const fetchDiagnoses = async () => {
      const data = await diagnosesService.getAll();
      setDiagnoses(data);
    };

    fetchPatient();
    fetchDiagnoses();
  }, []);

  const Entries = ({ entries }: EntryProps) => {
    const entryCheck = (diagnosisCodes: string[] | undefined) => {
      if (diagnosisCodes !== undefined) {
        return (
          <ul>
            {diagnosisCodes.map((code, index) => {
              const diagnosis = diagnoses.find((d) => d.code === code);
              return (
                <li key={index}>
                  {code} {diagnosis?.name}
                </li>
              );
            })}
          </ul>
        );
      }
    };
    return (
      <div>
        <h2>Entries</h2>
        {entries.map((entry, index) => (
          <div key={index}>
            <p>{entry.date}</p>
            <span style={{ fontStyle: "italic" }}>{entry.description}</span>
            {entryCheck(entry.diagnosisCodes)}
            <ul></ul>
          </div>
        ))}
      </div>
    );
  };
  if (patient) {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h1>{patient.name}</h1>
          {patient.gender === "male" ? (
            <MaleIcon sx={{ marginTop: "20px" }} />
          ) : (
            <FemaleIcon sx={{ marginTop: "20px" }} />
          )}
        </div>
        <p>ssn: {patient.ssn}</p>
        <p>occupation: {patient.occupation}</p>
        <div>
          {patient.entries.length > 0 ? (
            <Entries entries={patient.entries} />
          ) : null}
        </div>
      </div>
    );
  }

  return <div>Incorrect ID</div>;
};

export default PatientDetail;
