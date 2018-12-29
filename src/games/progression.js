import gameEngine from '..';
import randomNum from '../utils';

const description = 'What number is missing in the progression?';

const quantityNum = 10;

const progression = () => {
  const firstElemet = randomNum(1, 100);
  const step = randomNum(1, 100);
  const rightPosition = randomNum(1, quantityNum);
  let question = '';
  const rightAnswer = String(firstElemet + step * rightPosition);
  for (let i = 1; i <= quantityNum; i += 1) {
    if (i === rightPosition) {
      question = `${question} ..`;
    } else {
      question = `${question} ${firstElemet + step * i}`;
    }
  }
  return [question.substr(1), rightAnswer];
};

export default () => gameEngine(description, progression);
