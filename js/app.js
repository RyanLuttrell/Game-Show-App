let game;
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`)
})

const keyboard = document.getElementById('qwerty')
keyboard.addEventListener('click', game.handleInteraction(button));