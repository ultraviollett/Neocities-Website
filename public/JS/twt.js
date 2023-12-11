document.getElementById("imageURLs").style.display = "none";
document.getElementById("polloptions").style.display = "none";
document.getElementById("replynotweet").style.display = "none";

//for quote tweets
document.getElementById("quotetweet").style.display = "none";
document.getElementById("qimageURLs").style.display = "none";
document.getElementById("qpolloptions").style.display = "none";

var prev = ""; //holds entire HTML before next is added
var childcount = 0; //stores the number of tweets, so you know when to add twtstart
var tweetop = ""; //automatically reply to op


function roundnum(x){
//rounds numbers so it obeys the twitter format, ie 123, 54K, 45M, etc
    if (x>999999){
        num = Math.round(x/1000000,2)+"M";
    }else if(x>999){
        num = Math.round(x/1000,2)+"K";
    }else{
        num = x;
    }
    return num;
}

function twttype(){
    if ($("#twttype").val() == 'Reply to tweet'){
        document.getElementById("replynotweet").style.display = "";
        document.getElementById("time").style.display = "none";
    }else{
        document.getElementById("replynotweet").style.display = "none";
        document.getElementById("time").style.display = "";
    }
}

//get data from inputs, return text needed for tweet

function opurl(){
    let x = document.getElementById("opurl").value;
    return x;
}

function icon(){
    let x;
    if (document.getElementById("icon").value){
        x = document.getElementById("icon").value;
    }
    if($("#iconchoose").val() != "or pick icon here"){

    switch ($("#iconchoose").val()){

        case "Steve Minecraft":
            x = "https://images.squidge.org/images/2023/12/07/stevemc.jpeg";
            break;

        case "Alex Minecraft":
            x = "https://images.squidge.org/images/2023/12/07/alexminecraftface.png";
            break;

        case "Walter White Breaking Bad":
            x = "https://images.squidge.org/images/2023/12/07/walterwhite.jpeg";
            break;

        case "Hatsune Miku Vocaloid":
            x = "https://images.squidge.org/images/2023/12/07/hatsunemiku.png";
            break;

        case "Herobrine Minecraft":
            x = "https://images.squidge.org/images/2023/12/09/herobrinemc.webp";
            break;

        case "Sunflowers Van Gogh":
            x = "https://images.squidge.org/images/2023/12/09/sunflowersvinentvangogh.jpeg";
            break;
        
        case "Mona Lisa":
            x = "https://images.squidge.org/images/2023/12/09/monalisa.webp";
            break;

        case "Hong Kong Night":
            x = "https://images.squidge.org/images/2023/12/09/hongkongnight.jpeg";
            break;

        case "Railroad":
            x = "https://images.squidge.org/images/2023/12/09/railroad.jpeg";
            break;

        case "Shark Sandcastle":
            x = "https://images.squidge.org/images/2023/12/09/sharksandcastle.jpeg";
            break;

        case "Highway Drive":
            x = "https://images.squidge.org/images/2023/12/09/ukdrive.jpeg";
            break;

        case "Einstein with Tongue":
            x = "https://images.squidge.org/images/2023/12/09/einstein-with-tongue.png";

    }
    }

    return x;
}

function qicon(){
    let x;
    if (document.getElementById("qicon").value){
        x = document.getElementById("qicon").value;
    }
    if($("#qiconchoose").val() != "or pick icon here"){

    switch ($("#qiconchoose").val()){

        case "Steve Minecraft":
            x = "https://images.squidge.org/images/2023/12/07/stevemc.jpeg";
            break;

        case "Alex Minecraft":
            x = "https://images.squidge.org/images/2023/12/07/alexminecraftface.png";
            break;

        case "Walter White Breaking Bad":
            x = "https://images.squidge.org/images/2023/12/07/walterwhite.jpeg";
            break;

        case "Hatsune Miku Vocaloid":
            x = "https://images.squidge.org/images/2023/12/07/hatsunemiku.png";
            break;

        case "Herobrine Minecraft":
            x = "https://images.squidge.org/images/2023/12/09/herobrinemc.webp";
            break;

        case "Sunflowers Van Gogh":
            x = "https://images.squidge.org/images/2023/12/09/sunflowersvinentvangogh.jpeg";
            break;
        
        case "Mona Lisa":
            x = "https://images.squidge.org/images/2023/12/09/monalisa.webp";
            break;

        case "Hong Kong Night":
            x = "https://images.squidge.org/images/2023/12/09/hongkongnight.jpeg";
            break;

        case "Railroad":
            x = "https://images.squidge.org/images/2023/12/09/railroad.jpeg";
            break;

        case "Shark Sandcastle":
            x = "https://images.squidge.org/images/2023/12/09/sharksandcastle.jpeg";
            break;

        case "Highway Drive":
            x = "https://images.squidge.org/images/2023/12/09/ukdrive.jpeg";
            break;

        case "Einstein with Tongue":
            x = "https://images.squidge.org/images/2023/12/09/einstein-with-tongue.png";

    }
    }

    return x;
}

