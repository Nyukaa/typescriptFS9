import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import patientService from "../services/patients";

import { Patient, Entry } from "../types";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";
import { useStateValue } from "../state/StateProvider";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const PatientPage = () => {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [{ diagnoses }] = useStateValue();
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
          {patient.entries.map((entry: Entry) => (
            <ListItem
              key={entry.id}
              alignItems="flex-start"
              sx={{ mb: 2, border: "1px solid #ccc", borderRadius: 2, p: 2 }}
            >
              <ListItemText
                primary={`${entry.date} (${entry.type})`}
                secondary={
                  <>
                    <Typography>{entry.description}</Typography>
                    {entry.diagnosisCodes &&
                      entry.diagnosisCodes.length > 0 && (
                        <Box mt={1}>
                          <Typography variant="subtitle2">
                            Diagnosis Codes:
                          </Typography>

                          {entry.diagnosisCodes && (
                            <ul>
                              {entry.diagnosisCodes.map((code) => (
                                <li key={code}>
                                  {code} {diagnoses[code]?.name}
                                </li>
                              ))}
                            </ul>
                          )}
                        </Box>
                      )}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

//   return (
//     <div>
//       <h2>
//         {patient.name}
//         {patient.gender === "male" && <MaleIcon />}
//         {patient.gender === "female" && <FemaleIcon />}
//         {patient.gender === "other" && <TransgenderIcon />}
//       </h2>
//       <p>ssn: {patient.ssn}</p>
//       <p>occupation: {patient.occupation}</p>

//       <h3>entries</h3>

//       {patient.entries.length === 0 && <p>No entries</p>}
//       {patient.entries.map((entry) => {
//         switch (entry.type) {
//           case "Hospital":
//             return (
//               <div key={entry.id}>
//                 <strong>Hospital:</strong> {entry.description} <br />
//                 Discharge: {entry.discharge.date} ({entry.discharge.criteria})
//               </div>
//             );
//           case "OccupationalHealthcare":
//             return (
//               <div key={entry.id}>
//                 <strong>Occupational Healthcare:</strong> {entry.description}{" "}
//                 <br />
//                 Employer: {entry.employerName}
//                 {entry.sickLeave && (
//                   <div>
//                     Sick leave: {entry.sickLeave.startDate} -{" "}
//                     {entry.sickLeave.endDate}
//                   </div>
//                 )}
//               </div>
//             );
//           case "HealthCheck":
//             return (
//               <div key={entry.id}>
//                 <strong>Health Check:</strong> {entry.description} <br />
//                 Rating: {entry.healthCheckRating}
//               </div>
//             );
//         }
//       })}
//     </div>
//   );
// };

export default PatientPage;
