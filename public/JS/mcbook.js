function addText() {
    //adds text from input-text in realtime to book on webpage
    const x = document.getElementById("input-text").value;
    document.getElementById("output-div").innerHTML = x;
    const fullThing = 
`
<div class="mcbook">
<p class="screenreader" align="center">-- Minecraft Book: -- </p>
<hr>
<p><pre>${x}</pre></p>
<hr>
</div>

`;
    
    
    document.getElementById("html-output").value = fullThing;
    $('#output-div').html(fullThing);

}

$(function() {

fetch("CSS/mcbook.txt").then(res => res.text()).then(text => {
    const contentDiv = document.getElementById("CSS-to-copy");
    contentDiv.textContent = text;
  });
});