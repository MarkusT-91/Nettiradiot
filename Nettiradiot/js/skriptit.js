$(document).ready(function(){

    var helmi = document.getElementById("audio_helmi");
    var bluesrocklegends = document.getElementById("audio_bluesrocklegends");
    var bluesbaby = document.getElementById("audio_bluesbaby");

    $("#nappi_helmi").click(function(){
        
        bluesrocklegends.pause();
        $("#nappikuva_bluesrocklegends").attr("src","img/play.svg");
        bluesbaby.pause();
        $("#nappikuva_bluesbaby").attr("src","img/play.svg");


        helmi.paused ? helmi.play() : helmi.pause();

        if(helmi.play) {
            $("#nappikuva_helmi").attr("src","img/pause.svg");
        }
        if (helmi.paused) {
            $("#nappikuva_helmi").attr("src","img/play.svg");
        }
    });

    $("#nappi_bluesrocklegends").click(function(){
        
        bluesbaby.pause();
        $("#nappikuva_bluesbaby").attr("src","img/play.svg");
        helmi.pause();
        $("#nappikuva_helmi").attr("src","img/play.svg");

        bluesrocklegends.paused ? bluesrocklegends.play() : bluesrocklegends.pause();

        if(bluesrocklegends.play) {
            $("#nappikuva_bluesrocklegends").attr("src","img/pause.svg");
        }
        if (bluesrocklegends.paused) {           
            $("#nappikuva_bluesrocklegends").attr("src","img/play.svg");
        }
    });

    $("#nappi_bluesbaby").click(function(){
        
        helmi.pause();
        $("#nappikuva_helmi").attr("src","img/play.svg");
        bluesrocklegends.pause();
        $("#nappikuva_bluesrocklegends").attr("src","img/play.svg");

        bluesbaby.paused ? bluesbaby.play() : bluesbaby.pause();

        if(bluesbaby.play) {
            $("#nappikuva_bluesbaby").attr("src","img/pause.svg");
        }
        if (bluesbaby.paused) {
            $("#nappikuva_bluesbaby").attr("src","img/play.svg");
        }
    });

});