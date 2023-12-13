

document.getElementById("gc").style.display = "none";

document.getElementById("messengeegcname").style.display = "none";

document.getElementById("gcnamediv").style.display = "none";
document.getElementById("textbardiv").style.display = "none";

document.getElementById("other").style.display = "none";

document.getElementById("messengernamediv").style.display = "none";
document.getElementById("contactnamediv").style.display = "none";

document.getElementById("linktextdiv").style.display = "none";

document.getElementById("timestampdiv").style.display = "none";
document.getElementById("vidnamediv").style.display = "none";
document.getElementById("alttextdiv").style.display = "none";
document.getElementById("readreceiptdiv").style.display = "none";

var prevName = "";
var prevInOut = "";
var prev = "";
childCount = 0;


function groupdmtype(){
    if ( $("#groupdmtype").val() == 'DM' ){
        document.getElementById("dm").style.display = "";
        document.getElementById("gc").style.display = "none";
        document.getElementById("messengee").style.display = "";
        document.getElementById("other").style.display = "none";
        document.getElementById("messengernamediv").style.display = "none";

        document.getElementById("gcnamediv").style.display = "none";
        document.getElementById("messengeenamediv").style.display = "";


    }else{
        document.getElementById("gc").style.display = "";
        document.getElementById("dm").style.display = "none";
        document.getElementById("messengee").style.display = "none";
        document.getElementById("other").style.display = "";
        
        document.getElementById("gcnamediv").style.display = "";
        document.getElementById("messengeenamediv").style.display = "none";
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


function chooseMessageType(){
    switch ( $("#messagetype").val() ){
        case "Message":
            document.getElementById("linktextdiv").style.display = "none";
            document.getElementById("messagetextdiv").style.display = "";
            document.getElementById("timestampdiv").style.display = "none";
            document.getElementById("readreceiptchoosediv").style.display = "";
            document.getElementById("vidnamediv").style.display = "none";
            document.getElementById("alttextdiv").style.display = "none";
            break;

        case "Typing Dots":
            document.getElementById("linktextdiv").style.display = "none";
            document.getElementById("messagetextdiv").style.display = "none";
            document.getElementById("timestampdiv").style.display = "none";
            document.getElementById("readreceiptchoosediv").style.display = "none";
            document.getElementById("vidnamediv").style.display = "none";
            document.getElementById("alttextdiv").style.display = "none";
            break;
        
        case "Timestamp":
            document.getElementById("linktextdiv").style.display = "none";
            document.getElementById("messagetextdiv").style.display = "none";
            document.getElementById("timestampdiv").style.display = "";
            document.getElementById("readreceiptchoosediv").style.display = "none";
            document.getElementById("vidnamediv").style.display = "none";
            document.getElementById("alttextdiv").style.display = "none";
            break;
        
        case "Rich Link":
            document.getElementById("linktextdiv").style.display = "";
            document.getElementById("messagetextdiv").style.display = "none";
            document.getElementById("timestampdiv").style.display = "none";
            document.getElementById("readreceiptchoosediv").style.display = "";
            document.getElementById("vidnamediv").style.display = "";
            document.getElementById("alttextdiv").style.display = "none";
            break;

        case "Image":
            document.getElementById("linktextdiv").style.display = "";
            document.getElementById("messagetextdiv").style.display = "none";
            document.getElementById("timestampdiv").style.display = "none";
            document.getElementById("readreceiptchoosediv").style.display = "";
            document.getElementById("vidnamediv").style.display = "none";
            document.getElementById("alttextdiv").style.display = "";
            break;

        default:
            document.getElementById("linktextdiv").style.display = "";
            document.getElementById("messagetextdiv").style.display = "none";
            document.getElementById("timestampdiv").style.display = "none";
            document.getElementById("readreceiptchoosediv").style.display = "";
            document.getElementById("vidnamediv").style.display = "none";
            document.getElementById("alttextdiv").style.display = "none";
            break;           

    
    }
}

function findName(){
    //I am trying to dig out of the hole I made myself with three different slots for names
    var x;
    if ( $('input[id="you"]:checked').val() ){
        x = "You";
    } else if ($("#groupdmtype").val() == 'Groupchat'){
        x = $("#messengername").val();
    } else if( $("#messengeename").val() ){
        x = $("#messengeename").val();
    }else if( $("#contactname").val() ){
        x = $("#contactname").val();
    }else{
        x = "Contact";
    }
    return x;
}


function addSurroundingDiv(x){ //adds surrounding div depending on whats been selected
    var start = '<dl class="imessage ';
    if ( $("#groupdmtype").val() == 'Groupchat' ){
        start = start + 'grouptext ';
    }
    start = start + '">';
    if ( $('input[id="gcnamechoose"]:checked').val() ){
        start = start + '<h1 class="contact">';
        if( $("#gcname").val() ){
            start = start + $("#gcname").val();
        }else if(  $("#messengeename").val() ){
            start = start +  $("#messengeename").val();
        }
        start = start + '</h1>';
    }

    var end = "";
    if( $('input[id="textbarchoose"]:checked').val() && $("#textbar").val()){
        end = '<div class="footer"><span class="typebar">'+$("#textbar").val()+'</span></div>';
    }else if( $('input[id="textbarchoose"]:checked').val() ){
        end = '<div class="footer"><kbd class="typebar"></kbd></div>';
    }
    
    end = end + '</div></dl>';


    
    x = start + x + end;
    return x;

}

function switchName(x){ //finds out if text is on left or right side. Left is in, right is out
    var currentInOut;
    var isChange = false;

    if ( $('input[id="messengee"]:checked').val() ||  $('input[id="other"]:checked').val() ){
        currentInOut = 'in';
    }else{ currentInOut = 'out'; }

    if (currentInOut != prevInOut){ isChange = true; }

    var currentName = findName();

    if( !currentName && currentInOut == "in"){
        currentName = "Contact";
    }else if (!currentName){
        currentName = "You";
    }
    if (currentName != prevName){ isChange = true}

    if (childCount == 0){
        x = x + '<div class="'+currentInOut+'"><dt>'+currentName+'</dt>'

    }else if (isChange){
        x = x + '</div><div class="'+currentInOut+'"><dt>'+currentName+'</dt>'
    }

    childCount += 1;
    prevInOut = currentInOut;
    prevName = currentName;

    return x;

}

function addNewText(x){

    x = x + '<dd>' + $("#messagetext").val() + '</dd>';//adds text of message

    return x;

}

function addTimestamp(x){
    x = x + '<h4 class="time">';
    switch ( $("#timechoose").val() ){
        case "The Date":
            x = x + document.getElementById("date").value;
            break;

        default:
            x = x + '<h4 class="time"><b>'+ $("#timechoose").val()+'</b>';
            if ( document.getElementById("date").value ){
                x = x + ", "+ document.getElementById("date").value;
            }
            break;
    }
    if ( document.getElementById("time").value ){
        x = x + ", "+ document.getElementById("time").value;

    }
    x = x + '</h4>';
    return x;

}


function image(x){
    x = x + '<dd class="pic"><img src="'+$("#linktext").val()+'" alt="'+ $("#alttext").val() +'"></dd>';
}

function richlink(x){
    x = x + '<dd class="richlink"><a href="'+$("#linktext").val()+'">';
    x = x + '<iframe src="'+$("#linktext").val()+'" frameborder="0"></iframe>';
    
    if( $("#vidname").val() ){
        x = x + '<p class="caption"><b>'+$("#vidname").val()+'</b></p>';
    }
    x = x + '</a></dd>';

    return x;
}
/*
<dd class="richlink">
	<a href="https://www.youtube.com/watch?v=DdRrXZoQ8wo">
		<iframe src="https://www.youtube.com/embed/DdRrXZoQ8wo" frameborder="0"></iframe>
		<p class="caption"><b>Forging a Roman Gladius Sword</b> youtube.com </p>
        </a>
</dd>
 */

function link(x){
    x = x + '<dd><a href="' + $("#linktext").val() + '"></dd>'
}

function typingdots(x){
    x = x + '<dd class="typing"> <div></div> <div></div> <div></div> </dd></div>'
    return x;

}
/*
   <div class="in">
		<dt>Numerius</dt>
		<dd class="typing">
			<div></div>
			<div></div>
			<div></div>
		</dd>
	</div>
 */

$(function() {

    $('#add').on('click', function() {
        //compiles the whole code together as is currently
        
        var x;
        x = switchName(prev);
        
        if ( $("#messagetype").val() == 'Message'){
            x = addNewText(x);
    
        }else if ( $("#messagetype").val() == 'Timestamp'){
            x = addTimestamp(prev);

        }else if ( $("#messagetype").val() == 'Image'){
            x = image(x);

        }else if ( $("#messagetype").val() == 'Rich Link'){
            x = richlink(x);

        }else if ( $("#messagetype").val() == 'Link'){
            x = link(x);

        }else if ( $("#messagetype").val() == 'Typing Dots'){
            x = typingdots(x);

        }else{
            x = x + "link";
        }
        prev = x;

        x = addSurroundingDiv(x);

        $('#outputdiv').html(x);
    });

    $('#generateHTML').on('click', function() {
        $('#fullthing').text(prev);
    });


    $("#gcnamechoose").on("click", function() {
        $("#messengeegcname").toggle();
        $("#contactnamedivdiv").toggle();
    });

    $("#textbarchoose").on("click", function() {
        $("#textbardiv").toggle();
    });

    $("#readreceiptchoose").on("click", function() {
        $("#readreceiptdiv").toggle();
    });

});
