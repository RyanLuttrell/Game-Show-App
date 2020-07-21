// let game;
// const startButton = document.querySelector('#btn__reset');
// startButton.addEventListener('click', () => {
//     game = new Game();
//     game.startGame();
// })

const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase}`)