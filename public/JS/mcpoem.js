var mcchoice2;
var fullthing;
var mctext;

console.log("test js");

function mcchoice() { 
    var mcchoice = document.getElementById("mcchoiceid");  
    var mcchoice2 = mcchoice.options[mcchoice.selectedIndex].value;
    return mcchoice2;
}
function add(){
    switch(mcchoice()){

        case "White Text":
        const para = document.createElement("p");
        const node = document.createTextNode("This is new.");
        para.appendChild(node);
            
        const element = document.getElementById("poemdiv");
        element.appendChild(para);

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
    return fullthing;
}

function copy() {
    let textarea = document.getElementById("textarea");
    textarea.select();
    document.execCommand("copy");
  }