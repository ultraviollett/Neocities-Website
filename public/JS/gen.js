 //makes sure all checkboxes are off by default
document.getElementsByTagName('input').checked = "false";

//add back function that increases textareas vert to fit text
textarea = document.querySelector(".autoresizing");
textarea.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard 
//read above over


$(function() {
    $('#copyHTMLbutton').on('click', function() {
      let tocopy = $("#HTMLoutput").val();
      navigator.clipboard.writeText(tocopy);
      $("#copyHTMLbutton").text("Copied!");

  });
  
  $('#copyCSSbutton').on('click', function() {
    let tocopy = $("#CSStocopy").val();
    navigator.clipboard.writeText(tocopy);
    $("#copyCSSbutton").text("Copied!");
});

});

