$(document).ready(function () {

    var helmi = document.getElementById("audio_helmi");
    var bluesrocklegends = document.getElementById("audio_bluesrocklegends");
    var bluesbaby = document.getElementById("audio_bluesbaby");

    $("#nappi_helmi").click(function () {

        bluesrocklegends.pause();
        $("#nappi_bluesrocklegends").find('i').attr('class', 'fa fa-play-circle fa-10x');
        bluesbaby.pause();
        $("#nappi_bluesbaby").find('i').attr('class', 'fa fa-play-circle fa-10x');


        helmi.paused ? helmi.play() : helmi.pause();

        //Vaihdetaan kuvake sen mukaan soiko radio vai ei
        if (helmi.play) {
            $(this).find('i').attr('class', 'fa fa-pause-circle fa-10x');
        }
        if (helmi.paused) {
            $(this).find('i').attr('class', 'fa fa-play-circle fa-10x');
        }
    });

    $("#nappi_bluesrocklegends").click(function () {

        bluesbaby.pause();
        $("#nappi_bluesbaby").find('i').attr('class', 'fa fa-play-circle fa-10x');
        helmi.pause();
        $("#nappi_helmi").find('i').attr('class', 'fa fa-play-circle fa-10x');

        bluesrocklegends.paused ? bluesrocklegends.play() : bluesrocklegends.pause();

        if (bluesrocklegends.play) {
            $(this).find('i').attr('class', 'fa fa-pause-circle fa-10x');
        }
        if (bluesrocklegends.paused) {
            $(this).find('i').attr('class', 'fa fa-play-circle fa-10x');
        }
    });

    $("#nappi_bluesbaby").click(function () {

        helmi.pause();
        $("#nappi_helmi").find('i').attr('class', 'fa fa-play-circle fa-10x');
        bluesrocklegends.pause();
        $("#nappi_bluesrocklegends").find('i').attr('class', 'fa fa-play-circle fa-10x');

        bluesbaby.paused ? bluesbaby.play() : bluesbaby.pause();

        if (bluesbaby.play) {
            $(this).find('i').attr('class', 'fa fa-pause-circle fa-10x');
        }
        if (bluesbaby.paused) {
            $(this).find('i').attr('class', 'fa fa-play-circle fa-10x');
        }
    });

    // function kuvakeVaihtuu(mikakanava) {
    //     if(mikakanava.play) {
    //         $(this).find('i').attr('class', 'fa fa-pause-circle fa-10x');
    //     }
    //     if (mikakanava.paused) {
    //         $(this).find('i').attr('class', 'fa fa-play-circle fa-10x');
    //     }
    // }

});