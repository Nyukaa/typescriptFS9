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
    <label>Date</label>
    <input
      type="date"
      value={dischargeDate}
      onChange={(e) => setDischargeDate(e.target.value)}
    />
    <label>criteria</label>
    <input
      placeholder="criteria"
      value={criteria}
      onChange={(e) => setCriteria(e.target.value)}
    />
  </div>
);

export default HospitalFields;
