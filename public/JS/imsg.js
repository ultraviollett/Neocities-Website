

document.getElementById("gc").style.display = "none";//default is DM

document.getElementById("headernamediv").style.display = "none"; //holds both header names for gc and dm
document.getElementById("headergcnamediv").style.display = "none";//gc name is hidden by default
document.getElementById("textbardiv").style.display = "none";

document.getElementById("gccontact").style.display = "none";

document.getElementById("gccontactnamediv").style.display = "none";
document.getElementById("dmcontactnamediv").style.display = "none";

document.getElementById("linktextdiv").style.display = "none";

document.getElementById("timestampdiv").style.display = "none";
document.getElementById("richlinkdiv").style.display = "none";
document.getElementById("alttextdiv").style.display = "none";
document.getElementById("readreceiptdiv").style.display = "none";

var prevName = ""; //stores value of prev name to compare it to current
var prevInOut = ""; //stores val of prev in/out to compare it to current
var prev = ""; //holds code (minus surrounding div) to be added to
childCount = 0; //counts how many times add is clicked


function switchGroupChatDM(){
    if ( $("#groupdmtype").val() == 'DM' ){
        document.getElementById("dm").style.display = "";
        document.getElementById("gc").style.display = "none";
        document.getElementById("dmcontact").style.display = "";
        document.getElementById("gccontact").style.display = "none";
        document.getElementById("gccontactnamediv").style.display = "none";

        document.getElementById("headergcnamediv").style.display = "none";
        document.getElementById("headerdmnamediv").style.display = "";


    }else{
        document.getElementById("gc").style.display = "";
        document.getElementById("dm").style.display = "none";
        document.getElementById("dmcontact").style.display = "none";
        document.getElementById("gccontact").style.display = "";
        
        document.getElementById("headergcnamediv").style.display = "";
        document.getElementById("headerdmnamediv").style.display = "none";
        document.getElementById("dmcontactnamediv").style.display = "none";
}}

function chooseMessenger(){
    if ( $('input[id="you"]:checked').val() ){
        document.getElementById("gccontactnamediv").style.display = "none";
        document.getElementById("dmcontactnamediv").style.display = "none";

    }else if( $('input[id="dmcontact"]:checked').val() ){
        document.getElementById("gccontactnamediv").style.display = "none";
        document.getElementById("dmcontactnamediv").style.display = "";

    }else{
        document.getElementById("gccontactnamediv").style.display = "";
        document.getElementById("dmcontactnamediv").style.display = "none";
}}


function chooseMessageType(){
    switch ( $("#messagetype").val() ){
        case "Message":
            document.getElementById("linktextdiv").style.display = "none";
            document.getElementById("messagetextdiv").style.display = "";
            document.getElementById("timestampdiv").style.display = "none";
            document.getElementById("readreceiptchoosediv").style.display = "";
            document.getElementById("richlinkdiv").style.display = "none";
            document.getElementById("alttextdiv").style.display = "none";
            break;

        case "Typing Dots":
            document.getElementById("linktextdiv").style.display = "none";
            document.getElementById("messagetextdiv").style.display = "none";
            document.getElementById("timestampdiv").style.display = "none";
            document.getElementById("readreceiptchoosediv").style.display = "none";
            document.getElementById("richlinkdiv").style.display = "none";
            document.getElementById("alttextdiv").style.display = "none";
            break;
        
        case "Timestamp":
            document.getElementById("linktextdiv").style.display = "none";
            document.getElementById("messagetextdiv").style.display = "none";
            document.getElementById("timestampdiv").style.display = "";
            document.getElementById("readreceiptchoosediv").style.display = "none";
            document.getElementById("richlinkdiv").style.display = "none";
            document.getElementById("alttextdiv").style.display = "none";
            break;
        
        case "Rich Link":
            document.getElementById("linktextdiv").style.display = "";
            document.getElementById("messagetextdiv").style.display = "none";
            document.getElementById("timestampdiv").style.display = "none";
            document.getElementById("readreceiptchoosediv").style.display = "";
            document.getElementById("richlinkdiv").style.display = "";
            document.getElementById("alttextdiv").style.display = "none";
            break;

        case "Image":
            document.getElementById("linktextdiv").style.display = "";
            document.getElementById("messagetextdiv").style.display = "none";
            document.getElementById("timestampdiv").style.display = "none";
            document.getElementById("readreceiptchoosediv").style.display = "";
            document.getElementById("richlinkdiv").style.display = "none";
            document.getElementById("alttextdiv").style.display = "";
            break;

        default:
            document.getElementById("linktextdiv").style.display = "";
            document.getElementById("messagetextdiv").style.display = "none";
            document.getElementById("timestampdiv").style.display = "none";
            document.getElementById("readreceiptchoosediv").style.display = "";
            document.getElementById("richlinkdiv").style.display = "none";
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
        x = $("#gccontactname").val();
    } else if( $("#dmcontactname").val() ){
        x = $("#dmcontactname").val();
    }else if( $("#dmcontactnamealt").val() ){
        x = $("#dmcontactnamealt").val();
    }else{
        x = "Contact";
    }
    return x;
}


