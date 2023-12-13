document.getElementById("simplemsgCSS").style.display = "none";
document.getElementById("mcbuttonCSS").style.display = "none";
document.getElementById("mcbookCSS").style.display = "none";

document.getElementById("mcpoemCSS").style.display = "none";
document.getElementById("twtCSS").style.display = "none";

//all functions toggle the text thats to copy. Might delete all this tbh
function revealMCButton(){
  let x = document.getElementById("mcbuttonCSS");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function revealSimpleMSG(){
  let x = document.getElementById("simplemsgCSS");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function revealMCBook(){
  let x = document.getElementById("mcbookCSS");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
} 

function revealMCPoem(){
  let x = document.getElementById("mcpoemCSS");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
} 

function revealTWT(){
  let x = document.getElementById("twtCSS");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
} 