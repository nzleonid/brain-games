import readlineSync from 'readline-sync';

const isEven = (num) => {
  const rightAnswer = (num % 2 === 0) ? 'yes' : 'no';
  return rightAnswer;
};

const even = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(randomNum);
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}`);
};

export default even;
