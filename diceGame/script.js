"use strict";
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const score1 = document.querySelector("#score-1");
const score2 = document.querySelector("#score-2");
const current1 = document.getElementById("current-1");
const current2 = document.getElementById("current-2");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let scores, currentScore, activePlayer, play;
const newGame = function () {
  diceEl.classList.add("hidden");
  scores = [0, 0]; //player1score value at index 0 && player2score at 1
  currentScore = 0;
  activePlayer = 1;
  play = true;
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  player1.classList.add("player-active");
  player2.classList.remove("player-active");
  player1.classList.remove("player-winner");
  player2.classList.remove("player-winner");
};
newGame(); //we need newGame function when we reload the page or when we click new button and at starting of the game
const switchPlayer = function () {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  player1.classList.toggle("player-active"); // if contains player-actives then removes this class & vise versa
  player2.classList.toggle("player-active");
};
btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  console.log(dice);

  diceEl.src = `https://raw.githubusercontent.com/jonasschmedtmann/complete-javascript-course/master/07-Pig-Game/final/dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current-${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});
//holding the scores
btnHold.addEventListener("click", function () {
  // 1. Add current score to active player's score
  if (play) {
    scores[activePlayer - 1] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer - 1];

    //2. Check if player's score is >= 100
    if (scores[activePlayer - 1] >= 100) {
      play = false;
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
    } //we don't want to switch if we win
    else switchPlayer();
  }
});
btnNew.addEventListener("click", newGame);
