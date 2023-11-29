function favTutorial() {  
    var mylist = document.getElementById("myList");  
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
    
    var mcchoice = mylist.options[mylist.selectedIndex].text;
    switch(mcchoice){
        case "Minecraft Button":
        document.getElementById("favourite").value = "button";  
        break;
        case "Minecraft End Poem":
        document.getElementById("favourite").value = "poem";  
        break;
        case "Minecraft Book":
        document.getElementById("favourite").value = "book";  
        break;
    
    
    }

} 

function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
  }


function copyText() {
    // Get the text field
    var copyText = document.getElementById("favourite");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  } 