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
}