#!/usr/bin/env node
import readlineSync from 'readline-sync';

const even = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  let counter = 0;
  while (counter < 3) {
    const randomNum = Math.floor(Math.random() * (100 - 1)) + 1;
    const question = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
    if (randomNum % 2 === 0 && question === 'yes') {
      console.log('Correct!');
    } else if (randomNum % 2 !== 0 && question === 'no') {
      console.log('Correct!');
    } else if (randomNum % 2 === 0 && question !== 'yes') {
      console.log(`${question} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${username}`);
      break;
    } else if (randomNum % 2 !== 0 && question !== 'no') {
      console.log(`'${question}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${username}`);
      break;
    }
    counter += 1;
  }
  if (counter === 3) {
    console.log(`Congratulations, ${username}`);
  }
};
even();
export default even;
