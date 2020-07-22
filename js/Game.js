/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Once upon a time'),
            new Phrase('Get a taste of your own medicine'),
            new Phrase('Go on a wild goose chase'),
            new Phrase('Give someone the cold shoulder'),
            new Phrase('A blessing in disguise')
        ];
        this.activePhrase = null;
    };

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */

    getRandomPhrase() {
        const newPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)].phrase;
        this.activePhrase = phrase.phrase;
        return new Phrase(newPhrase);
    };

    /**
     * Begins game by selecting a random phrase and displaying it to the user
     */

    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - the clicked element
     */

    handleInteraction(button) {
        button.disabled = 'true';
        if (game.activePhrase.checkLetter(button.textContent)) {
            game.activePhrase.showMatchedLetter(button.textContent);
            button.classList.add('chosen');
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }

    }

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't won
     */

    checkForWin() {
        const winner = document.getElementsByClassName('letter');
        let tally = 0;
        for (let i = 0; i < winner.length; i++) {
            if (winner[i].classList.contains('hide')) {
                tally++
            }
        }
        if (tally === 0) {
            return true;
        } else {
            return false;
        }
    };

    /**
     * Increases the value of the missed property
     * removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */

    removeLife() {
        const hearts = document.querySelectorAll('.tries');
        this.missed++
        if (this.missed === 5) {
            this.gameOver(false);
        }
        hearts[this.missed-1].innerHTML = `<img src="images/lostHeart.png" alt="Lost Heart Icon" height="35" width="30">`
    };

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */

    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = '';
        const overlayMessage = document.querySelector('#game-over-message');
        if (gameWon) {
            overlayMessage.textContent = "Congrats!! You won the game!";
            overlay.classList.remove('start');
            overlay.classList.add('win');
        } else {
            overlayMessage.textContent = "Sorry, better luck next time!";
            overlay.classList.remove('start');
            overlay.classList.add('lose');
        }
    };

}