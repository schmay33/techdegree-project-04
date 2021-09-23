/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.getElementById("btn__reset");
startButton.addEventListener('click', function (event) {
    const game = new Game();
    game.startGame();
});