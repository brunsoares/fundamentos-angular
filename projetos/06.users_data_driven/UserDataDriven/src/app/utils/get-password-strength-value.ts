import * as zxcvbn from 'zxcvbn';

export const getPasswordStrengthValue = (password: string): number => {
  let strength: number = 0;
  if (!password) return strength;

  const result = zxcvbn.default(password);

  const WEAK_PASSWORD = result.score <= 1;
  const MEDIUM_PASSWORD = result.score === 2 || result.score === 3;

  if (WEAK_PASSWORD) {
    strength = 30;
  } else if (MEDIUM_PASSWORD) {
    strength = 60;
  } else {
    strength = 100;
  }

  return strength;
};
