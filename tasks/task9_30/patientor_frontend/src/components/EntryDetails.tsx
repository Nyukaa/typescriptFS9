import { Entry } from "../types";
import { assertNever } from "../utils";
import HospitalEntryDetails from "./HospitalEntryDetails";
import OccupationalEntryDetails from "./OccupationalEntryDetails";
import HealthCheckEntryDetails from "./HealthCheckEntryDetails";

interface Props {
  entry: Entry;
}

const EntryDetails = ({ entry }: Props): JSX.Element => {
  switch (entry.type) {
    case "Hospital":
      return <HospitalEntryDetails entry={entry} />;

    case "OccupationalHealthcare":
      return <OccupationalEntryDetails entry={entry} />;

    case "HealthCheck":
      return <HealthCheckEntryDetails entry={entry} />;

    default:
      return assertNever(entry); // Exhaustive type checking
  }
};
// return (
//   <ListItem
//     key={entry.id}
//     alignItems="flex-start"
//     sx={{ mb: 2, border: "1px solid #ccc", borderRadius: 2, p: 2 }}
//   >
//     <ListItemText
//       primary={`${entry.date} (${entry.type})`}
//       secondary={
//         <>
//           <Typography>{entry.description}</Typography>
//           {entry.diagnosisCodes && entry.diagnosisCodes.length > 0 && (
//             <Box mt={1}>
//               <Typography variant="subtitle2">Diagnosis Codes:</Typography>

//               {entry.diagnosisCodes && (
//                 <ul>
//                   {entry.diagnosisCodes.map((code) => (
//                     <li key={code}>
//                       {code} {diagnoses[code]?.name}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </Box>
//           )}
//         </>
//       }
//     />
//   </ListItem>

export default EntryDetails;
