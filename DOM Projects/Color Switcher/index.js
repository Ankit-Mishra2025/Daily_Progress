let colorArray = [
  "RED",
  "BLACK",
  "YELLOW",
  "GREEN",
  "BLUE",
  "ORANGE",
  "PURPLE",
  "VOILET",
  "CYAN",
  "AQUA",
];



let container = document.querySelector(".container");
let rndmBtn = document.querySelector(".randomBtn");
let applyBtn = document.querySelector(".applyBtn");
let currentBtn = document.querySelector(".currentBtn");
let input = document.querySelector("input");

const applyColor = () => {
  let ColorInput = input.value;
  container.style.backgroundColor = ColorInput;

  currentBtn.innerText= ColorInput;
};

const randomColor=()=>{
const randomNumber = Math.floor(Math.random()*colorArray.length)
 return (colorArray[randomNumber]
    
 )

 
 

}

const randomColorGenreator=()=>{
    
   let color= randomColor()
  
  container.style.backgroundColor=color
// applyColor(color)

}


applyBtn.addEventListener("click", applyColor);
rndmBtn.addEventListener("click",randomColorGenreator);
