import gameEngine from '..';
import randomNum from '../utils';

const description = 'What number is missing in the progression?\n';

const quantityNum = 10;

const progression = () => {
  let num = randomNum(1, 100);
  const step = randomNum(1, 100);
  const rightPosition = randomNum(1, quantityNum);
  let question = '';
  let rightAnswer;
  for (let i = 1; i <= quantityNum; i += 1) {
    if (i === rightPosition) {
      question += '.. ';
      rightAnswer = String(num);
    } else {
      question += `${num} `;
    }
    num += step;
  }
  return [question, rightAnswer];
};

export default () => gameEngine(description, progression);
