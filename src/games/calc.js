import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const pair = (x, y) => cons(x, y);

const calc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);
  const operationList = '+-*';
  for (let round = 0; round < 3; round += 1) {
    const numbers = pair(randomNum(1, 100), randomNum(1, 100));
    const x = car(numbers);
    const y = cdr(numbers);
    const operation = operationList[randomNum(0, 3)];
    console.log(`Question: ${x} ${operation} ${y}`);
    const answer = readlineSync.question('Your answer: ');
    let rightAnswer;
    switch (operation) {
      case '+': {
        rightAnswer = String(x + y);
        break;
      }
      case '-': {
        rightAnswer = String(x - y);
        break;
      }
      case '*': {
        rightAnswer = String(x * y);
        break;
      }
      default:
        rightAnswer = 'Error';
    }
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}`);
};

export default calc;
