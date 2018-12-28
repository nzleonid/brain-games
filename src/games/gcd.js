import gameEngine from '..';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const description = ('Find the greatest common divisor of given numbers.\n');

const divisibility = (x, y, divider) => (x % divider === 0) && (y % divider === 0);

const isMin = (x, y) => ((x > y) ? y : x);

const gcd = () => {
  const x = Math.abs(randomNum(1, 100));
  const y = Math.abs(randomNum(1, 100));
  let divider = isMin(x, y);
  const question = `${x} ${y}`;
  let rightAnswer;
  while (true) {
    rightAnswer = divisibility(x, y, divider) ? divider : divider -= 1;
    if (divisibility(x, y, divider) === true || divisibility(y, x, divider) === true) {
      return [question, String(rightAnswer)];
    }
  }
};

export default () => gameEngine(description, gcd);
