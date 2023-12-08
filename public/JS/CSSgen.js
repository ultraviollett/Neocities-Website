document.getElementById("simplemsgCSS").style.display = "none";
document.getElementById("mcbuttonCSS").style.display = "none";
document.getElementById("mcbookCSS").style.display = "none";

document.getElementById("mcpoemCSS").style.display = "none";
document.getElementById("twtCSS").style.display = "none";


function mcbutton(){
let x = document.getElementById("mcbuttonCSS");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}

function simplemsg(){
  let x = document.getElementById("simplemsgCSS");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }

function mcbook(){
  let x = document.getElementById("mcbookCSS");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
} 

function mcpoem(){
  let x = document.getElementById("mcpoemCSS");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
} 

function twt(){
  let x = document.getElementById("twtCSS");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
} 