function addSurroundingDiv(x){ //adds surrounding div depending on whats been selected
    var start = '<dl class="imessage ';
    if ( $("#groupdmtype").val() == 'Groupchat' ){
        //add div class if you pick gc
        start = start + 'grouptext ';
    }
    start = start + '">'; 
    if ( $('input[id="gcnamechoose"]:checked').val() ){ //adds header
        start = start + '<h1 class="contact">';
        if( $("#gcname").val() ){
            start = start + $("#gcname").val();
        }else if(  $("#dmcontactname").val() ){
            start = start +  $("#dmcontactname").val();
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

function switchName(x){ 
    //finds out if someone different is texting.
    //then uses new name and figures out if text is in or out
    var currentInOut;
    var isChange = false;

    if ( $('input[id="dmcontact"]:checked').val() ||  $('input[id="gccontact"]:checked').val() ){
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
    //adds text of message
    x = x + '<dd>' + $("#messagetext").val() + '</dd>';

    return x;

}

function addTimestamp(x){
    //finds what info has been inputted for the timestamp and adds it
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


function addImage(x){
    //adds image
    x = x + '<dd class="pic"><img src="'+$("#linktext").val()+'" alt="'+ $("#alttext").val() +'"></dd>';
}

function addRichLink(x){
    //adds rich link
    x = x + '<dd class="richlink"><a href="'+$("#linktext").val()+'">';
    x = x + '<iframe src="'+$("#linktext").val()+'" frameborder="0"></iframe>';
    
    if( $("#richlink").val() ){
        x = x + '<p class="caption"><b>'+$("#richlink").val()+'</b></p>';
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

function addLink(x){
    x = x + '<dd><a href="' + $("#linktext").val() + '"></dd>'
}

function addTypingDots(x){
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
            x = addImage(x);

        }else if ( $("#messagetype").val() == 'Rich Link'){
            x = addRichLink(x);

        }else if ( $("#messagetype").val() == 'Link'){
            x = addLink(x);

        }else if ( $("#messagetype").val() == 'Typing Dots'){
            x = addTypingDots(x);

        }else{
            x = x + "link";
        }
        prev = x;

        x = addSurroundingDiv(x);

        $('#outputdiv').html(x);
    });

    $('#generateHTML').on('click', function() {
        let x = addSurroundingDiv(prev);
        $('#fullthing').text(x);
    });


    $("#gcnamechoose").on("click", function() {
        $("#headernamediv").toggle();
        $("#dmcontactnamedivdiv").toggle();
    });

    $("#textbarchoose").on("click", function() {
        $("#textbardiv").toggle();
    });

    $("#readreceiptchoose").on("click", function() {
        $("#readreceiptdiv").toggle();
    });

});
