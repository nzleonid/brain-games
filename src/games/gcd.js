import gameEngine from '..';
import randomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcdFind = (x, y) => {
  let divider = Math.min(x, y);
  while (true) {
    if (x % divider === 0 && y % divider === 0) {
      return divider;
    }
    divider -= 1;
  }
};

const gcd = () => {
  const x = Math.abs(randomNum(1, 100));
  const y = Math.abs(randomNum(1, 100));
  const question = `${x} ${y}`;
  const rightAnswer = gcdFind(x, y);
  return [question, String(rightAnswer)];
};

export default () => gameEngine(description, gcd);
