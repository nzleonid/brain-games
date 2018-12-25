import readlineSync from 'readline-sync';

export const learn_name = () => {
  const actual = readlineSync.question('May I have your name? ');
  return `Hello, ${actual}!`;
}
export default learn_name;
