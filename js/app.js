let game;
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`)
})

const keyboard = document.querySelector('#qwerty');
keyboard.addEventListener('click', (e) => {
    console.log(e);
})