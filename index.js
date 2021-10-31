var src;
function randomNumber() {
  var randomNumber1 = Math.ceil(Math.random() * 6);
  switch (randomNumber1) {
    case 1:
      src = "images\\dice1.png";
      break;
    case 2:
      src = "images\\dice2.png";
      break;
    case 3:
      src = "images\\dice3.png";
      break;
    case 4:
      src = "images\\dice4.png";
      break;
    case 5:
      src = "images\\dice5.png";
      break;
    case 6:
      src = "images\\dice6.png";
      break;
  }
  return randomNumber1;
}

var randNum1 = randomNumber();
document.querySelector(".img1").setAttribute("src", src);
randomNumber();
var randNum2 = randomNumber();
document.querySelector(".img2").setAttribute("src", src);

if(randNum1 > randNum2) {
  document.querySelector("h1").innerText = "🚩Player 1 Wins!";
}
else if(randNum2 > randNum1) {
  document.querySelector("h1").innerText = "Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerText = "Draw";
}
