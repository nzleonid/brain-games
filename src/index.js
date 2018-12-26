import readlineSync from 'readline-sync';

const learnName = () => {
  const actual = readlineSync.question('May I have your name? ');
  return `Hello, ${actual}!`;
};
export default learnName;
