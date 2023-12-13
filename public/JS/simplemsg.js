var prev = ""; //holds code (minus surrounding div) to be added to

function addSurroundingDiv(x){
    //adds div that wraps around the message.
    x = '<div class="textdiv">'+x+'</div>';
    return x;
}

function addNewMessage(x){
    //adds new message
    let leftOrRight = "left"; //default is to the left
    if( $('input[id="rightchoose"]:checked').val() ){ 
        //check if right radio is checked
        leftOrRight = "right";
    }
    let msgText = $("#msgtext").val();
    x = x + '<p class="'+leftOrRight+'" align="'+leftOrRight+'">'+msgText+"</p>";
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
