/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        let elem = document.querySelector("#phrase ul");
        for (let i in this.phrase) {
            let newElem = document.createElement("li");
            if (this.phrase[i] === " ") {
                newElem.innerHTML = '<li class="space"> </li>';
                elem.append(newElem);
            } else {
                newElem.innerHTML = `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
                elem.append(newElem);
            }
        }
    }

    /**
     * Checks if passed letter is in the phrase
     * @param {string} letter - Letter to check
     * @returns {boolean} returns if letter was found
     */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param {string} letter - letter to display
     */
    showMatchedLetter(letter) {
        const arr = document.getElementsByClassName(letter);
        for (let i of arr) {
            i.classList.remove("hide");
            i.classList.add("show");
        }
    }
}