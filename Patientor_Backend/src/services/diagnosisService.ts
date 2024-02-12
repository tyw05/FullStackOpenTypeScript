import diagnoses from "../data/diagnose";

import { Diagnosis } from "../types";

const getDiagnoses = (): Diagnosis[] => {
  return diagnoses;
};

export { getDiagnoses };
