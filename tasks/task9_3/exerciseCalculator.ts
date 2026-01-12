// task9_3/exerciseCalculator.ts
interface ValuesEx {
  val2: number; // target
  val1: number[]; // daily hours
}
const parseArguments = (args: string[]): ValuesEx => {
  if (args.length < 3)
    throw new Error("Not enough arguments. Provide target and daily hours.");
  const target = Number(args[2]);
  const dailyHours = args.slice(3).map(Number); //конвертируем строку в array чисел
  if (isNaN(target) || dailyHours.some(isNaN)) {
    throw new Error("All arguments must be numbers.");
  }
  return {
    val1: dailyHours,
    val2: target,
  };
};

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}
const calculateExercises = (
  dailyHours: number[],
  targetHours: number
): Result => {
  const periodLength = dailyHours.length;
  const trainingDays = dailyHours.filter((day) => day > 0).length;
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const average = totalHours / periodLength;
  const success = average >= targetHours;
  let rating: number;
  let ratingDescription: string;
  if (average >= targetHours) {
    rating = 3;
    ratingDescription = "excellent, target achieved!";
  } else if (average >= targetHours * 0.75) {
    rating = 2;
    ratingDescription = "not too bad but could be better";
  } else {
    rating = 1;
    ratingDescription = "needs improvement";
  }
  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target: targetHours,
    average,
  };
};

// parameters from command line
//calculateExercises 3 0 2 4.5  3 1
try {
  const { val1, val2 } = parseArguments(process.argv); //извлекаем значения из возвращаемого объекта

  const result = calculateExercises(val1, val2);
  console.log(result);
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    //
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
