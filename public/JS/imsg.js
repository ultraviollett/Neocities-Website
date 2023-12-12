

document.getElementById("gc").style.display = "none";

document.getElementById("messengeegcname").style.display = "none";

document.getElementById("gcname").style.display = "none";
document.getElementById("textbar").style.display = "none";

document.getElementById("other").style.display = "none";

document.getElementById("messengernamediv").style.display = "none";
document.getElementById("contactnamediv").style.display = "none";

document.getElementById("linktextdiv").style.display = "none";

var currentname = "";

function groupdmtype(){
    if ( $("#groupdmtype").val() == 'DM' ){
        document.getElementById("dm").style.display = "";
        document.getElementById("gc").style.display = "none";
        document.getElementById("messengee").style.display = "";
        document.getElementById("other").style.display = "none";
        document.getElementById("messengernamediv").style.display = "none";

        document.getElementById("gcname").style.display = "none";
        document.getElementById("messengeename").style.display = "";


    }else{
        document.getElementById("gc").style.display = "";
        document.getElementById("dm").style.display = "none";
        document.getElementById("messengee").style.display = "none";
        document.getElementById("other").style.display = "";
        
        document.getElementById("gcname").style.display = "";
        document.getElementById("messengeename").style.display = "none";
        document.getElementById("contactnamediv").style.display = "none";
}}

function messengerchoose(){
    if ( $('input[id="you"]:checked').val() ){
        document.getElementById("messengernamediv").style.display = "none";
        document.getElementById("contactnamediv").style.display = "none";

    }else if( $('input[id="messengee"]:checked').val() ){
        document.getElementById("messengernamediv").style.display = "none";
        document.getElementById("contactnamediv").style.display = "";

    }else{
        document.getElementById("messengernamediv").style.display = "";
        document.getElementById("contactnamediv").style.display = "none";
}}


function messagetype(){
    switch ( $("#messagetype").val() ){
        case "Message":
            document.getElementById("linktextdiv").style.display = "none";
            document.getElementById("messagetextdiv").style.display = "";
            break;

        case "Texting Dots":
            document.getElementById("linktextdiv").style.display = "none";
            document.getElementById("messagetextdiv").style.display = "none";
            break;
        
        default:
            document.getElementById("linktextdiv").style.display = "";
            document.getElementById("messagetextdiv").style.display = "none";
            break;           

    
    }
}


function add(){

}

$(function() {

    $('#add').on('click', function() {
    
    });





    $("#gcnamechoose").on("click", function() {
        $("#messengeegcname").toggle();
        $("#contactnamedivdiv").toggle();
    });

    $("#textbarchoose").on("click", function() {
        $("#textbar").toggle();
    });


});
