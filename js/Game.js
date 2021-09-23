/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [new Phrase("Phrase 1"), 
                        new Phrase("Phrase 2"), 
                        new Phrase("Phrase 3"), 
                        new Phrase("Phrase 4"), 
                        new Phrase("Phrase 5")];
        this.activePhrase = null;
    }

    /**
     * Begins game by selecting a random phrase and displaying it to the user
     */
    startGame() {
        document.getElementById("game-over-message").innerHTML = "";
        document.getElementById("overlay").style.visibility = "hidden";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }

    handleInteractions() {

    }

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