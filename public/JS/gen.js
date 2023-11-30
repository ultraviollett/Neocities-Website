textarea = document.querySelector("#autoresizing");
textarea.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

function copyText() {
     
    /* Select text area by id*/
    var Text = document.getElementById("textbox");

    /* Select the text inside text area. */
    Text.select();

    /* Copy selected text into clipboard */
    navigator.clipboard.writeText(Text.value);

    /* Set the copied text as text for 
    div with id clipboard */
    document.getElementById("clipboard")
        .innerHTML = Text.value;
}