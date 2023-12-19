document.getElementById("unfinished").style.display = "none";

function showUnfinished(){
    if($('input[id="show-unfinished"]:checked').val()){
            document.getElementById("unfinished").style.display = "";
    }else{
        document.getElementById("unfinished").style.display = "none";
    }
}