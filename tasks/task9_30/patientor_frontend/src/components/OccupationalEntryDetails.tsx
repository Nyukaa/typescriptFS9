import { OccupationalHealthcareEntry } from "../types";

import { Card, CardContent, Typography } from "@mui/material";
import { useStateValue } from "../state/StateProvider";
import WorkIcon from "@mui/icons-material/Work";
interface Props {
  entry: OccupationalHealthcareEntry;
}

const OccupationalEntryDetails = ({ entry }: Props) => {
  const [{ diagnoses }] = useStateValue();
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle1">
          {entry.date} <WorkIcon /> {entry.employerName}
        </Typography>

        <Typography variant="body2" sx={{ fontStyle: "italic" }}>
          {entry.description}
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

        {entry.sickLeave && (
          <Typography variant="body2">
            Sick leave: {entry.sickLeave.startDate} – {entry.sickLeave.endDate}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default OccupationalEntryDetails;
