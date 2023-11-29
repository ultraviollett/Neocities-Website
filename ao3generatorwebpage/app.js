var mcchoice;
var fullthing;
var mctext;

console.log("test js");

function mcchoice() { 
    var mcchoice2 = document.getElementById('mychoiceid');
    var mcchoice = mylist.options[mylist.selectedIndex].text;
    console.log("test button: "+mcchoice2);

    switch(mcchoice){

        case "Minecraft Button":
        document.getElementById("mctype").innerHTML = "button";  
        document.getElementById("classchange").className = "buttonbg";
        document.getElementById("paste").className = "buttontext";
        break;

        case "Minecraft End Poem":
        document.getElementById("mctype").innerHTML = "poem";  
        document.getElementById("classchange").className = "poembg";
        document.getElementById("paste").className = "poemtextwhite";
        break;

        case "Minecraft Book":
        document.getElementById("mctype").innerHTML = "book";  
        document.getElementById("classchange").className = "mcbook";
        document.getElementById("paste").className = "";
        break;
    }
    return mcchoice;

} 

function mcform() {
    console.log("mcform");
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