import { HospitalEntry } from "../types";

import { Card, CardContent, Typography } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { useStateValue } from "../state/StateProvider";
interface Props {
  entry: HospitalEntry;
}

const HospitalEntryDetails = ({ entry }: Props) => {
  const [{ diagnoses }] = useStateValue();
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle1">
          {entry.date} <LocalHospitalIcon />
        </Typography>

        <Typography sx={{ fontStyle: "italic" }}>
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

        <Typography>
          Discharge: {entry.discharge.date} – {entry.discharge.criteria}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HospitalEntryDetails;
