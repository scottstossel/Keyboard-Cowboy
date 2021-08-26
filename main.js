//variables
const startGameBtn = document.getElementById("start");
const easyGameBtn = document.getElementById('easy');
const hardGameBtn = document.getElementById('hard');
const startScreen = document.getElementById("game-intro");
const letterDisplay = document.getElementById('random-letter');
const scoreDisplay = document.getElementById('score');
let score = 0;
let start = false;
let time = false;
const spacebar = document.getElementById('spacebar');
const winScreen = document.getElementById('win-screen');
const loseScreen = document.getElementById('lose-screen');
let endGame = false;
const cowboy = document.getElementById('cowboy');
// let difficulty = '';

//adding letter to DOM
function addLetterToDOM() {
  // randomLetter();
  let randomLetter = String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65));
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
  if (difficulty == 'normal') {
    sec = 35;
  }
  else if (difficulty == 'easy') {
    sec = 40;
  }
  else if (difficulty == 'hard') {
    sec = 30;
  }
  // sec = 30;
  let timer = setInterval(function () {
    document.getElementById("timer-display").innerHTML = "Timer: " + sec;
    sec--;
    if (sec === 0) {
      clearInterval(timer);
      sec = 0;
      document.getElementById('timer-display').innerHTML = "Timer: " + sec;
      time = false;
      //game end options
      if (score < 45) {

      cowboy.src = 'images/Sprites Bang Duel/cb_gameover.png';

      var enemy = document.getElementById('enemy');
      enemy.src = 'images/Sprites Bang Duel/enemy_win.png';

      var audio = new Audio('audio/shotgun.mp3');
      audio.play();
      setTimeout(gameOver, 3000);
      return;
      }
    else {
        setTimeout(youWin, 3000);
        var enemy = document.getElementById('enemy');
        enemy.classList.add('enemy-death');
        return;
      }
    }
  }, 1000);
}
//start game button
function startGame() {
  removeBG();
  start = true;
  var sound = new Audio('audio/start sound.wav');
  sound.play();
  var audio = new Audio("audio/The Dalmasca Estersand (From 'Final Fantasy XII').mp3");
  audio.play();
  return difficulty = 'normal';
}
//levels
function startEasyGame() {
  removeBG();
  start = true;
  var sound = new Audio('audio/start sound.wav');
  sound.play();
  var audio = new Audio("audio/The Dalmasca Estersand (From 'Final Fantasy XII').mp3");
  audio.play();
  return difficulty = 'easy';
}
function startHardGame() {
  removeBG();
  start = true;
  var sound = new Audio('audio/start sound.wav');
  sound.play();
  var audio = new Audio("audio/The Dalmasca Estersand (From 'Final Fantasy XII').mp3");
  audio.play();
  return difficulty = 'hard';
}

//game over
function gameOver() {
  loseScreen.style.zIndex = "4";
  var audio = new Audio('audio/game over.wav');
  audio.play();
  document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    location.reload(true);
    return;
      }
    })
  
}

//you win
function youWin() {
  winScreen.style.zIndex = "4";
  var audio = new Audio('audio/you win.wav');
  audio.play();
  document.addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
      window.location.reload(true);
      return;
    }
  })
  }
//space bar to start
document.body.onkeyup = function(e) {
  if (e.code == 'Space' && start == true) {
    spacebar.parentNode.removeChild(spacebar);
    level();
    return;
  }
}
//game logic
function level() {
  addLetterToDOM();
  timer();
  spawnEnemy();
  document.addEventListener('keydown', (e) => {
    if ((e.key == letterDisplay.innerHTML.toLowerCase()) && (time == true)) {
        score += 1;
        scoreDisplay.innerHTML = "Score: " + score;
        addLetterToDOM();
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
    cowboy.src = 'images/Sprites Bang Duel/cb_win.png';
    var audio = new Audio('audio/gun-shot.wav');
    audio.play();
    var enemy = document.getElementById('enemy');
    enemy.src = 'images/Sprites Bang Duel/enemy_lose.png';
    cowboy.classList.add('recoil');
    setTimeout(
      function() {
        cowboy.classList.remove('recoil');
      }, 200)
  }

  function takeDamage() {
    cowboy.src = 'images/Sprites Bang Duel/cb_lose.png';
  }

  function spawnEnemy() {
    setTimeout(
      function() {
      var image = document.getElementById('enemy');
      image.src = 'images/Sprites Bang Duel/enemy_default.png';
  }, 500)
  }
