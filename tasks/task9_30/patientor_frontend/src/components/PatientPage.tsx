import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import patientService from "../services/patients";
import { Patient } from "../types";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";
const PatientPage = () => {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        if (id) {
          const fetchedPatient = await patientService.getById(id);
          setPatient(fetchedPatient);
        }
      } catch (e) {
        console.error("Failed to fetch patient", e);
      }
    };
    void fetchPatient();
  }, [id]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>
        {patient.name}
        {patient.gender === "male" && <MaleIcon />}
        {patient.gender === "female" && <FemaleIcon />}
        {patient.gender === "other" && <TransgenderIcon />}
      </h2>
      <p>ssn: {patient.ssn}</p>
      <p>occupation: {patient.occupation}</p>

      <h3>entries</h3>

      {patient.entries.length === 0 && <p>No entries</p>}
      {/* {patient.entries.length === 0 ? (
        <p>No entries</p>
      ) : (
        patient.entries.map((e) => <div key={e.id}>entry</div>)
      )} */}
    </div>
  );
};

export default PatientPage;
