var prev = ""; //holds entire HTML before next is added
var childCount = 0; //stores the number of tweets, so you know when to add twtstart


$(document).ready(function(){

    $("#op-handle-div").hide();
    $("#quote-tweet-opt").hide();

    $("#image-div").hide();
    $("#poll-div").hide();
    
    
    //for quote tweets

    $("#quote-image-div").hide();
    $("#quote-poll-div").hide();

    const contentDiv = document.getElementById("css-to-copy");

    fetch("CSS/tblr.txt").then(res => {
      if (!res.ok) {
        return "File coudn't be found. Please go to the ao3 page and find the CSS listed there";
      }
      return res.text();
    }).then(text => {
      contentDiv.textContent = text;
    });
  
  
  
});
  



function roundNum(x){
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


function findIcon(iconURLText = ""){
    //gets the url of the chosen icon
    let x = iconURLText;
    return x;
}

function pasteIconURL(idToPaste="", iconChoose=""){
//when an icon is chosen from the dropdown box, it will paste it in the URL input
    let x;

    switch (iconChoose){

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
            break;
        case "X3 face":
            x = "https://images.squidge.org/images/2023/12/09/x3face.png";
            break;

        default:
            x = "";
        }

    idToPaste.value = x;
    
}  


//now onto the even more optional items, ie images and polls

function addSurroundingDiv(x){

    let style = $('input[name="stylename"]:checked').val();


    fullThing = `<div class="twtdiv ${style}"><hr>
${x}
</div> `;
    return fullThing;
/*


<div class="twtdiv twt-light">
    <div class="twt">
    <hr>
        <span class="screenreader">-- Tweet: -- </span>
        <div class="header">
            <div>
            <p><img  src="https://images.squidge.org/images/2023/09/14/00d56b33f5a708454d853fbad6d2e18a.jpeg" 
            width="50" height="50"  class="hidden" hidden alt=""></p>
            </div>
            <div class="name-handle-div">
                <p class="name"><span class="screenreader">Username: </span><b>HelloWorld</b></p>
                <p class="handle"><span class="screenreader">Handle: </span>@twitteruser</p>
            </div>
        </div>
        
        <div class="text">
            <p>Another poll, by itself this time </p>

        
        <table><tr>
            <td class="reply"><p><span class="screenreader">[Replies: </span> 234 <span class="screenreader">]</span></p></td>
            <td class="retweet"><p><span class="screenreader">[Retweets: </span> 32K <span class="screenreader">]</span></p></td>
            <td class="like"><p><span class="screenreader">[Likes: </span> 454M <span class="screenreader">]</span></p></td>
        </tr></table>
        <hr>
        </div>
    </div>
    </div>
    <br>
    <br>


*/
}


//images
function addImages(img="",alt=""){

    alt = alt ? ` alt="${alt}" ` : ""; //adds alt if provided
    const x = `<p class="twt-image"><img width="400" src="${img}"${alt}></p>`;

    return x;


/*
<p class="twt-image">
    <img src= ' https://images.squidge.org/images/2023/09/14/00d56b33f5a708454d853fbad6d2e18a.jpeg' 
    width="400" alt="Hawks from BNHA looking sexy">
    </p>

*/
}

//polls
function addPoll(p1="",p2="",p3="",p4="",votes=""){
    
    p1 = p1 ? `<li><span class="screenreader">Option: </span>${p1}</li>` : "";
    p2 = p2 ? `<li><span class="screenreader">Option: </span>${p2}</li>` : "";
    p3 = p3 ? `<li><span class="screenreader">Option: </span>${p3}</li>` : "";
    p4 = p4 ? `<li><span class="screenreader">Option: </span>${p4}</li>` : "";

    votes = votes ? `<p class="poll-info">${votes} votes</p>` : "";


    const x = `<div class="poll"><p class="screenreader">-- Poll: --</p>
<ul>
${p1}
${p2}
${p3}
${p4}
</ul>
${votes}
</div>`;
    
    return x;

/*
<div class="poll"><p class="screenreader">-- Poll: --</p>
<ul>
<li><span class="screenreader">Option: </span> Hawks</li>
<li><span class="screenreader">Option: </span>Keigo Takami</li>
<li><span class="screenreader">Option: </span>Dabi's summer fling</li>
</ul>
<p class="poll-info">4 votes · 23 hours left</p>
</div>
*/

}

//#quote-tweet
function addQuoteTweet(){

    let x = '<div class="twt-quotebox"><span class="screenreader">Quote Tweet: </span><div class="twt-header"> ';
    
    let iconURLtext = document.getElementById("qicon").value ;

    if(findIcon(iconURLtext)){
        x = x + '<div class="twt-icon-container" hidden> <img class="twt-iconquote" src="'+findIcon(iconURLtext)+'"> </div> ';
    }
    x = x + ' <div class="twt-id twt-quote-id"> <span class="twt-name"> '+$("#quote-username").val()+'</span>';
    

    x = $("#input-handle").val() ? x + '<span class="twt-handle"> @'+$("#input-handle").val() : x;
    
    if($("#quote-date").val()){
        x = x + " · "+ $("#quote-date").val();
    }
    x = x +'</span> </div> </div> <div class="twt-contentquote">'+$("#quote-tweet").val();

    x = x + addImages($("#quote-input-image").val(),$("#quote-alt").val());
    x = x + addPoll($("#quote-poll1").val(),$("#quote-poll2").val(),$("#quote-poll3").val(),$("#quote-poll4").val(),$("#quote-votes").val());
    
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
function addNewTweet(){

    const icon = $("#input-icon").val() ? `
<p>
<img  src="${ $("#input-icon").val() }" 
width="50" class="hidden" hidden alt="">
</p>` : "";

    const handle = $("#input-handle").val() ? `
<p class="handle"><span class="screenreader">Handle: </span>@${ $("#input-handle").val() }</p>` : "";
    
    const dateAndTimeSeparator = $("#input-date").val() && $("#input-time").val() ? " · " : "";
    const dateTime = $("#input-date").val() || $("#input-time").val() ? `
    <div class="timestamp"><p><span class="screenreader">Posted</span>${$("#input-time").val()}${dateAndTimeSeparator}${$("#input-date").val()}</p></div>` : "";

    const poll = $('input[id="show-poll"]:checked').val() ? addPoll( $("#input-poll-1").val(), $("#input-poll-2").val(), $("#input-poll-3").val(), $("#input-poll-4").val(), $("#input-votes").val()) : "";

    const image = $('input[id="show-image"]:checked').val() ? addImages( $("#input-image").val(), $("#input-alt").val() ) : "";

    const text = $("#input-text").val().replace(/\r?\n/g, '<br />');

    const tweet = `
<div class="twt">
<span class="screenreader">-- Tweet: -- </span>
<div class="header">
    <div>${icon}
    </div>
    <div class="name-handle-div">
        <p class="name"><span class="screenreader">Username: </span><b>${$("#input-username").val()}</b></p>${handle}
    </div>
</div>

<div class="text">
    <p>${text}</p>
    ${poll}
    ${image}
    ${dateTime}
</div>

<table><tr>
    <td class="reply"><p><span class="screenreader">[Replies: </span>${$("#input-reply").val()}<span class="screenreader">]</span></p></td>
    <td class="retweet"><p><span class="screenreader">[Retweets: </span>${$("#input-retweet").val()}<span class="screenreader">]</span></p></td>
    <td class="like"><p><span class="screenreader">[Likes: </span>${$("#input-like").val()}<span class="screenreader">]</span></p></td>
</tr></table>
<hr></div>
    `;
        return tweet;
/*
<div class="twt">

    <span class="screenreader">-- Tweet: -- </span>
    <div class="header">
        <div>
        <p><img  src="https://images.squidge.org/images/2023/09/14/00d56b33f5a708454d853fbad6d2e18a.jpeg" 
        width="50" height="50" class="hidden" hidden alt=""></p>
        </div>
        <div class="name-handle-div">
            <p class="name"><span class="screenreader">Username: </span><b>HelloWorld</b></p>
            <p class="handle"><span class="screenreader">Handle: </span>@twitteruser</p>
        </div>
    </div>
    
    <div class="text">
        <p> Wow, what a very nice and accessible workskin. What should I tweet today?
        </p>
        <div class="timestamp"><p><span class="screenreader">Posted</span> 02:00 · 2023-12-16</p></div>
    </div>
    
    <table><tr>
        <td class="reply"><p><span class="screenreader">[Replies: </span> 2 <span class="screenreader">]</span></p></td>
        <td class="retweet"><p><span class="screenreader">[Retweets: </span> 32 <span class="screenreader">]</span></p></td>
        <td class="like"><p><span class="screenreader">[Likes: </span> 45 <span class="screenreader">]</span></p></td>
    </tr></table>
    <hr>
    </div>
*/
}

//compiles new reply
function addNewReply(){
    const icon = $("#input-icon").val() ? `
<p>
<img  src="${ $("#input-icon").val() }" 
width="50" class="hidden" hidden alt="">
</p>` : "";

    const handle = $("#input-handle").val() ? `
<p class="handle"><span class="screenreader">Handle: </span>@${ $("#input-handle").val() }</p>` : "";
    
    const handleAndDateSeparator = handle && $("#input-date").val() ? " · " : "";

    const poll = $('input[id="show-poll"]:checked').val() ? addPoll( $("#input-poll-1").val(), $("#input-poll-2").val(), $("#input-poll-3").val(), $("#input-poll-4").val(), $("#input-votes").val()) : "";

    const image = $('input[id="show-image"]:checked').val() ? addImages( $("#input-image").val(), $("#input-alt").val() ) : "";

    const text = $("#input-text").val().replace(/\r?\n/g, '<br />');

    const tweet = `
<div class="twt reply-twt">
<div class="twt reply-twt">
    <span class="screenreader">-- Reply Tweet: -- </span>
<div class="icon-div">
  ${icon}
</div>

<div class="reply-body">
<div class="header"> 
<p><span class="name"><span class="screenreader">Name: </span><b>steve</b></span><span class="handle"> @${handle} <span class="screenreader">Posted</span> ${handleAndDateSeparator}${ $("#input-date").val()  }</span></p>

</div>
<div class="text">
<p>
${text}
${poll}
${image}
</p>

</div>
<table><tr>
    <td class="reply"><p><span class="screenreader">[Replies: </span>${$("#input-reply").val()}<span class="screenreader">]</span></p></td>
    <td class="retweet"><p><span class="screenreader">[Retweets: </span>${$("#input-retweet").val()}<span class="screenreader">]</span></p></td>
    <td class="like"><p><span class="screenreader">[Likes: </span>${$("#input-like").val()}<span class="screenreader">]</span></p></td>
</tr></table>
</div>
<hr>
</div>
    `;
        return tweet;
/*

    
<div class="twt reply-twt">
    <span class="screenreader">-- Reply Tweet: -- </span>
<div class="icon-div">
    <p><img  src="https://images.squidge.org/images/2023/12/07/stevemc.jpeg" width="50px" class="hidden" hidden alt=""></p>
</div>

<div class="reply-body">
<div class="header"> 
<p><span class="name"><span class="screenreader">Name: </span><b>steve</b></span><span class="handle"> @thefirstmc  · <span class="screenreader">Posted</span> 20h <span class="screenreader">ago</span></span></p>

</div>
<div class="text">
<p>
The reply tweet is seperated into two columns thanks to display: table. The div that holds the icon is set to 
a specified min-width and max-width, and the div that holds the body of the tweet's width is set to 
auto. 
</p><p>
the divider for the regular tweet is a pseudo element of the stats div, and its disabled 
in the reply tweet
</p>

</div>
<table><tr>
    <td class="reply"><p><span class="screenreader">[Replies: </span> 2 <span class="screenreader">]</span></p></td>
    <td class="retweet"><p><span class="screenreader">[Retweets: </span> 32 <span class="screenreader">]</span></p></td>
    <td class="like"><p><span class="screenreader">[Likes: </span> 45 <span class="screenreader">]</span></p></td>
</tr></table>
</div>
<hr>
</div>
*/
}

//functions using jquery that generate the HTML to be used in the page and also put in the textbox
$(function() {

    fetch("CSS/twt.txt").then(res => res.text()).then(text => {
        const contentDiv = document.getElementById("css-to-copy");
        contentDiv.textContent = text;
    });


    $('#add').on('click', function() {

        let x;
        if ( $("#twt-type").val() == 'Tweet'){
            x = $("#input-username").val() && $("#input-text").val() ? addNewTweet() : "";
        }else{
            x = $("#input-username").val() && $("#input-text").val() ? addNewReply() : "";
        }
        x = prev + x;

        fullThing = addSurroundingDiv(x);
        $('#output-div').html(fullThing);
        $('#html-output').text(fullThing);

        //now erase all that is needed
        $('#input-text').val('');


        prev = x;
    });

    $('#twt-type').on('change', function() {
        if( $("#twt-type").val() == "Tweet"){
            $("#op-handle-div").slideUp();
            $("#input-time").slideDown();
        }else{
            $("#op-handle-div").slideDown();
            $("#input-time").slideUp();
        }
    });
//opens up options for extra features
    $("#show-image").on("click", function() {
        if( $('input[id="show-image"]:checked').val() ){
            $("#image-div").slideDown();
        }else{
            $("#image-div").slideUp();
        }
    });

    

    $("#show-poll").on("click", function() {
        if( $('input[id="show-poll"]:checked').val() ){
            $("#poll-div").slideDown();
        }else{
            $("#poll-div").slideUp();
        }
    });

    $("#show-quote").on("click", function() {
        if( $('input[id="show-quote"]:checked').val() ){
            $("#quote-tweet-opt").slideDown();
        }else{
            $("#quote-tweet-opt").slideUp();
        }
    });

//opens up options for extra features f quote tweets
    $("#show-quote-image").on("click", function() {
    if( $('input[id="show-quote-image"]:checked').val() ){
        $("#quote-image-div").slideDown();
    }else{
        $("#quote-image-div").slideUp();
        }
    });

    $("#show-quote-poll").on("click", function() {
        if( $('input[id="show-quote-poll"]:checked').val() ){
            $("#quote-poll-div").slideDown();
        }else{
            $("#quote-poll-div").slideUp();
        }
    });


});