function addText() {
    //updates whenever text is updated, adds text to inside button
    let x = document.getElementById("buttontext").value;
    document.getElementById("paste").innerHTML = x;
    //adds HTML to be copied to textarea
    let fullThing = '<div class="mcbuttondiv"><span class="screenreader">A minecraft button that reads: </span><p>'+x+"</p></div>";
    document.getElementById("HTMLoutput").value = fullThing;
}