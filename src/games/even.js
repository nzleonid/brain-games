import gameEngine from '..';
import randomNum from '../utils';

const isEven = num => num % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';
const even = () => {
  const question = randomNum(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameEngine(description, even);
