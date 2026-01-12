//task3_bmiCalculator.ts
interface Values {
  value1: number;
  value2: number;
}
const parseArgumentsBmi = (args: string[]): Values => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]), //convert string to number
      value2: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

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

// parameters from command line
try {
  const { value1, value2 } = parseArgumentsBmi(process.argv); //extract values from returned object

  const result = calculateBmi(value1, value2);
  console.log(result);
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    //
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
