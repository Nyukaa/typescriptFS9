import { TextField } from "@mui/material";
interface Props {
  healthCheckRating: string;
  setHealthCheckRating: (value: string) => void;
}

const HealthCheckFields = ({
  healthCheckRating,
  setHealthCheckRating,
}: Props) => (
  <div>
    <TextField
      fullWidth
      label="Health check rating"
      type="number"
      value={healthCheckRating}
      onChange={(e) => setHealthCheckRating(e.target.value)}
      InputLabelProps={{ shrink: true }}
      inputProps={{ min: 0, max: 3 }}
      style={{ marginTop: 10 }}
    />
  </div>
);

export default HealthCheckFields;
