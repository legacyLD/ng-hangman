console.log('app.js loaded!');

// initialize the application
angular
  .module("hangmanApp", [])
  .controller("HangmanController", HangmanController);

function HangmanController() {
  var vm = this;
  vm.hangman = new HangmanGame('elephant');
  // vm.hangman.guess('e');
  // vm.hangman.guess('f');
  vm.guessLetter = function(input) {
    // guess the letter
    vm.hangman.guess(input);
    // clear the input
    vm.hangman.input = "";
  }
}
