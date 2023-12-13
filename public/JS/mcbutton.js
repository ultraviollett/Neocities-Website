function addText() {
    //updates whenever text is updated, adds text to inside button
    let x = document.getElementById("buttontext").value;
    document.getElementById("paste").innerHTML = x;
    return x;
}

function generateHTML(){
    //adds text in text input to some divs and outputs it as text
    let x = '<div class="buttonbg"><span class="screenreader">A minecraft button that reads: </span><p class="buttontext">'+addText()+"</p></div>";
    document.getElementById("HTMLoutput").value = x;
}