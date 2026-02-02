interface Props {
  healthCheckRating: string;
  setHealthCheckRating: (value: string) => void;
}

const HealthCheckFields = ({
  healthCheckRating,
  setHealthCheckRating,
}: Props) => (
  <div>
    <label>Health check rating</label>
    <input
      type="number"
      min={0}
      max={3}
      value={healthCheckRating}
      onChange={(e) => setHealthCheckRating(e.target.value)}
    />
  </div>
);

export default HealthCheckFields;
