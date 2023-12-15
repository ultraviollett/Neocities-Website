
document.getElementById("colorpickdiv").style.display = "none";

var prev = "";//holds code (minus surrounding div) to be added to
//were adding a default example
var DEFAULT_TEXT = '';


function revealColorPickDiv(){
    //not in use as I need to edit the CSS to add custom colours,
    //ill come back later
    if( $('input[id="colorpick"]:checked').val() ){

        document.getElementById("colorpickdiv").style.display = "";
    }else{
        document.getElementById("colorpickdiv").style.display = "none";
    }
}

function findColor(){
    //finds colour of text picked in radio buttons
    //Its a separate function because I want to add a colorpicker later
    var x = $("input[type='radio'][name=color]:checked",'#choosecolorform').val();
    return x;
}

function addSurroundingDiv(x){ 
    //adds surrounding div to current code
    return '<p class="screenreader">A Minecraft Poem with the following text: </p> <div class="mcpoemdiv">'+x+'</div>';

}

function addNewText(x){
    let color = findColor(); //find color picked
    let text = $("#poemtext").val(); //get text from poemtext box
    x = x + '<p class="'+color+'"><span class="screenreader">'+color+' text: </span>'+text+'</p>';
    return x;
}

$(function() {

    $('#add').on('click', function() {
        //compiles the whole code together as is currently
        
        let x = addNewText(prev);

        prev = x;

        x = addSurroundingDiv(x);
        $('#outputdiv').html("");
        $('#outputdiv').html(x);
        $('#HTMLoutput').text(x);

        $("#poemtext").val("");

    });



    fetch("CSS/mcpoem.txt").then(res => res.text()).then(text => {
        const contentDiv = document.getElementById("CSStocopy");
        contentDiv.textContent = text;
    });

});
