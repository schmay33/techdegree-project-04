/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [new Phrase("Phrase E"),
                        new Phrase("Phrase A"), 
                        new Phrase("Phrase G"), 
                        new Phrase("Phrase R"), 
                        new Phrase("Phrase W")];
        this.activePhrase = null;
    }

    /**
     * Begins game by selecting a random phrase and displaying it to the user
     */
    startGame() {
        this.resetBoard();
        document.getElementById("game-over-message").innerHTML = "";
        document.getElementById("overlay").style.visibility = "hidden";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Resets the game board to the default
     */
    resetBoard() {
        this.missed = 0;
        document.querySelector("#phrase ul").innerHTML = "";
        const keys = document.getElementsByClassName("key");
        for (let key of keys) {
            key.disabled = false;
            key.classList.remove("chosen");
            key.classList.remove("wrong");
        }

        const hearts = document.querySelectorAll('img[alt="Lost Icon"');
        for (let heart of hearts) {
            heart.src = "images/liveHeart.png";
            heart.alt = "Heart Icon";
        }
    }

    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param {HTMLButtonElement} button - The clicked button element
     */
    handleInteraction(button) {
        button.disabled = true;
        button.style.cursor = "not-allowed";
        const letter = button.innerHTML;
        if (this.activePhrase.checkLetter(letter)) {
            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add("wrong");
            this.removeLife();
        }
    };

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out of lives
     */
    removeLife() {
        const image = document.querySelector('img[alt="Heart Icon"');
        image.src = "images/lostHeart.png";
        image.alt = "Lost Icon";
        this.missed +=1;
        if (this.missed === 5) this.gameOver(false);
    }

    /**
     * Checks for winning move
     * @returns {boolean} - True if game has been won, false if game wasn't won
     */
    checkForWin() {
        const letters = document.getElementsByClassName("letter");
        let count = 0;
        for (let letter of letters) {
            if (letter.classList.contains("hide")) {
                count++;
            }
        }
        return count > 0 ? false : true;
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        document.getElementById("overlay").style.visibility = "visible";
        const title = document.getElementById("game-over-message");
        const start = document.querySelector(".start");
        if(gameWon) {
            start.classList.add("win");
            start.classList.remove("lose");
            title.innerHTML = "Game Won - Great Job!";
        } else {
            start.classList.remove("win");
            start.classList.add('lose');
            title.innerHTML = "Game Lost - Better luck next time!";
        }
    }
}