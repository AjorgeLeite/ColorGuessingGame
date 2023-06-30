// Generation:
// Criar 6 quadrados com uma cor random
// escolher cor de um quadrado random e defenir como resposta certa e titulo

let squares = document.getElementById("game").children;
let gameSquare = document.getElementById("game");

function colorGenerator() {
  for (let i = 0; i <= 5; i++) {
    //cor random para cada square
    let colorCode =
      "RGB(" +
      Math.floor(Math.random() * 256) +
      ", " +
      Math.floor(Math.random() * 256) +
      ", " +
      Math.floor(Math.random() * 256) +
      ")";
    // console.log(colorCode)
    //criar div e mudar cor
    squares[i] = document.createElement("div");
    squares[i].textContent = colorCode;
    squares[i].className = "squares";
    squares[i].style.backgroundColor = colorCode;
    // gameSquare.appendChild(squares[i]);
    //Resposta certa  e titulo
    let rightAnswer = squares[Math.floor(Math.random() * 6)].textContent;
    // console.log(rightAnswer);
    document.getElementById("colorCode").textContent = rightAnswer;

    let resultColor = document.getElementById("result");
    resultColor.style.display = "none";
  }
}
colorGenerator();

// Btn new colors : correr função colorGenerator ;

let newColorsBtn = document.getElementById("newColors");
newColorsBtn.addEventListener("click", colorGenerator);
//btn quadradods :
// fazer btn para cada quadrado.
const square1 = document.getElementById("squaresLink1");
square1.addEventListener("click", rightOrWrong);
const square2 = document.getElementById("squaresLink2");
square2.addEventListener("click", rightOrWrong);
let square3 = document.getElementById("squaresLink3");
square3.addEventListener("click", rightOrWrong);
let square4 = document.getElementById("squaresLink4");
square4.addEventListener("click", rightOrWrong);
let square5 = document.getElementById("squaresLink5");
square5.addEventListener("click", rightOrWrong);
let square6 = document.getElementById("squaresLink6");
square6.addEventListener("click", rightOrWrong);

//  if squares[i].textCont = right answer {win} ( algo assim) else { wrong answer }
// console.log(square1)
// console.log(square1.style.backgroundColor)
function rightOrWrong() {
  // let currentClick = '"'+this.id+'"';
  // let btn1 = document.getElementById(currentClick);
  // console.log(currentClick)
  // console.log("btn1"+btn1)

  // if (btn1.style.backgroundColor = rightAnswer) {
  //   console.log("WIN")
  // } else {
  //   console.log("LOST")
  // }

  let currentClickId = this.id;
  console.log(currentClickId);
  let clickColorCode = document.getElementById(currentClickId);
  console.log("SAD" + clickColorCode.style.backgroundColor);
  let rightAnswer = document.getElementById("colorCode").textContent;
  let rightAnswerLower = rightAnswer.toLowerCase();
  console.log("asd" + rightAnswerLower);

  if (clickColorCode.style.backgroundColor == rightAnswerLower) {
    correct();
  } else {
    wrong();
  }
}

// Right answer:
// mudar header e cor dos botoes para a rightanswer
// mudar cor de todos os squares para rightanswer
// aparecer correct no centro
function correct() {
  // alert("WIN")
  let rightAnswer = document.getElementById("colorCode").textContent;
  let rightAnswerLower = rightAnswer.toLowerCase();

  let headerColor = document.getElementById("header");
  headerColor.style.backgroundColor = rightAnswerLower;

  let easyColor = document.getElementById("easy");
  easyColor.style.color = rightAnswerLower;
  let newColorColor = document.getElementById("newColors");
  newColorColor.style.color = rightAnswerLower;
  let hardColor = document.getElementById("hard");
  hardColor.style.color = rightAnswerLower;

  let resultColor = document.getElementById("result");
  resultColor.style.display = "block";
  resultColor.style.color = rightAnswerLower;

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = rightAnswer;
  }
}
// Wrong answer:
// remover div
function wrong() {
  alert("LOST");
}
// Easy e hard :
// Easy:
// Criar função colorGenerator com apenas tres iterações, e correr

function colorGeneratorMini() {
  for (let i = 0; i <= 2; i++) {
    //cor random para cada square
    let colorCode =
      "RGB(" +
      Math.floor(Math.random() * 256) +
      ", " +
      Math.floor(Math.random() * 256) +
      ", " +
      Math.floor(Math.random() * 256) +
      ")";
    // console.log(colorCode)
    //criar div e mudar cor
    squares[i] = document.createElement("a");
    squares[i].className = "squares";
    squares[i].textContent = colorCode;
    squares[i].style.backgroundColor = colorCode;

    //Resposta certa  e titulo
    let rightAnswer = squares[Math.floor(Math.random() * 3)].textContent;
    // console.log(rightAnswer);
    document.getElementById("colorCode").textContent = rightAnswer;

    let resultColor = document.getElementById("result");
    resultColor.style.display = "none";
  }
  // remover 3 de baixo
  // let removeElement = document.getElementById("squares4"))
  //   let removeElement = document.querySelectorAll(".squares")
  //   removeElement.remove()
  // console.log(document.getElementById("squares4"))
  // // remover 3 divs de baixo
  //   for (let i = 0; i <= 5; i++) {
  //     let removeElement = squares[i + 3];
  //     removeElement.remove();
  //   }
}

// Easy : ColorgeneratorMini
let easyBtn = document.getElementById("easy");
easyBtn.addEventListener("click", colorGeneratorMini);

// Hard: Correr colorGenerator.
let hardBtn = document.getElementById("hard");
hardBtn.addEventListener("click", colorGenerator);
