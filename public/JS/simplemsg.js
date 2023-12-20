var prev = ""; //holds code (minus surrounding div) to be added to

function addSurroundingDiv(x){
    //adds div that wraps around the message.
x = `<p class="screenreader">-- Text Messages: --</p>
<div class="simplemsg">
<hr>${x}<hr>
</div>`;
    return x;
}

function addNewMessage(x){
    //adds new message
    let leftOrRight = "left"; //default is to the left
    if( $('input[id="rightchoose"]:checked').val() ){ 
        //check if right radio is checked
        leftOrRight = "right";
    }
    const inputText = $("#input-text").val();

x =  `${x}
<p class = "${leftOrRight} " align = "${leftOrRight}">
<span class="screenreader"> ${leftOrRight} text: </span>
${inputText}
</p>`;
    return x;
}

$(function() {
    fetch("CSS/simplemsg.txt").then(res => res.text()).then(text => {
        const contentDiv = document.getElementById("CSS-to-copy");
        if(contentDiv){
            contentDiv.textContent = text;
        }else{

        }
        
      });

    $('#add').on('click', function() {
        //compiles the whole code together as is currently
        
        let x = addNewMessage(prev);

        prev = x;

        x = addSurroundingDiv(x);

        $('#output-div').html(x);
        $('#html-output').text(x);
    });
});
