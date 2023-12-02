var prev=""; //holds entire HTML before next is added
var childcount = 0; //stores the number of tweets, so I know when to add twtstart and twtend
var style = ""; //can be default, white, black, or minimal


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


//get data from inputs, return text needed for tweet

function icon(){
    let x = document.getElementById("icon").value;
    return x;
}

function username(){
    let x = document.getElementById("username").value;
    return x;
}

function twturl(){
    let x = document.getElementById("twturl").value;
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

//function to compile the entire twt

function fullthing(previous){
    //add starting div
   
    var x = previous + '<div class="twt ';
    if (childcount == 0){ x = x + 'twtstart ' }
    childcount += 1;

    x = x + '"><div class="twt-header"> <div class="twt-icon-container"> <img class="twt-icon" src="'+icon()+'"> </div> <div class="twt-id"> <span class="twt-name">'+username()+'</span> <br/> <span class="twt-handle">@'+twturl()+'</span> </div> </div>';
    x = x + '<div class="twt-content"> '+tweet()+' </div>';

    if (time() && date()){
        x = x + '<div class="twt-timestamp"> '+time()+' · '+date()+'</div>';
    }else if(time()){
        x = x + '<div class="twt-timestamp"> '+time()+'</div>';
    }else if(date()){
        x = x + '<div class="twt-timestamp"> '+date()+'</div>';
    }

    x = x + '<hr class="twt-sep"> <div class="twt-stat1"> 🗨   <strong>'+reply()+'</strong></p><p> ⮂   <strong>'+retweet()+' </strong> </p><p><strong> ♥   '+like()+'</strong> </p><p><span class="twtsharebutton">↥</span> </p> </div></div>';
    return (x);
}

//functions using jquery that generate the HTML to be used in the page and also put in the textbox

$(function() {
    $('#add').on('click', function() {
        $(".twt").remove();
        let x = fullthing(prev);
        $('#twtdiv').html(x);
        prev = x;
    });
    
    $('#generateHTML').on('click', function() {
        $('#textoutput').text(prev);
    });

});