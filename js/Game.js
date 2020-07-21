/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            {phrase: 'Once upon a time'},
            {phrase: 'Get a taste of your own medicine'},
            {phrase: 'Go on a wild goose chase'},
            {phrase: 'Give someone the cold shoulder'},
            {phrase: 'A blessing in disguise'}
        ];
        this.activePhrase = null;
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosed to be used
     */

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

}