$(document).ready(function(){
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#button_up").fadeIn();
        } else {
            $('#button_up').fadeOut();
        }
    });
});