document.getElementById("imageURLs").style.display = "none";
document.getElementById("polloptions").style.display = "none";
document.getElementById("replynotweet").style.display = "none";

//for quote tweets
document.getElementById("quotetweet").style.display = "none";
document.getElementById("qimageURLs").style.display = "none";
document.getElementById("qpolloptions").style.display = "none";

var prev = " "; //holds entire HTML before next is added
var childcount = 0; //stores the number of tweets, so you know when to add twtstart
var tweetop = ""; //records the name of the original poster for replies

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
    if (!tweetop && $("#twttype").val() == 'Reply to tweet'){
        document.getElementById("replynotweet").style.display = "";
    }else{
        document.getElementById("replynotweet").style.display = "none"
    }

    if($("#twttype").val() == 'Reply to tweet'){
        document.getElementById("time").style.display = "none"
    }else{
        document.getElementById("time").style.display = "";
    }
}

//get data from inputs, return text needed for tweet

function opurl(){
    let x = document.getElementById("opurl").value;
    return x;
}

function icon(){
    let x = document.getElementById("icon").value;
    //src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Majedul.jpg" //indian guy staring
    return x;
}

function username(){
    let x = document.getElementById("username").value;
    return x;
}

function twturl(){
    let x = document.getElementById("twturl").value;
    if($("#twttype").val() == 'Tweet'){
        tweetop = x;
    }

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

function images(x){
    if($("#image1").val() && $("#image2").val()){ 
        //if there are two images
        x = x + '<div class="twt-image imagesmulti"> <div style = "background-image: url(';
        x = x + " ' "+$("#image1").val()+"'";
        x = x + ')"></div><div style = "background-image: url('
        x = x + " ' "+$("#image2").val()+"'";
        x = x + ')"></div> </div> '; 

    }else if($("#image1").val()){
        //if only one image is there
        x = x + '<div class="twt-image"> <div style = "background-image: url(';
        x = x + " ' "+$("#image1").val()+"'";
        x = x + ')"></div></div>';
    }
    return x
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
    x = x + '<div class="twt-icon-container"> <img class="twt-icon" src="'+icon()+'"> </div>';
    }
    
    x = x + ' <div class="twt-id"> <span class="twt-name"> '+username()+'</span> <br/> <span class="twt-handle">@'+twturl()+'</span> </div> </div> <div class="twt-content"> '+tweet()+' </div>';

    x = images(x);

    //if ($('input[id="quotetweetopt"]:checked').val()){
      //  x = x + "WQUOTE";
    //}

    if (time() && date()){
        x = x + '<div class="twt-timestamp"> '+time()+' · '+date()+'</div>';
    }else if(time()){
        x = x + '<div class="twt-timestamp"> '+time()+'</div>';
    }else if(date()){
        x = x + '<div class="twt-timestamp"> '+date()+'</div>';
    }
 
    x = x + '<hr class="twt-sep"> <div class="twt-stat1"> <img class="twt-socialimg" src="https://i.imgur.com/dJg9v1v.png"> <strong>'+reply()+'</strong></p><p> <img class="twt-socialimg" src="https://i.imgur.com/dJg9v1v.png"> <strong>'+retweet()+' </strong> </p><p><strong> <img class="twt-socialimg" src="https://i.imgur.com/eM56CN2.png">   '+like()+'</strong> </p><p><span class="twtsharebutton">↥</span> </p> </div> </div>';
 
   
        return (x);
}

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

    x = x + '"> <div class="twt-replybox">';

    if (icon() != ""){
        x = x + '<div class="twt-icon-replycontainer"> <img class="twt-icon" src="'+icon()+'"> </div>';
    }
    x = x + '<div class="twt-replycontainer"> <span class="twt-name">'+username()+'</span> <span class="twt-handle">@'+twturl();

    if (date()){
        x = x + ' · '+date() + '</span>';
    }

    if(tweetop){
        x = x + '<span class="twt-handle"> Replying to</span> <span class="twt-hl">@'+tweetop+'</span>';
    }else if(opurl()){
        x = x + '<span class="twt-handle"> Replying to</span> <span class="twt-hl">@'+opurl()+'</span>';
    }
    
    x = x + '<div class="twt-replycontent">'+tweet()+'</div>';

    x = images(x);

    x = x + '<div class="twt-social"><img class="twt-socialimg" src="https://i.imgur.com/dJg9v1v.png">'+reply()+'</div>';
    x = x + '<div class="twt-social"><img class="twt-socialimg" src="https://i.imgur.com/UeOnwXk.png">'+retweet()+'</div>';
    x = x + '<div class="twt-social"><img class="twt-socialimg" src="https://i.imgur.com/eM56CN2.png">'+like()+'</div> </div> </div> </div>';

    return(x);

}


function quotetweet(){

    x = x + '<div class="twt-quotebox"> <div class="twt-header"> ';
    if(qicon()){
        x = x + '<div class="twt-icon-container"> <img class="twt-iconquote" src="'+qicon()+'"> </div> ';
    }
    x = x + ' <div class="twt-id"> <span class="twt-name"> '+qusername()+'</span> <br/> <span class="twt-handle">@'+twturl();

    if(qdate()){
        x = x + " · "+ qdate();
    }
    x = x +'</span> </div> </div> <div class="twt-contentquote"> '+qtweet()+' </div></div>';
/* 
    <div class="twt-quotebox"> <div class="twt-header"> 
    <div class="twt-icon-container"> <img class="twt-iconquote" src="'+icon()+'"> </div>

<div class="twt-id">
<span class="twt-name">barry</span> 
<span class="twt-handle">@donkey · Sept 5</span>
            </div>
        </div>
        
        <div class="twt-contentquote">i'm donkey!</div>
    
    </div>
    
    <div class="twt-timestamp">8:14 AM · Oct 2, 2020</div>
    
    <hr class="twt-sep"><div class="twt-stat1"><strong>23.3K
    </strong> Retweets &nbsp;&nbsp; <strong>924</strong> 
    Quote Tweets &nbsp;&nbsp; <strong>72.1K</strong> Likes
    </div>    
    
*/
}

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