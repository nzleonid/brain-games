import readlineSync from 'readline-sync';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = num => num % 2 === 0;

const even = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  for (let round = 0; round < 3; round += 1) {
    const question = randomNum(1, 100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(question) ? 'yes' : 'no';
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
