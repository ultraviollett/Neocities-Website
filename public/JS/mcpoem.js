var mcchoice2;
var childtext=[];
var fullthing;
childcount = 0;
var mctext;


function mcchoice() { 
    var mcchoice = document.getElementById("mcchoiceid");  
    var mcchoice2 = mcchoice.options[mcchoice.selectedIndex].value;
    return mcchoice2;
}



function mcform() {
    var mctext = document.getElementById("mctext").value;
    return mctext
}


  function add(mctext){
    const para = document.createElement("p");
    const node = document.createTextNode(mctext);
    

    para.appendChild(node);

    const element = document.getElementById("poemdiv");

    switch(mcchoice()){
        default:
        childtext[childcount] = '<p class="poemtext">'+mctext+"</p>";
        para.className = "poemtext";
        break;

        case "Green Text":
        childtext[childcount] = '<p class="poemtextgreen poemtext">'+mctext+"</p>";
        para.className = "poemtextgreen poemtext";
        break;

        case "Cyan Text":
        childtext[childcount] = '<p class="poemtextblue poemtext">'+mctext+"</p>";
        para.className = "poemtextcyan poemtext";
        break;

        case "Red Text":
        childtext[childcount] = '<p class="poemtextred poemtext">'+mctext+"</p>";
        para.className = "poemtextred poemtext";
        break;

        case "Orange Text":
        childtext[childcount] = '<p class="poemtextorange poemtext">'+mctext+"</p>";
        para.className = "poemtextorange poemtext";
        break;

        case "Yellow Text":
        childtext[childcount] = '<p class="poemtextyellow poemtext">'+mctext+"</p>";
        para.className = "poemtextyellow poemtext";
        break;

        case "Purple Text" :
        childtext[childcount] = '<p class="poemtextpurple poemtext">'+mctext+"</p>";
        para.className = "poemtextpurple poemtext";
        break;

        case "Pink Text":
        childtext[childcount] = '<p class="poemtextpink poemtext">'+mctext+"</p>";
        para.className = "poemtextpink poemtext";
        break;

    }
    
    childcount += 1;
    childtext.push("");
    element.appendChild(para);

    }


function generateHTML(){
    fullthing="";
    for (let i=0; i < childtext.length; i++){
        fullthing = fullthing+childtext[i];
    }

    var fullthing = '<div class="poembg">'+fullthing+"</div>";

    document.getElementById("fullthing").value = fullthing;
    return fullthing;
}

function copy() {
    let textarea = document.getElementById("textarea");
    textarea.select();
    document.execCommand("copy");
  }