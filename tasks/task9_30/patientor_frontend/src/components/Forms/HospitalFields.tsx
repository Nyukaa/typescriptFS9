import { TextField } from "@mui/material";
interface Props {
  dischargeDate: string;
  setDischargeDate: (value: string) => void;
  criteria: string;
  setCriteria: (value: string) => void;
}

const HospitalFields = ({
  criteria,
  setCriteria,
  dischargeDate,
  setDischargeDate,
}: Props) => (
  <div>
    <TextField
      fullWidth
      label="Discharge date"
      type="date"
      value={dischargeDate}
      onChange={(e) => setDischargeDate(e.target.value)}
      style={{ marginTop: 10 }}
      InputLabelProps={{ shrink: true }}
    />

    <TextField
      fullWidth
      label="Criteria"
      value={criteria}
      onChange={(e) => setCriteria(e.target.value)}
      style={{ marginTop: 10 }}
    />
  </div>
);

export default HospitalFields;
