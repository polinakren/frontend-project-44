#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (number) => (number % 2 === 0);

const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const attempts = 3;
  let correctAnswers = 0;

  while (correctAnswers <= attempts) {
    if (correctAnswers === attempts) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }

    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}\nLet's try again, ${userName}!`);
      break;
    }
  }
};

brainEvenGame();
