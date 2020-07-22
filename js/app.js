const game = new Game();
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', () => {
    const letters = document.querySelectorAll('ul li').forEach(letter => letter.remove());
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`)
})

document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('click', e => {
        game.handleInteraction(e.target);
    })
});

