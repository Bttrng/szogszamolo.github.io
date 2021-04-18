let randomNumber1 = Math.floor(Math.random() * 179) + 1;
let randomNumber2 = (180 - randomNumber1) / 2;
let randomNumber3 = randomNumber2;
let randomNumber4 = 180 - randomNumber1;
let randomNumber5 = 180 - randomNumber2;
let randomNumber6 = 180 - randomNumber3;
let myPoints = 0;
let maxPoints = 5;
let myGuess1;
let myGuess2; 
let myGuess3; 
let myGuess4;
let myGuess6;
var guesses = ["guess1", "guess2", "guess3", "guess4", "guess5", "guess6"];
var random = guesses[Math.floor(Math.random() * guesses.length)];
  if (random == "guess1") {
document.getElementById("guess1").disabled = true;
document.getElementById("guess1").value = randomNumber1;
 } else if (random == "guess2") {
document.getElementById("guess2").disabled = true;
document.getElementById("guess2").value = randomNumber2;
} else if (random == "guess3") {
document.getElementById("guess3").disabled = true;
 document.getElementById("guess3").value = randomNumber3;
} else if (random == "guess4") {
 document.getElementById("guess4").disabled = true;
 document.getElementById("guess4").value = randomNumber4;
} else if (random == "guess5") {
 document.getElementById("guess5").disabled = true;
 document.getElementById("guess5").value = randomNumber5;
} else if (random == "guess6"){
 document.getElementById("guess6").disabled = true;
 document.getElementById("guess6").value = randomNumber6;
} else {
 myPoints = myPoints;
}
function checkGuess() { 
myGuess1 = guess1.value;
myGuess2 = guess2.value;
myGuess3 = guess3.value;
myGuess4 = guess4.value;
myGuess5 = guess5.value;
myGuess6 = guess6.value;
if (random == "guess1") {
  document.getElementById("guess1").style.border = "0.5px solid black";
} else if (myGuess1 == randomNumber1) {
  document.getElementById("guess1").style.border = "2px solid lightgreen";
  myPoints++;
} else {
  document.getElementById("guess1").style.border = "2px solid red";
}
if (random == "guess2") {
  document.getElementById("guess2").style.border = "0.5px solid black";
} else if (myGuess2 == randomNumber2) {
  document.getElementById("guess2").style.border = "2px solid lightgreen";
  myPoints++;
} else {
  document.getElementById("guess2").style.border = "2px solid red";
}
if (random == "guess3") {
  document.getElementById("guess3").style.border = "0.5px solid black";
} else if (myGuess3 == randomNumber3) {
  document.getElementById("guess3").style.border = "2px solid lightgreen";
  myPoints++;
} else {
  document.getElementById("guess3").style.border = "2px solid red";
}
if (random == "guess4") {
  document.getElementById("guess4").style.border = "0.5px solid black";
} else if (myGuess4 == randomNumber4) {
  document.getElementById("guess4").style.border = "2px solid lightgreen";
  myPoints++;
} else {
  document.getElementById("guess4").style.border = "2px solid red";
}
if (random == "guess5") {
  document.getElementById("guess5").style.border = "0.5px solid black";
} else if (myGuess5 == randomNumber5) {
  document.getElementById("guess5").style.border = "2px solid lightgreen";
  myPoints++;
} else {
  document.getElementById("guess5").style.border = "2px solid red";
}
if (random == "guess6") {
  document.getElementById("guess6").style.border = "0.5px solid black";
} else if (myGuess6 == randomNumber6) {
  document.getElementById("guess6").style.border = "2px solid lightgreen";
  myPoints++;
} else {
  document.getElementById("guess6").style.border = "2px solid red";
}
localStorage.setItem("points", myPoints)
}
function viewScore() {
  document.getElementById("points").innerHTML = localStorage.getItem("points");
  document.getElementById("slash").innerHTML = "/" ;
  document.getElementById("maxPoints").innerHTML = localStorage.getItem("max");
}
function cheat() {
  document.getElementById("submitGuess").disabled = true;
}
function nextTask() {
  maxPoints++;
  maxPoints++;
  maxPoints++;
  maxPoints++;
  maxPoints++;
  document.getElementById("maxPoints").innerHTML = localStorage.getItem("max");
  document.getElementById("submitGuess").disabled = false;
  localStorage.setItem("max", maxPoints)
  if (random == "guess1") {
document.getElementById("guess1").disabled = false;
document.getElementById("guess1").value = '';
} else if (random == "guess2") {
document.getElementById("guess2").disabled = false;
document.getElementById("guess2").value = '';
} else if (random == "guess3") {
document.getElementById("guess3").disabled = false;
document.getElementById("guess3").value = '';
} else if (random == "guess4") {
 document.getElementById("guess4").disabled = false;
 document.getElementById("guess4").value = '';
} else if (random == "guess5") {
 document.getElementById("guess5").disabled = false;
 document.getElementById("guess5").value = '';
} else if (random == "guess6"){
 document.getElementById("guess6").disabled = false;
 document.getElementById("guess6").value = '';
} else { 
  myPoints = myPoints;
}
document.getElementById("guess1").value = '';
document.getElementById("guess2").value = '';
document.getElementById("guess3").value = '';
document.getElementById("guess4").value = '';
document.getElementById("guess5").value = '';
document.getElementById("guess6").value = '';
document.getElementById("guess1").style.border = "0.5px solid black";
document.getElementById("guess1").style.border = "0.5px solid black";
document.getElementById("guess2").style.border = "0.5px solid black";
document.getElementById("guess3").style.border = "0.5px solid black";
document.getElementById("guess4").style.border = "0.5px solid black";
document.getElementById("guess5").style.border = "0.5px solid black";
document.getElementById("guess6").style.border = "0.5px solid black";
   randomNumber1 = Math.floor(Math.random() * 179) + 1;
if (randomNumber1 % 2 == 0) {
  randomNumber1 = randomNumber1 + 0;
} else { randomNumber1 = randomNumber1 + 1}
 randomNumber2 = (180 - randomNumber1) / 2;
 randomNumber3 = randomNumber2;
 randomNumber4 = 180 - randomNumber1;
randomNumber5 = 180 - randomNumber2;
 randomNumber6 = 180 - randomNumber3;
 guesses = ["guess1", "guess2", "guess3", "guess4", "guess5", "guess6"];
 random = guesses[Math.floor(Math.random() * guesses.length)];
  if (random == "guess1") {
document.getElementById("guess1").disabled = true;
document.getElementById("guess1").value = randomNumber1;
 } else if (random == "guess2") {
document.getElementById("guess2").disabled = true;
document.getElementById("guess2").value = randomNumber2;
} else if (random == "guess3") {
document.getElementById("guess3").disabled = true;
 document.getElementById("guess3").value = randomNumber3;
} else if (random == "guess4") {
 document.getElementById("guess4").disabled = true;
 document.getElementById("guess4").value = randomNumber4;
} else if (random == "guess5") {
 document.getElementById("guess5").disabled = true;
 document.getElementById("guess5").value = randomNumber5;
} else if (random == "guess6"){
 document.getElementById("guess6").disabled = true;
 document.getElementById("guess6").value = randomNumber6;
} else {
 myPoints = myPoints
}
}
  function resetGame() {
  document.getElementById("points").innerHTML = myPoints = myPoints - myPoints;
  document.getElementById("maxPoints").innerHTML = maxPoints = maxPoints - maxPoints + 5;
    document.getElementById("submitGuess").disabled = false;
    localStorage.setItem("max", maxPoints)
    localStorage.setItem("points", myPoints)
  if (random == "guess1") {
document.getElementById("guess1").disabled = false;
document.getElementById("guess1").value = '';
} else if (random == "guess2") {
document.getElementById("guess2").disabled = false;
document.getElementById("guess2").value = '';
} else if (random == "guess3") {
document.getElementById("guess3").disabled = false;
document.getElementById("guess3").value = '';
} else if (random == "guess4") {
 document.getElementById("guess4").disabled = false;
 document.getElementById("guess4").value = '';
} else if (random == "guess5") {
 document.getElementById("guess5").disabled = false;
 document.getElementById("guess5").value = '';
} else if (random == "guess6"){
 document.getElementById("guess6").disabled = false;
 document.getElementById("guess6").value = '';
} else { 
  myPoints = myPoints;
}
document.getElementById("guess1").value = '';
document.getElementById("guess2").value = '';
document.getElementById("guess3").value = '';
document.getElementById("guess4").value = '';
document.getElementById("guess5").value = '';
document.getElementById("guess6").value = '';
document.getElementById("guess1").style.border = "0.5px solid black";
document.getElementById("guess1").style.border = "0.5px solid black";
document.getElementById("guess2").style.border = "0.5px solid black";
document.getElementById("guess3").style.border = "0.5px solid black";
document.getElementById("guess4").style.border = "0.5px solid black";
document.getElementById("guess5").style.border = "0.5px solid black";
document.getElementById("guess6").style.border = "0.5px solid black";
   randomNumber1 = Math.floor(Math.random() * 179) + 1;
if (randomNumber1 % 2 == 0) {
  randomNumber1 = randomNumber1 + 0;
} else { randomNumber1 = randomNumber1 + 1}
 randomNumber2 = (180 - randomNumber1) / 2;
 randomNumber3 = randomNumber2;
 randomNumber4 = 180 - randomNumber1;
randomNumber5 = 180 - randomNumber2;
 randomNumber6 = 180 - randomNumber3;
 guesses = ["guess1", "guess2", "guess3", "guess4", "guess5", "guess6"];
 random = guesses[Math.floor(Math.random() * guesses.length)];
  if (random == "guess1") {
document.getElementById("guess1").disabled = true;
document.getElementById("guess1").value = randomNumber1;
 } else if (random == "guess2") {
document.getElementById("guess2").disabled = true;
document.getElementById("guess2").value = randomNumber2;
} else if (random == "guess3") {
document.getElementById("guess3").disabled = true;
 document.getElementById("guess3").value = randomNumber3;
} else if (random == "guess4") {
 document.getElementById("guess4").disabled = true;
 document.getElementById("guess4").value = randomNumber4;
} else if (random == "guess5") {
 document.getElementById("guess5").disabled = true;
 document.getElementById("guess5").value = randomNumber5;
} else if (random == "guess6"){
 document.getElementById("guess6").disabled = true;
 document.getElementById("guess6").value = randomNumber6;
} else {
  myPoints = myPoints;
}
}
submitGuess.addEventListener('click', checkGuess, true);
submitGuess.addEventListener('click', viewScore, true);
window.addEventListener('load', viewScore, true);
