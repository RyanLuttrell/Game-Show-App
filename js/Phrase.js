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
        const phrase = this.phrase;
        const list = document.querySelector('#phrase ul');
        for (let i = 0; i < phrase.length; i++) {
            const newLi = document.createElement('li')
            newLi.innerText = `${this.phrase[i]}`;
            if (newLi.innerText === ' ') {
                newLi.className = 'space';
            } else {
                newLi.className = `hide letter ${this.phrase[i]} animated rotateInDownRight`;
            }
            list.appendChild(newLi);
        }
    };

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */

    checkLetter(letter) {
        return this.phrase.includes(letter);
    };

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */

    showMatchedLetter(letter) {
        const selectedLetter = document.getElementsByClassName(letter);
        for (let i = 0; i < selectedLetter.length; i++) {
            selectedLetter[i].classList.remove('hide');
            selectedLetter[i].classList.add('show');
            selectedLetter[i].classList.add('')
        }
    };
}