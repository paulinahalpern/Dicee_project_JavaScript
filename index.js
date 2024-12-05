// Inside index.js, create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. Test it out in the console to make sure it works as expected.

let randomNumber1 = Math.floor(Math.random() * 6 + 1);
const image1 = document.querySelector(".img1");
image1.setAttribute("src", `images/dice${randomNumber1}.png`);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);

const image2 = document.querySelector(".img2");
image2.setAttribute("src", `images/dice${randomNumber2}.png`);

const player1 = "1";
const player2 = "2";
const result = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  result.textContent = `Win player ${player1}`;
} else {
  result.textContent = `Win player ${player2}`;
}
