let detailsBox = document.querySelector(".detailsBox");
let numberContainer = document.querySelector(".numberContainer");

let box = document.querySelector(".box");
let timer = document.querySelector(".timer");
let scoreValue = document.querySelector(".scoreValue");
let targetValue = document.querySelector(".targetValue");

let time = 50;

let score = 0;

let target;

setInterval(() => {
  if (time <= 0) {
    numberContainer.innerHTML = `
    <div>Game is over</div>`;

    return;
  }
  time--;
  timer.innerText = time;
}, 1000);

let boxNumber = 80;

function generateTarget() {
  target = Math.ceil(Math.random() * 10);
  targetValue.innerText = target;
}

generateTarget();

for (let i = 1; i <= boxNumber; i++) {
  let div = document.createElement("div");
  div.className = "box";
  numberContainer.append(div);

  let boxNumbers = Math.ceil(Math.random() * 10);
  div.innerText = boxNumbers;
}

numberContainer.addEventListener("click", (e) => {
  if (e.target.className === "box") {
    let number = Number(e.target.innerText);

    if (target === number) {
      generateTarget();
      let sv = Number(scoreValue.innerText);
      sv += 10;
      scoreValue.innerText = sv;
    }
  }
  generateTarget();
});
