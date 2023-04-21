document.body.style.height = window.innerHeight;
const head_part = document.querySelector(".head_part");
const timeNode = document.getElementById("time");
const scoreNode = document.getElementById("score");
const player = document.getElementById("player");
const wordNode = document.getElementById("word");
const play_ground = document.getElementById("play_ground");
const lost = document.getElementById("lost");
const final_score = document.getElementById("final_score");
let selection = document.getElementById("difficulty");
let difficulty = document.getElementById("difficulty").value;
let time = 20;
let score = 0;
const phrase =
  "Font Awesome 5 has a PRO edition with 7842 icons, and a FREE edition with 1588 icons. This tutorial will concentrate on the FREE edition.To use the Free Font Awesome 5 icons, you can choose to download the Font Awesome library, or you can sign up for an account at Font Awesome, and get a code called KIT CODE to use when you add Font Awesome to your web page.We prefer the KIT CODE approach. Once you get the code you can start using Font Awesome on your web pages by including only one line of HTML code:";
const words_arr = phrase.split(" ");
const words = words_arr.filter((word) => {
  if (word.length >= 4) {
    return word;
  }
});
console.log(difficulty);

function toggle_header() {
  head_part.classList.toggle("hide");
}
function refresh() {
  timeNode.innerText = time;
  scoreNode.innerText = score;
  final_score.innerText = score;
  player.focus();
}

selection.addEventListener("change", (event) => {
  difficulty = event.target.value;

});

function reloade(){
  time=20;
  score=0;
  changeWord();
  lost.classList.add("hide");
  play_ground.classList.remove("hide");
}

function checkLetter() {
  const word = document.getElementById("word").innerText;
  const typed_word = document.getElementById("player").value;

  if (typed_word === word) {
    time += Number(difficulty);
    score += 1;
    changeWord();
    refresh();
  }
}

function changeWord() {
  let rand = Math.floor(Math.random() * (words.length - 1));
  let word = words[rand];
  wordNode.innerText = word;
  player.value = "";
}

player.addEventListener("input", checkLetter);

function typing_game() {
  time--;
  refresh();
  if (time <= 0) {
    play_ground.classList.add("hide");
    lost.classList.remove("hide");
  }
}

setInterval(typing_game,1000);