function username(){
    let x = document.getElementById("username").value;
    return x;
}

function twturl(){
    let x = document.getElementById("twturl").value;
    if ($("#twttype").val() == 'Tweet'){tweetop = x;}
    return x;


}

function tweet(){
    let x = document.getElementById("tweet").value;
    return x;
}

function time(){
    let x = document.getElementById("time").value;
    return x;   
}

function date(){
    let x = document.getElementById("date").value;
    return x;   
}

function retweet(){
    let x = document.getElementById("retweet").value;
    x = roundnum(x);
    return x;  
}

function reply(){
    let x = document.getElementById("reply").value;
    x = roundnum(x);
    return x;   
}

function like(){
    let x = document.getElementById("like").value;
    x = roundnum(x);
    return x;   
}

//now onto the even more optional items, ie images and polls

//images

function images(x,i1="",alt=""){
    if(i1){ 
        //if there are two images
        x = x + '<p class="twt-image"><img class="twt-image" src=';
        x = x + " ' "+i1+"'"; 

    }if(alt){
        //if only one image is there
        x = x + 'alt = "'+alt+'"'
    }
    x = x + "></p>"
    return x
}

/*
      <p class="twt-image"><img class="twt-image"
       src="CSS/img/eiffeltower.png" alt="ALT TEXT"></p>

*/

//polls

function poll(x,p1="",p2="",p3="",p4="",votes=""){
    let ispoll = false;
    if(p1){
        x = x + '<span class="screenreader">Poll:</span><div class="twtpoll"><span class="screenreader">First option: </span><span class="twtpolltext">'+p1+'</span></div>'
        ispoll = true;
    }
    if(p2){
        x = x + ' <div class="twtpoll"><span class="screenreader">Second option: </span><span class="twtpolltext">'+p2+'</span></div>'
        ispoll = true;
    }
    if(p3){
        x = x + ' <div class="twtpoll"><span class="screenreader">Third option: </span><span class="twtpolltext">'+p3+'</span></div>'
        ispoll = true;
    }
    if(p4){
        x = x + ' <div class="twtpoll"><span class="screenreader">Fourth option: </span><span class="twtpolltext">'+p4+'</span></div>'
        ispoll = true;
    }
    if (ispoll && votes){
        let votenum = roundnum(votes);
        x = x + '<span class="pollvotes">'+votenum+' votes</span>';
    }
    return x;
}

/*
      <span class="screenreader">Poll:</span>
          <div class="twtpoll"><span class="screenreader">First option: </span><span class="twtpolltext">OPTION1</span></div>
          <div class="twtpoll"><span class="screenreader">Second option: </span><span class="twtpolltext">OPTION2</span></div>
          <div class="twtpoll"><span class="screenreader">Third option: </span><span class="twtpolltext">OPTION3</span></div>
          <div class="twtpoll"><span class="screenreader">Fourth option: </span><span class="twtpolltext">OPTION4</span></div>
      <span class="pollvotes">324 votes</span>
*/

//quotetweet


function quotetweet(x){

    x = x + '<div class="twt-quotebox"><span class="screenreader">Quote Tweet: </span><div class="twt-header"> ';
    if(qicon()){
        x = x + '<div class="twt-icon-container"> <img class="twt-iconquote" src="'+qicon()+'"> </div> ';
    }
    x = x + ' <div class="twt-id twt-quote-id"> <span class="twt-name"> '+$("#qusername").val()+'</span>';
    
    if(twturl()){
    x = x + '<span class="twt-handle"> @'+twturl();
    }
    if($("#qdate").val()){
        x = x + " · "+ $("#qdate").val();
    }
    x = x +'</span> </div> </div> <div class="twt-contentquote">'+$("#qtweet").val();

    x = images(x,$("#qimage1").val(),$("#qalt").val());
    x = poll(x,$("#qpoll1").val(),$("#qpoll2").val(),$("#qpoll3").val(),$("#qpoll4").val(),$("#qvotes").val());
    
    x = x + '</div></div>';

    return x;
/* 
        <div class="twt-quotebox"><span class="screenreader">Quote Tweet: </span>
      <div class="twt-header"> 
        <div class="twt-icon-container"> <img class="twt-iconquote" src="https://images.squidge.org/images/2023/12/07/alexminecraftface.png">
         </div> 
          <div class="twt-id twt-quote-id"> <span class="twt-name"> quoteNAME</span>
          <span class="twt-handle"> @quoteURL</span> 
          </div> </div> <div class="twt-contentquote">QUOTE TWEET CONTENT
[image]
[poll]
          </div>
        </div>  
    
*/
}


