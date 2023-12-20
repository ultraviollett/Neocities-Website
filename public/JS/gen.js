 //makes sure all checkboxes are off by default
document.getElementsByTagName('input').checked = "false";

isDisabled = false; //for workskin
$("#disabled-workskin").attr("disabled", "disabled"); //starts off disabled



function disableWorkskin(){
    if (!isDisabled){
        $("#ao3-workskin").attr("disabled", "disabled");
        $("#disabled-workskin").removeAttr("disabled");
        $("#disable-workskin-label").text("Workskin Disabled")
        isDisabled = true;
    }else{
        $("#ao3-workskin").removeAttr("disabled");
        $("#disabled-workskin").attr("disabled", "disabled");
        $("#disable-workskin-label").text("Workskin Enabled")
        isDisabled = false;
    }
}

//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard 
//read above over


$(function() {
    $('#copy-html-button').on('click', function() {
      let tocopy = $("#html-output").val();
      navigator.clipboard.writeText(tocopy);
      $("#copy-html-button").text("Copied!");

  });
  
  $('#copy-css-button').on('click', function() {
    let tocopy = $("#css-to-copy").val();
    navigator.clipboard.writeText(tocopy);
    $("#copy-css-button").text("Copied!");
});

});

