/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.getElementById("btn__reset");
const keys = document.getElementsByClassName("key");
const game = new Game();

for (let key of keys) {
    key.addEventListener('click', function (event) {
        game.handleInteraction(event.target);
    });
}

startButton.addEventListener('click', function (event) {
    game.startGame();
});