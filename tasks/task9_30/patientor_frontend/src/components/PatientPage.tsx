import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import patientService from "../services/patients";
import EntryDetails from "./EntryDetails";
import { Patient, Entry } from "../types";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";

//import { useStateValue } from "../state/StateProvider";
import { Box, Container, Typography, List } from "@mui/material";

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
  if (!patient) {
    return <Typography>Loading patient...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 2 }} gutterBottom>
        {patient.name} {patient.gender === "male" && <MaleIcon />}
        {patient.gender === "female" && <FemaleIcon />}
        {patient.gender === "other" && <TransgenderIcon />}
      </Typography>
      <Typography>SSN: {patient.ssn}</Typography>
      <Typography>Occupation: {patient.occupation}</Typography>

      <Box mt={4}>
        <Typography variant="h5">Entries</Typography>
        {patient.entries.length === 0 && <Typography>No entries</Typography>}
        <List>
          {patient.entries.map((entry) => (
            <EntryDetails key={entry.id} entry={entry} />
          ))}
        </List>
        {/* <List>
          {patient.entries.map((entry: Entry) => (
          ...
        </List> */}
      </Box>
    </Container>
  );
};

export default PatientPage;
