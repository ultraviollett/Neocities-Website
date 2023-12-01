textarea = document.querySelector("#autoresizing");
textarea.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}
//https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard 
//read above over

const btn_copy = document.getElementById('copy')
const txt_data = document.getElementById('data')copy.onclick = () => {
  const value = txt_data.value
  navigator.clipboard.writeText(value)
}