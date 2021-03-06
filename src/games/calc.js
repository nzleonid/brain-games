import gameEngine from '..';
import randomNum from '../utils';

const description = 'What is the result of the expression?';

const operationList = '+-*';

const calc = () => {
  const x = randomNum(1, 100);
  const y = randomNum(1, 100);
  const operation = operationList[randomNum(0, operationList.length)];
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

export default () => gameEngine(description, calc);
