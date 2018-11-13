const fieldOne = document.querySelector("#textAreaOne");
const fieldTwo = document.querySelector("#textAreaTwo");
let outputOne = document.querySelector("#outputOne");
let outputTwo = document.querySelector("#outputTwo");
let userField = document.querySelector(".userField");

let timeCounter = 0;
// 1000 miliseconds = 1 second
let timeInterval = 20;
let lastTime = 0;
// request to call update function before next animation



function compare(){
  outOne = "";
  outTwo = "";
  
  let dataOne = [];
  let arrOne = fieldOne.value;
  let temp = arrOne.split("");
    dataOne.push(temp);
  let dataTwo = [];
  let arrTwo = fieldTwo.value;
  let tempTwo = arrTwo.split("");
    dataTwo.push(tempTwo);
  
  if (fieldOne.value.length <= fieldTwo.value.length){
    for (var i = 0; i<fieldOne.value.length; i++){
      if (dataOne[0][i] === dataTwo[0][i]){
 outOne += dataOne[0][i];
 outTwo += dataTwo[0][i];
      } else {
        outOne += "<span style='color:red'>" + dataOne[0][i] + "</span>";
        outTwo += "<span style='color:red'>" + dataTwo[0][i] + "</span>";
     }
      
    }
    if (fieldOne.value.length < fieldTwo.value.length){outTwo += "...";}
  } 
  
  else {
    for (var i = 0; i<fieldTwo.value.length; i++){
      if (dataOne[0][i] === dataTwo[0][i]){
        
 outOne += dataOne[0][i];
 outTwo += dataTwo[0][i];
      } else {
        outOne += "<span style='color:red'>" + dataOne[0][i] + "</span>";
        outTwo += "<span style='color:red'>" + dataTwo[0][i] + "</span>";
      } 
    }
 if (fieldTwo.value.length < fieldOne.value.length){outOne += "...";}
  }

  outputOne.innerHTML = outOne;
  outputTwo.innerHTML = outTwo;
}



function update(time = 0) {
  //erase between draws
// deltaTime is going to hover at around 16.7. This is equal to about 1/60th of 1000 miliseconds, or 1 second. AKA 60 of these will be about one second.  
  const deltaTime = time - lastTime;
  lastTime = time;
// Time and Last time are both starting at 0 and the rapidly growing by 16.7 60 times a second. Because they are both growing, they are alway about the same amount apart. Last time is set to be about 16.7 less then Time every iteration 
  timeCounter += deltaTime;
// dropCounter will add up to 1000 every second and then reset to zero
 
  //console.log(timeCounter);
  if (timeCounter > timeInterval) {
    timeCounter = 0;
    }
    // can't grab width, use jquery?
    debugger
    let divSize = document.querySelector(".userField");
    fieldOne.rows = divSize["offsetWidth"] / 30;
    fieldTwo.rows = divSize["offsetWidth"] / 30;
    fieldOne.cols = divSize["offsetWidth"] / 10;
    fieldTwo.cols = divSize["offsetWidth"] / 10;



  requestAnimationFrame(update);
}

update();
// make a function that requests animation frame to resize text areas as a % of div container sizes

