var childtext=[];
var fullthing;
childcount = 0;
var mctext;
var isright;


function mcchoice() { 
    var mcchoice = document.getElementById("mcchoiceid");  
    var mcchoice2 = mcchoice.options[mcchoice.selectedIndex].value;
    return mcchoice2;
}



function mcform() {
    var mctext = document.getElementById("mctext").value;
    return mctext
}

function leftchoice(){ isright = false;}
function rightchoice(){ isright = true;}

  function add(mctext){
    const para = document.createElement("div");
    const node = document.createTextNode(mctext);
    

    para.appendChild(node);

    const element = document.getElementById("msgdiv");

    if (isright){
        childtext[childcount] = '<div class="right texting" align="right">'+mctext+"</div>";
        para.className = "right texting";
    }else{
        childtext[childcount] = '<div class="left texting" align="left">'+mctext+"</div>";
        para.className = "left texting";

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

    var fullthing = '<div class="textdiv">'+fullthing+"</div>";

    document.getElementById("fullthing").value = fullthing;
    return fullthing;
}

function copy() {
    let textarea = document.getElementById("textarea");
    textarea.select();
    document.execCommand("copy");
  }