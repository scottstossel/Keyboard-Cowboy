//variables
const startGameBtn = document.getElementById("start");
const startScreen = document.getElementById("game-intro");
const letterDisplay = document.getElementById('random-letter');
const scoreDisplay = document.getElementById('score');
let score = 0;
let start = false;
let time = false;
const spacebar = document.getElementById('spacebar');
const winScreen = document.getElementById('win-screen');
const loseScreen = document.getElementById('lose-screen');


//adding letter to DOM
function addLetterToDOM() {
  // randomLetter();
  let randomLetter = String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
  // return String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
  // return randomLetter;
  letterDisplay.innerHTML = randomLetter;
}

//remove background on click
function removeBG() {
  startScreen.parentNode.removeChild(startScreen);
}

//game timer

function timer() {
  // alert('timer start');
  time = true;
  let sec = 5;
  let timer = setInterval(function () {
    document.getElementById("timer-display").innerHTML = "Timer: " + sec;
    sec--;
    if (sec === 0) {
      clearInterval(timer);
      sec = 0;
      document.getElementById('timer-display').innerHTML = "Timer: " + sec;
      time = false;
      //game end options
      if (score < 40) {
      var image = document.getElementById('cowboy');
      image.src = '/images/Sprites Bang Duel/cb_gameover.png';

      var enemy = document.getElementById('enemy');
      enemy.src = '/images/Sprites Bang Duel/enemy_win.png';

      var audio = new Audio('/audio/shotgun.mp3');
      audio.play();
      
      setTimeout(gameOver, 2000);
      
      }
      else {
        setTimeout(youWin, 2000)
      }
    }
  }, 1000);
}
//start game button
function startGame(level) {
  removeBG();
  return start = true;
}

//game over
function gameOver() {
  // alert('you lose');
  loseScreen.style.zIndex = "4";
}

//you win
function youWin() {
  // alert('you win');
  winScreen.style.zIndex = "4";
}
//space bar to start
document.body.onkeyup = function(e) {
  if (e.code == 'Space' && start == true) {
    spacebar.parentNode.removeChild(spacebar);
    loseScreen.style.zIndex = "-10";
    winScreen.style.zIndex = "-10";
    level();
    return;
  }
}
//game logic
function level() {
  // alert('level start');
  addLetterToDOM();
  timer();
  spawnEnemy();
  document.addEventListener('keydown', (e) => {
    if ((e.key == letterDisplay.innerHTML.toLowerCase()) && (time == true)) {
        // alert('correct key');
        score += 1;
        scoreDisplay.innerHTML = "Score: " + score;
        addLetterToDOM();
        //function that shoots/function that damages enemy
        shootGun();
        spawnEnemy();
      }
    else if ((e.key != letterDisplay.innerHTML.toLowerCase()) && (time == true)) {
      score -= 1;
      scoreDisplay.innerHTML = "Score: " + score;
      takeDamage();
    }
  });
  }

  function shootGun() {
    var audio = new Audio('/audio/gun-shot.wav');
    audio.play();
    var image = document.getElementById('cowboy');
    image.src = '/images/Sprites Bang Duel/cb_win.png';
    var enemy = document.getElementById('enemy');
    enemy.src = '/images/Sprites Bang Duel/enemy_lose.png'
  }

  function takeDamage() {
    var image = document.getElementById('cowboy');
    image.src = '/images/Sprites Bang Duel/cb_lose.png';
  }

  function spawnEnemy() {
    setTimeout(
      function() {
      var image = document.getElementById('enemy');
      image.src = '/images/Sprites Bang Duel/enemy_default.png';
  }, 500)
  }
