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
// Hardcoded parameters for testing

const dailyHours = [3, 1, 2, 4.5, 6, 3, 1];
const targetHours = 2;
const result = calculateExercises(dailyHours, targetHours);
console.log(result);
