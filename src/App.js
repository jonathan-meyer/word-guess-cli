const inquirer = require("inquirer");

function App() {
  if (!(this instanceof App)) {
    return new App(...arguments);
  }

  this.args = arguments;
}

App.prototype.run = () => {};

module.exports = App;
