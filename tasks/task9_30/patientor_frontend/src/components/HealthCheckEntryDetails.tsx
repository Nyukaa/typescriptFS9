import { HealthCheckEntry } from "../types";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card, CardContent, Typography } from "@mui/material";
import { useStateValue } from "../state/StateProvider";

interface Props {
  entry: HealthCheckEntry;
}
const HealthCheckEntryDetails = ({ entry }: Props) => {
  const [{ diagnoses }] = useStateValue();
  const color =
    entry.healthCheckRating === 0
      ? "green"
      : entry.healthCheckRating === 1
      ? "yellow"
      : entry.healthCheckRating === 2
      ? "orange"
      : "red";
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography>
          {entry.date} <FavoriteIcon sx={{ color }} />
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
      </CardContent>
    </Card>
  );
};

export default HealthCheckEntryDetails;
