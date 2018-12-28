import { cons, car, cdr } from 'hexlet-pairs';
import gameEngine from '..';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const rules = ('What is the result of the expression?\n');
const pair = (x, y) => cons(x, y);

const calc = () => {
  const operationList = '+-*';
  const numbers = pair(randomNum(1, 100), randomNum(1, 100));
  const x = car(numbers);
  const y = cdr(numbers);
  const operation = operationList[randomNum(0, 3)];
  let rightAnswer;
  let question;
  switch (operation) {
    case '+': {
      question = `${x} + ${y}`;
      rightAnswer = String(x + y);
      break;
    }
    case '-': {
      question = `${x} - ${y}`;
      rightAnswer = String(x - y);
      break;
    }
    case '*': {
      question = `${x} * ${y}`;
      rightAnswer = String(x * y);
      break;
    }
    default:
      rightAnswer = 'Error';
  }
  return [question, rightAnswer];
};

export default () => gameEngine(rules, calc);
