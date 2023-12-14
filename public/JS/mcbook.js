function addText() {
    //adds text from booktext in realtime to book on webpage
    let x = document.getElementById("booktext").value;
    document.getElementById("paste").innerHTML = x;
    let fullThing = '<div class="mcbook"><p><span class="screenreader">A Minecraft book with text that reads: </span>'+x+"</p></div>";
    document.getElementById("HTMLoutput").value = fullThing;

}