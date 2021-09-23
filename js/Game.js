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
        console.log('asdf');
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

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {

    }
}