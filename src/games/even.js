import gameEngine from '..';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = num => num % 2 === 0;
const rules = ('Answer "yes" if number even otherwise answer "no".\n');
const even = () => {
  const question = randomNum(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameEngine(rules, even);
