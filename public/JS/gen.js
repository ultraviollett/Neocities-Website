 //makes sure all checkboxes are off by default
document.getElementsByTagName('input').checked = "false";

//add back function that increases textareas vert to fit text

//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard 
//read above over
$(function() {
    $('#copybutton').on('click', function() {
      tocopy = $("#HTMLoutput").val()
      navigator.clipboard.writeText(tocopy);
      $("#copybutton").text("Copied!");
  });
  
});

