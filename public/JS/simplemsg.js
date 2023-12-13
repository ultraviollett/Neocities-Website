var prev = "";

function addSurroundingDiv(x){
    x = '<div class="textdiv>"'+x+'</div>';
    return x;
}

function addNewMessage(x){
    let leftOrRight = "left";
    if( $('input[id="rightchoose"]:checked').val() ){
        leftOrRight = "right";
    }
    let msgText = $("#msgtext").val();
    x = x + '<div class="'+leftOrRight+' texting" align="'+leftOrRight+'">'+msgText+"</div>";
    return x;
}

$(function() {

    $('#add').on('click', function() {
        //compiles the whole code together as is currently
        
        let x = addNewMessage(prev);

        prev = x;

        x = addSurroundingDiv(x);

        $('#outputdiv').html(x);
    });

    $('#generateHTML').on('click', function() {
        //generates the html as text to be copied
        let x;
        x = addSurroundingDiv(prev);

        $('#HTMLoutput').text(x);
    
    });


});
