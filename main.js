//variables
const startGameBtn = document.getElementById("start");
const startScreen = document.getElementById("game-intro");
// const timerElement = document.getElementById('timer-display');
// const letterInput = document.getElementById('input');
const letterDisplay = document.getElementById('random-letter');
let letter = '';
let lives = 3;



//generate random letter for the level
function randomLetter() {
  // let letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
}

//adding letter to DOM
function addLetterToDOM() {
  randomLetter = randomLetter();
  letterDisplay.innerHTML = randomLetter;
}

//remove background on click
function removeBG() {
  startScreen.parentNode.removeChild(startScreen);
}

//start game after click


//5 second timer

function timer() {
  // alert('timer start');
  let sec = 5;
  let timer = setInterval(function () {
    document.getElementById("timer-display").innerHTML = "Timer: " + sec;
    sec--;
    if (sec === 0) {
      lives -= 1;
      document.getElementById('lives').innerHTML = "Lives: " + lives;
      clearInterval(timer);
      sec = 0;
      document.getElementById('timer-display').innerHTML = "Timer: " + sec;
      
    }
  }, 1000);
}
//start game button
function startGame(level) {
  removeBG();
  return start = true;
  // level();
}

//game over
function gameOver() {
  alert('you lose');
}

document.getElementById('lives').innerHTML = "Lives: " + lives;

document.body.onkeyup = function(e) {
  if (e.code == 'Space' && start == true) {
    level();
    return;
  }
}

function level() {
  // alert('level start');
  addLetterToDOM();
  timer();

  document.addEventListener('keydown', (e) => {
    if (e.key == letterDisplay.innerHTML.toLowerCase()) {
        alert('correct key');
        clearTimeout(timer);
      }
  })
  }
  

  // document.addEventListener('input', (e) => {
  //   //start timer
  //   alert('started');
  //   const text = e.target.value;
  //   if (e.key === currentLetter) {
  //     winLevel();
  //     return;
  //   } else {
  //     loseLevel();
  //     return;
  //   }
  // })

