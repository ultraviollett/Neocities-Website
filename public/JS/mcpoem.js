var childtext=[];
var fullthing;
childcount = 0;
var mctext;
var colour;


function mcform() {
    var mctext = document.getElementById("mctext").value;
    return mctext
}

function green(){colour = "Green Text"}
function cyan(){colour = "Cyan Text"}
function red(){colour = "Red Text"}
function orange(){colour = "Orange Text"}
function yellow(){colour = "Yellow Text"}
function purple(){colour = "Purple Text"}
function pink(){colour = "Pink Text"}

function add(mctext){
    const para = document.createElement("p");
    const node = document.createTextNode(mctext);
    

    para.appendChild(node);

    const element = document.getElementById("poemdiv");

    switch(colour){
        default:
        childtext[childcount] = '<p class="poemtext">'+mctext+"</p>";
        para.className = "poemtext";
        break;

        case "Green Text":
        childtext[childcount] = '<p class="poemtextgreen poemtext">'+mctext+"</p>";
        para.className = "poemtextgreen poemtext";
        break;

        case "Cyan Text":
        childtext[childcount] = '<p class="poemtextcyan poemtext">'+mctext+"</p>";
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
