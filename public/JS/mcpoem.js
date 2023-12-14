
document.getElementById("colorpickdiv").style.display = "none";

var prev = "";//holds code (minus surrounding div) to be added to

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
    return '<div class="mcpoemdiv">'+x+'</div>';

}

function addNewText(x){
    let color = findColor(); //find color picked
    let text = $("#poemtext").val(); //get text from poemtext box
    x = x + '<p class="'+color+'">'+text+'</p>';
    return x;
}

$(function() {

    $('#add').on('click', function() {
        //compiles the whole code together as is currently
        
        let x = addNewText(prev);

        prev = x;

        x = addSurroundingDiv(x);
        
        $('#outputdiv').html(x);
        $('#HTMLoutput').text(x);

    });
});
