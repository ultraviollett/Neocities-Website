
document.getElementById("messengernamediv").style.display = "none";


var currentname = "";

function messengernamechoose(){
    if ( $('input[id="other"]:checked').val() ){
        document.getElementById("messengernamediv").style.display = "";
    }else{
        document.getElementById("messengernamediv").style.display = "none";
}}

$(function() {

});
