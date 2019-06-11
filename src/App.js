const _ = require("lodash");
const fs = require("fs");
const inquirer = require("inquirer");

const Word = require("./Word");

function App() {
  if (!(this instanceof App)) {
    return new App(...arguments);
  }

  this.words = fs
    .readFileSync("words.txt", "utf8")
    .split("\n")
    .map(w => w.trim());
}

App.prototype.run = function() {
  (async () => {
    const x = Math.floor(Math.random() * 100) % this.words.length;
    const word = new Word(this.words[_.random(this.words.length)]);
    const max_guesses = word.length * 2;
    const guessed = [];

    while (!word.isSolved && guessed.length < max_guesses) {
      console.log();
      console.log("Guesses Left:", max_guesses - guessed.length);
      console.log();
      console.log(`[${word}]`);
      console.log();

      let answers = await inquirer.prompt([
        {
          type: "input",
          name: "letter",
          message: "> ",
          validate: input =>
            input.length === 1 ? true : "Enter a single leter."
        }
      ]);

      guessed.push(answers.letter);
      word.reveal(answers.letter);
    }

    if (word.isSolved) {
      console.log("you got it!");
    } else {
      console.log("the word was...");
      word.revealAll();
    }

    console.log();
    console.log(`[${word}]`);
    console.log();
  })();
};

module.exports = App;
