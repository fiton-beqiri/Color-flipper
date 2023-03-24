const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "cyan",
  "yellow",
  "black",
  "pink",
  "AntiqueWhite",
];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let randomNumb = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumb];
  color.textContent = colors[randomNumb];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
