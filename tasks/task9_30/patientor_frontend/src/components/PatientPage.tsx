import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import patientService from "../services/patients";
import EntryDetails from "./EntryDetails";
import { Patient, EntryWithoutId } from "../types";
import AddEntryModal from "./Forms/AddEntryModal";
import { Button } from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";
import { Box, Container, Typography, List } from "@mui/material";

const PatientPage = () => {
  const { id } = useParams<{ id: string }>();

  const [patient, setPatient] = useState<Patient | null>(null);
  const [error, setError] = useState<string | undefined>();
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setError(undefined);
  };
  //fetch patient data
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
  //function to submit new entry
  const submitNewEntry = async (entry: EntryWithoutId) => {
    try {
      if (id) {
        const addedEntry = await patientService.addEntry(id, entry);

        setPatient((prevPatient) =>
          prevPatient
            ? {
                ...prevPatient,
                entries: prevPatient.entries.concat(addedEntry),
              }
            : prevPatient
        );
        closeModal();
      }
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        if (e.response && typeof e.response.data === "string") {
          setError(e.response.data);
        } else {
          setError("Something went wrong");
        }
      } else {
        setError("Unknown error");
      }
    }
  };
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

      <Button variant="contained" onClick={openModal}>
        Add new entry
      </Button>
      <AddEntryModal
        modalOpen={modalOpen}
        onClose={closeModal}
        onSubmit={submitNewEntry}
        error={error}
      />

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
