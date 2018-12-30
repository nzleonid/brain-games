import gameEngine from '..';
import randomNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (question) => {
  const maxDivider = question / 2;
  if (question <= 1) {
    return false;
  }
  for (let i = 2; i < maxDivider; i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const question = randomNum(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => gameEngine(description, prime);
