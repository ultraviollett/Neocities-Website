function addText() {
    //adds text from booktext in realtime to book on webpage
    let x = document.getElementById("booktext").value;
    document.getElementById("paste").innerHTML = x;
    return x;
}

function generateHTML(){
    //uses text from addText to add to divs to paste as text in HTML output for use on ao3
    let x = '<div class="mcbook"><p><span class="screenreader">A Minecraft book with text that reads: </span>'+addText()+"</p></div>";
    document.getElementById("HTMLoutput").value = x;
}