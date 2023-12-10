var fullthing;
var mctext;

function mcform() {
    var mctext = document.getElementById("mctext").value;
    document.getElementById("paste").innerHTML = mctext;
    return mctext
}

function generateHTML(){
    var fullthing = "";      

    var fullthing = '<div class="mcbook"><p><span class="screenreader">A Minecraft book with text that reads: </span>'+mcform()+"</p></div>";

    document.getElementById("fullthing").value = fullthing;
    return fullthing;
}


function copy() {
    let textarea = document.getElementById("textarea");
    textarea.select();
    document.execCommand("copy");
  }