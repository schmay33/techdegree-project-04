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

    checkLetter() {

    }

    showMatchedLetter() {

    }
}