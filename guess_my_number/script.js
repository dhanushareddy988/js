"use strict";
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector(".guessing-content").textContent = message;
};
//console.log(secretnumber);
//console.log(document.querySelector(".check").textContent);
document.querySelector(" .check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displaymessage("⛔️ No number!");
  } else if (guess === secretnumber) {
    displaymessage("🎉 Correct Number! ");
    document.querySelector(".break").textContent = secretnumber;
    document.querySelector("body").style.backgroundColor = "green";
    //document.querySelector(".break").style.font-weight = "3em";
    if (score > highscore) {
      document.querySelector(".high-score").textContent = score;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displaymessage(guess > secretnumber ? " 📈 Too HIGH" : "📉 Too LOW");
      score--;
      document.querySelector(".score-change").textContent = score;
    } else {
      displaymessage("💥 You Lost the game");
      document.querySelector(".score-change").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
 // console.log(secretnumber);
  displaymessage("Start Guessing...");
  document.querySelector(".score-change").textContent = score;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".break").textContent = "?";
  document.querySelector(".guess").value = "";
});
