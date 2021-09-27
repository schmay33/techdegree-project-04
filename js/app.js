/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.getElementById("btn__reset");
const keys = document.getElementsByClassName("key");
let game = null;
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let usedLetters = []

//Listens for a key press and if it's a letter than run the handleInteration method
document.onkeyup = function addKeyListener(event) {
    if (game != null && game.activePhrase != null && !usedLetters.includes(event.key)) {
        if (alphabet.includes(event.key)) {
            if (!usedLetters.includes(event.key)) usedLetters.push(event.key);
            for (let key of keys) {
                if (key.innerHTML === event.key) {
                    game.handleInteraction(key);
                }
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
    game = new Game();
    usedLetters = [];
    game.startGame();
});