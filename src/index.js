import readlineSync from 'readline-sync';


const gameEngine = (rules, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello ${username}!\n`);
  const roundNumber = 3;
  for (let roundCounter = 0; roundCounter < roundNumber; roundCounter += 1) {
    const [question, rightAnswer] = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}`);
};
export default gameEngine;
