const Letter = require("./Letter");

function Word(word) {
  if (!(this instanceof Word)) {
    return new Word(...arguments);
  }

  if (!(typeof word === "string")) {
    throw "`word` argument required";
  }

  this.value = word.split("").map(c => new Letter(c));
}

Word.prototype.toString = function() {
  return this.value.join(" ");
};

module.exports = Word;
