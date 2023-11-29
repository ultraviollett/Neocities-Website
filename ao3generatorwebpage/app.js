var mcchoice;
var fullthing;
var mctext;

function mcchoice() {  
    var mylist = document.getElementById("myList");  
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
    
    var mcchoice = mylist.options[mylist.selectedIndex].text;
    switch(mcchoice){
        case "Minecraft Button":
        document.getElementById("favourite").innerHTML = "button";  
        document.getElementById("classchange").className = "buttonbg"
        document.getElementById("paste").className = "buttontext";
        break;

        case "Minecraft End Poem":
        document.getElementById("favourite").innerHTML = "poem";  
        document.getElementById("classchange").className = "poembg";
        document.getElementById("paste").className = "poemtextwhite";
        break;

        case "Minecraft Book":
        document.getElementById("favourite").innerHTML = "book";  
        document.getElementById("classchange").className = "mcbook";
        document.getElementById("paste").className = "";
        break;
    }
    return mcchoice;

} 

function mcform() {
    var mctext = document.getElementById("mctext").value;
    document.getElementById("paste").innerHTML = mctext;
    return mctext


  }

function generateHTML(){

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
    // Get the text field
    var copyText = document.getElementById("favourite");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  } 