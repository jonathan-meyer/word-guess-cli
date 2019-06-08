const Letter = require("./Letter");

function Word(word) {
  if (!(this instanceof Word)) {
    return new Word(...arguments);
  }

  if (!(typeof word === "string")) {
    throw "`word` argument required";
  }

  Object.defineProperty(this, "value", {
    value: word.split("").map(c => new Letter(c)),
    writable: false
  });

  Object.defineProperty(this, "isSolved", {
    get: () => this.value.filter(l => !l.isVisible).length === 0
  });
}

Word.prototype.toString = function() {
  return this.value.join(" ");
};

Word.prototype.reveal = function(letter) {
  this.value
    .filter(l => l.value.toLowerCase() === letter.toLowerCase())
    .map(l => (l.isVisible = true));
};

module.exports = Word;
