const game = new Game();
const startButton = document.querySelector('#btn__reset');
const keys = document.querySelectorAll('.key');
startButton.addEventListener('click', () => {
    const letters = document.querySelectorAll('ul li').forEach(letter => letter.remove());
    for (let i = 0; i < keys.length; i++) {
        keys[i].disabled = '';
        keys[i].className = 'key';
    }
    game.missed = 0;
    const lives = document.querySelectorAll('.tries');
    for (let i = 0; i < lives.length; i++) {
        lives[i].innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>`
    }
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`)
})

document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('click', e => {
        console.log(e.target)
        game.handleInteraction(e.target);
    })
});

document.addEventListener('keydown', keyInput);

function keyInput(e) {
    for (let i = 0; i <keys.length; i++) {
        if (keys[i].textContent === e.key) {
            if (!keys[i].classList.contains('wrong') || keys[i].classList.contains('chosen')){
                game.handleInteraction(keys[i]);
            }
        }
    }
}