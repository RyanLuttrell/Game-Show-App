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
    };

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */

    getRandomPhrase() {
        const newPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)].phrase;
        const finalPhrase = new Phrase(newPhrase);
        this.activePhrase = finalPhrase;
    };

    /**
     * Begins game by selecting a random phrase and displaying it to the user
     */

    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        const randomPhrase = game.getRandomPhrase();
        const createNewPhrase = new Phrase(randomPhrase);
        const newPhrase = createNewPhrase.phrase;
        newPhrase.addPhraseToDisplay();
        this.activePhrase = randomPhrase;
    };

    handleInteraction() {

    }

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won
     */

    checkForWin() {

    };

    /**
     * Increases the value of the missed property
     * removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */

    removeLife() {

    };

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */

    gameOver() {

    };

}