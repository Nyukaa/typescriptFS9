interface TotalProps {
  total: number;
}

const Total = ({ total }: TotalProps) => {
  return <h4>Number of exercises {total}</h4>;
};

export default Total;
