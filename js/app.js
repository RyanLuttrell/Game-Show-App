const game = new Game();
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', () => {
    const letters = document.querySelectorAll('ul li').forEach(letter => letter.remove());
    const keys = document.querySelectorAll('.key');
    for (let i = 0; i < keys.length; i++) {
        keys[i].disabled = '';
        keys[i].className = 'key';
    }
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`)
})

document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('click', e => {
        game.handleInteraction(e.target);
    })
});

