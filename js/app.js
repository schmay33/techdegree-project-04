/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.getElementById("btn__reset");
const keys = document.getElementsByClassName("key");
const game = new Game();

//Listens for a key press and if it's a letter than run the handleInteration method
document.onkeyup = function (event) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    if (alphabet.includes(event.key)) {
        for (let key of keys) {
            if (key.innerHTML === event.key) {
                game.handleInteraction(key);
            }
        }
    }
}

//add click event listener to the gameboard keys
for (let key of keys) {
    key.addEventListener('click', function (event) {
        game.handleInteraction(event.target);
    });
}

//add click event listener to start the game button
startButton.addEventListener('click', function (event) {
    game.startGame();
});