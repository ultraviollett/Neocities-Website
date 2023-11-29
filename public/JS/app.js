var mcchoice2;
var fullthing;
var mctext;

console.log("test js");

function mcchoice() { 
    var mcchoice = document.getElementById("mcchoiceid");  
    var mcchoice2 = mcchoice.options[mcchoice.selectedIndex].value;
    
    switch(mcchoice2){

        case "Minecraft Button":
        document.getElementById("classchange").className = "buttonbg";
        document.getElementById("paste").className = "buttontext";

        break;

        case "Minecraft End Poem":
        document.getElementById("classchange").className = "poembg";
        document.getElementById("paste").className = "poemtextwhite";
  
        break;

        case "Minecraft Book":
        document.getElementById("classchange").className = "mcbook";
        document.getElementById("paste").className = "";

        break;
    }

    return mcchoice2;

} 

function mcform() {
    var mctext = document.getElementById("mctext").value;
    document.getElementById("paste").innerHTML = mctext;
    return mctext


  }

function generateHTML(){
    console.log("generate HTML");
    var fullthing = "";

    switch(mcchoice()){
        case "Minecraft Button":
        fullthing = '<div class="buttonbg"><p class="buttontext">';
        break;

        case "Minecraft End Poem":
        fullthing = '<div class="poembg"><p class="poemtextwhite">';
        break;

        case "Minecraft Book":
        fullthing = '<div class="mcbook"><p>';
        break;        

        default:
        fullthing = '<div><p>';
        break;
    }

    var fullthing = fullthing.concat(mcform()+"</p></div>");

    document.getElementById("fullthing").value = fullthing;
}

function copyText() {
    console.log("copytext");
    // Get the text field
    var copyText = document.getElementById("mctype");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  } 