var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function rightDice() {
  var rightDiceImage = document.getElementsByClassName('img1')[0];
  rightDiceImage.setAttribute(`src`, `./images/dice${randomNumber1}.png`);
}

rightDice();

function leftDice() {
  var leftDiceImage = document.getElementsByClassName('img2')[0];
  leftDiceImage.setAttribute(`src`, `./images/dice${randomNumber2}.png`);
}

leftDice();

function winningPlayer() {
  var player1 = randomNumber1;
  var player2 = randomNumber2;
  if (player1 > player2) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins!';
  } else if (player1 < player2) {
    document.querySelector('h1').innerHTML = 'Player 2 Wins!';
  } else {
    document.querySelector('h1').innerHTML = 'Draw!';
  }
}

winningPlayer();

console.log(randomNumber1, randomNumber2);
