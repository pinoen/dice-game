let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

let player1 = document.querySelector(".img1");
player1.setAttribute("src", `images/dice${randomNumber1}.png`);

let player2 = document.querySelector(".img2");
player2.setAttribute("src", `images/dice${randomNumber2}.png`);

let mainText = document.querySelector("h1");

if (randomNumber1 > randomNumber2) mainText.textContent = "Player 1 wins!";
else if (randomNumber1 < randomNumber2) mainText.textContent = "Player 2 wins!";
else mainText.textContent = "It was a draw!";
