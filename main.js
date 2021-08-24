//start screen
const startGameBtn = document.getElementById("start");
const startScreen = document.getElementById("game-intro");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");


//remove background on click
function removeBG() {
  startScreen.parentNode.removeChild(startScreen);
}

//start game after click
// startGame(levelData[0])
//5 second timer


function timer() {
  let sec = 5;
  let timer = setInterval(function() {
    document.getElementById('timer-display').innerHTML = 'Timer: '+ sec;
    sec--;
    if (sec < 0) {
      gameOver();
    }
  }, 1000);
}

function startGame(level) {

  removeBG();
  const img = new Image();
  img.src = "/images/Desert/Desert1.png";
  img.onload = function () {
    ctx.drawImage(img, 0, 0, 700, 500);
  };
}

//generate random letter for the level
function randomLetter() {
    // let letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    let letter = String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
    return letter;
}

function gameOver() {
  alert('you lose');
}

let lives = 3;


document.addEventListener('keydown', (e) => {
  currentLetter = randomLetter();
  
  document.getElementById('random-letter').innerHTML = 'Letters: ' + currentLetter;
  // draw the letter
  // set timer
  timer();
  if (e.key == currentLetter) {
    alert('same key')
  } else {
    alert('wrong key')
  }
})