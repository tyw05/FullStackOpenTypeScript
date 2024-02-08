interface BodyInfo {
  height: number;
  weight: number;
}

const bmiParser = (args: string[]): BodyInfo => {
  return {
    height: Number(args[2]),
    weight: Number(args[3]),
  };
};

const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / Math.pow(height / 100, 2);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi > 24.9) {
    return "Overweight";
  } else {
    return "Normal (healthy weight)";
  }
};

const { height, weight } = bmiParser(process.argv);
console.log(calculateBmi(height, weight));