//function to compile the entire tweet, including previous

function newtweet(previous){
   
    //add starting div
    var x = previous + '<div class="twt ';
 
    //if this is the first tweet added, add twtstart so it has a top border
    if (childcount == 0){ x = x + 'twtstart '; }
    childcount += 1;

    //add correct classes for different styles
    if ($('input[id="white"]:checked').val()){
        x = x + ' twtwhite ';
    }else if($('input[id="black"]:checked').val()){
        x = x + ' twtblack ';
    }else if($('input[id="minimal"]:checked').val()){
        x = x + ' twtminimal ';
    }

    x = x + '"><div class="twt-header">';
         
    if (icon()){ 
    x = x + '<div class="twt-icon-container hidden"> <img class="twt-icon" src="'+icon()+'"> </div>';
    }
    
    x = x + ' <div class="twt-id"> <span class="twt-name"> '+username()+'</span>';

    if(twturl()){
        x = x + '<span class="twt-handle"> @'+twturl()+'</span>';
    }

    x = x +'<br/></div> </div> <div class="twt-content"><span class="screenreader">Tweet: </span>'+tweet()+'</div>';

    x = images(x,$("#image1").val(),$("#image2").val());

    x = poll(x,$("#poll1").val(),$("#poll2").val(),$("#poll3").val(),$("#poll4").val(),$("#votes").val());

    if ($('input[id="quotetweetopt"]:checked').val()){
        x = quotetweet(x);
    }

    if (time() && date()){
        x = x + '<div class="twt-timestamp"> '+time()+' · '+date()+'</div>';
    }else if(time()){
        x = x + '<div class="twt-timestamp"> '+time()+'</div>';
    }else if(date()){
        x = x + '<div class="twt-timestamp"> '+date()+'</div>';
    }
 
    x = x + '<hr class="twt-sep"><div class="twt-stat">  <p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/replies.png"> '+reply()+'<span class="screenreader"> replies</span></p><p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/retweets.png"> '+retweet()+'<span class="screenreader"> retweets</span></p><p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/likes.png"> '+like()+'<span class="screenreader"> likes</span></p></div></div>';
 
   
        return (x);
}

/*
<div class="twt twtstart twtwhite ">
  <hr class="noworkskin">
  <div class="twt-header">
    <div class="twt-icon-container hidden">
       <img class="twt-icon" src="https://images.squidge.org/images/2023/12/07/stevemc.jpeg"> 
      </div> 
      <div class="twt-id"> <span class="twt-name">NAME<span class="twt-handle"> @URL</span> <br/>
      </div>
    </div> 
    <div class="twt-content"><span class="screenreader">Tweet: </span> TyWEET CONTENT 

        <div class="twt-timestamp"> 03:45 · 2023-12-11</div>
        </div>
<hr class="twt-sep">
<div class="twt-stat"> 
  <p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/replies.png"> '+reply()+'<span class="screenreader"> replies</span></p><p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/retweets.png"> '+retweet()+'<span class="screenreader"> retweets</span></p><p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/likes.png"> '+like()+'<span class="screenreader"> likes</span></p></div></div>

*/

