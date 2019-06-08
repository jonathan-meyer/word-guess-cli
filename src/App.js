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

    while (!word.isSolved) {
      console.log();
      console.log(`[${word}]`);
      console.log();

      let answers = await inquirer.prompt([
        {
          name: "letter",
          message: "> "
        }
      ]);

      word.reveal(answers.letter);
    }
  })();
};

module.exports = App;
