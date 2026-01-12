//task5_bmiCalc.ts for index.ts
const calculateBmi = (heightCm: number, weightKg: number): string => {
  if (heightCm <= 0) throw new Error("Height must be greater than zero.");
  if (weightKg < 0) throw new Error("Weight cannot be negative.");

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  console.log("Calculated BMI:", bmi.toFixed(2));

  if (bmi <= 25) {
    return "Normal range";
  } else if (bmi > 25 && bmi <= 29.5) {
    return "Overweight";
  } else {
    return "Obese";
  }
};
export { calculateBmi };
