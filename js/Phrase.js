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
        const phraseId = document.querySelector('#phrase ul');
        for (let i = 0; i < this.phrase.length; i++) {
            const newLi = document.createElement('li')
            newLi.innerText = `${this.phrase[i]}`;
            if (newLi.innerText === ' ') {
                newLi.className = 'space';
            } else {
                newLi.className = `hide letter ${this.phrase[i]}`;
            }
            phraseId.appendChild(newLi);
        }
    };

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */

    checkLetter(letter) {
        const letterCheck = document.querySelectorAll('.letter');
        if (letter === letterCheck) {
            return true;
        } else {
            return false;
        }
    };

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */

    showMatchedLetter(letter) {

    };
}