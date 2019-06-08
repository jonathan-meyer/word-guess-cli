function Letter(character) {
  if (!(this instanceof Letter)) {
    return new Letter(...arguments);
  }

  if (
    typeof character !== "string" ||
    character.length > 1 ||
    character.length === 0
  ) {
    throw "`character` argument required";
  }

  let visible = false;

  Object.defineProperty(this, "value", {
    value: character,
    writable: false
  });

  Object.defineProperty(this, "isWhitespace", {
    value: /^\s$/.test(character),
    writable: false
  });

  Object.defineProperty(this, "isVisible", {
    get: () => visible,
    set: value => (visible = value ? true : false)
  });
}

Letter.prototype.toString = function() {
  return this.isVisible || this.isWhitespace ? this.value : "_";
};

module.exports = Letter;
