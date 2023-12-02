function icon(){
    var icon = document.getElementById("icon").value;
    return icon;
}

function username(){
    var username = document.getElementById("username").value;
    return username;
}

function twturl(){
    var twturl = document.getElementById("twturl").value;
    return twturl;
}

function tweet(){
    var tweet = document.getElementById("tweet").value;
    return tweet;
}

function add(username,twturl,tweet){
  $('.twtdiv').html("<img src=\"bigriker.jpg\">");
}

$(function() {
    $('.add').on('click', function() {
        $('.twtdiv').html("hey");
    });
});
