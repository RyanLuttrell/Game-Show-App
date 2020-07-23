const game = new Game();
const startButton = document.querySelector('#btn__reset');
const keys = document.querySelectorAll('.key');

//Event listener on the start button that resets the board and enables all of the keys on the keyboard to be used
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


// Adds an event listener for clicking on the keys on the screen
document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('click', e => {
        game.handleInteraction(e.target);
    })
});

//Disables the ability for the user to try to type in keys before the game is loaded
for (let i = 0; i < keys.length; i++) {
    keys[i].disabled = 'true';
}
//Event listenr for keyboard input
document.addEventListener('keydown', keyInput);

//Runs the handleInteraction function only when an appropriate key is pressed
function keyInput(e) {
    for (let i = 0; i <keys.length; i++) {
        if (keys[i].textContent === e.key) {
            if (!keys[i].classList.contains('wrong') && !keys[i].classList.contains('chosen') && !keys[i].disabled){
                game.handleInteraction(keys[i]);
            }
        }
    }
}