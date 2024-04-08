let heading=document.querySelector("h3");
let btn=document.querySelector("button");
let divs=document.querySelector("div");

btn.addEventListener("click",function(){
let randomColor=generateRandomColor();
 heading.innerText=randomColor;
 divs.style.backgroundColor=randomColor;
 console.log("Color Updated");
})


//Generate Random Color;
//RGB VALUE == Rangr(0-255);

function generateRandomColor(){
  let red=Math.floor(Math.random()*255);
  let green=Math.floor(Math.random()*255);
  let blue=Math.floor(Math.random()*255);

  let mixColorValue=`rgb(${red},${green},${blue})`;
  return mixColorValue;
};