function newreply(previous){
    var x = previous + '<div class="twt ';

    //if this is the first tweet added, add twtstart so it has a top border
    if (childcount == 0){ x = x + 'twtstart '; }
    childcount += 1;

     //add correct classes for different styles
    if ($('input[id="white"]:checked').val()){
        x = x + ' twtwhite ';
    }else if($('input[id="black"]:checked').val()){
        x = x + ' twtblack ';
    }else if($('input[id="minimal"]:checked').val()){
        x = x + ' twtminimal ';
    }

    x = x + ' twt-replybox">';

    if (icon()){
        x = x + '<div class="twt-icon-replycontainer hidden"> <img class="twt-icon" src="'+icon()+'"> </div>';
    }
    x = x + '<div class="twt-replycontainer"><div> <span class="twt-name">'+username()+'</span>';
    
    if(twturl()){
        x = x + '<span class="twt-handle">@'+twturl();
    }

    if (date()){
        x = x + ' · '+date() + '</span>';
    }

    x = x + "</div>";

    if(opurl()){
        x = x + '<div class="twt-replying-to"> Replying to <span class="twt-hl">@'+opurl()+'</span></div>';
    }else if (tweetop){
        x = x + '<div class="twt-replying-to"> Replying to <span class="twt-hl">@'+tweetop+'</span></div>';
    }
    
    x = x + '<div class="twt-replycontent"><span class="screenreader">Reply: </span>'+tweet();

    x = images(x,$("#image1").val(),$("#qalt").val());
    x = poll(x,$("#poll1").val(),$("#poll2").val(),$("#poll3").val(),$("#poll4").val(),$("#votes").val());

    x = x + '<div class="twt-stat">  <p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/replies.png"> '+reply()+'<span class="screenreader"> replies</span></p><p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/retweets.png"> '+retweet()+'<span class="screenreader"> retweets</span></p><p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/likes.png"> '+like()+'<span class="screenreader"> likes</span></p></div></div></div>';
    
    return(x);

}
/*
<div class="twt twtwhite twt-replybox">

  <div class="twt-icon-replycontainer">
  <img class="twt-icon" src="https://images.squidge.org/images/2023/12/07/alexminecraftface.png">
  </div><div class="twt-replycontainer">
      <div><span class="twt-name">replyNAME</span><span class="twt-handle"> @replyURL · 2023-11-27</span>
  </div>
  <div class="twt-replying-to"> Replying to <span class="twt-hl">@opURL</span></div>
  
  <div class="twt-replycontent"><span class="screenreader">Reply: </span> REPLY TWEET



  </div> 
  <div class="twt-stat"> 
    <p><img class="twt-socialimg hidden" src="https://images.squidge.org/images/2023/12/09/replies.png"> 234<span class="screenreader"> replies</span></p>
    <p><img class="twt-socialimg" src="https://images.squidge.org/images/2023/12/09/retweets.png"> 324K<span class="screenreader"> retweets</span></p>
     <p><img class="twt-socialimg" src="https://images.squidge.org/images/2023/12/09/likes.png"> 234K<span class="screenreader"> likes</span></p>
  </div> 
</div> 
</div>
<br>
*/


//functions using jquery that generate the HTML to be used in the page and also put in the textbox

$(function() {
    $('#add').on('click', function() {
        var x;
        if ( $("#twttype").val() == 'Reply to tweet'){
            x = newreply(prev);
        }else{
        x = newtweet(prev);
        }

        $('#twtdiv').html(x);

        //now erase all that is needed
        $('#tweet').val('');
        $('#reply').val('');
        $('#retweet').val('');
        $('#like').val('');
        $('#image1').val('');
        $('#image2').val('');
        $('#poll1').val('');
        $('#poll2').val('');
        $('#poll3').val('');
        $('#poll4').val('');
        $('#votes').val('');

        //now for qtweet erasing
        $('#qicon').val('');
        $('#qusername').val('');
        $('#qtwturl').val('');
        $('#qtweet').val('');
        $('#qtweet').val('');
        $('#qimage1').val('');
        $('#qimage2').val('');
        $('#qdate').val('');
        $('#qpoll1').val('');
        $('#qpoll2').val('');
        $('#qpoll3').val('');
        $('#qpoll4').val('');
        $('#qvotes').val('');

        prev = x;
    });
    
    $('#generateHTML').on('click', function() {
        $('#textoutput').text(prev);
    });

//opens up options for extra features
    $("#image").on("click", function() {
        $("#imageURLs").toggle();//reveals images
    });

    $("#poll").on("click", function() {
        $("#polloptions").toggle();//reveals polls
    });

    $("#quotetweetopt").on("click", function() {
        $("#quotetweet").toggle();//reveals polls
    });

//opens up options for extra features f quote tweets
    $("#qimage").on("click", function() {
        $("#qimageURLs").toggle();//reveals images
    });

    $("#qpoll").on("click", function() {
        $("#qpolloptions").toggle();//reveals polls
    });

    
});