export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const generateQuestionAndAnswer = (minRange, maxRange, rule) => {
  const randomNumber = generateRandomNumber(minRange, maxRange);
  const question = randomNumber.toString();
  const correctAnswer = rule(randomNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};
