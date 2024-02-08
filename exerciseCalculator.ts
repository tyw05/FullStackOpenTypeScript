interface ExerciseInfo {
  dayOfExercise: number[];
  target: number;
}

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const parser = (args: string[]): ExerciseInfo => {
  if (args.length < 0) throw new Error("Not enough arguments");

  const NumberedDay = args.map((arg) => Number(arg));
  console.log(NumberedDay);
  const dayOfExercise = NumberedDay.slice(2, args.length - 1);
  const target = Number(args[args.length - 1]);
  console.log(dayOfExercise, target);
  return { dayOfExercise, target };
};

const calculateExercises = (
  dayOfExercise: number[],
  target: number
): Result => {
  const periodLength = dayOfExercise.length;
  const trainingDays = dayOfExercise.filter((day) => day > 0).length;
  const average = dayOfExercise.reduce((a, b) => a + b, 0) / periodLength;
  let rating: number;
  let ratingDescription: string;
  const success = average >= target;

  if (average > 2) {
    rating = 3;
    ratingDescription = "Good";
  } else if (average < 2 && average > 1) {
    rating = 2;
    ratingDescription = "Not too bad but could be better";
  } else {
    rating = 1;
    ratingDescription = "Bad";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

const { dayOfExercise, target } = parser(process.argv);
console.log(calculateExercises(dayOfExercise, target));
