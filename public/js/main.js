


function switchDarkLight(isDark = false){
    //checks if website is in dark or light mode, used for both manual check and browser default
    if (isDark) {
        $("html").addClass("dark");
        $('#dark-mode').prop( "checked", true );
        $("#dark-mode-label").text("Dark Mode");


        
        
    }else{
        $("html").removeClass("dark");

        $('#dark-mode').prop( "checked", false );
        $("#dark-mode-label").text("Light Mode");

    }

}






$( function() {


    switchDarkLight(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    $('#dark-mode').on('click', function() {
        $("#test").html("test");

        switchDarkLight($('input[id="dark-mode"]:checked').val());
    
    });

    $("#workskin-workshop-link").on('click', function() {
        window.location = $(".myBox").data("location");

    });
    

});
