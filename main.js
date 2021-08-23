//start screen

window.onload = () => {
    document.getElementById('start').onclick = () => {
        startGame();
    };

    function startGame() {
        const img = new Image();
        img.src = '/images/Desert/Desert1.png';
        img.onload = function() {
            ctx.drawImage(img,0,0,700,500);
        }
    }
}

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// const img = new Image();
// img.src = '/images/Desert.png';

img.addEventListener('load', function() {
    ctx.drawImage(img,0,0,700,500);
    startGame();
})

const startGameBtn = document.querySelector('btn');

