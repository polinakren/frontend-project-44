import main from '../index.js';
import generateRandomNumber from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = 1;
const maxRange = 50;

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const beginRound = () => {
  const randomNumber = generateRandomNumber(minRange, maxRange);
  const question = randomNumber.toString();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const brainPrimeGame = () => main(rule, beginRound);

export default brainPrimeGame;
