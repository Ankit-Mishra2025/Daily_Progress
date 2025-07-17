let openBtn = document.querySelector(".openBtn");
let modelConatiner = document.querySelector(".modelConatiner");

let closeBtn = document.querySelector(".closeBtn");

let modelBox = document.querySelector(".modelBox");




openBtn.addEventListener("click", () => {
  modelConatiner.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modelConatiner.style.display = "none";
});


modelBox.addEventListener("click", (e) => {
  console.log("click");

  if (e.target.className === "modelBox") {
    modelConatiner.style.display = "none";
  }
});
