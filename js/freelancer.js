// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 600) {
        $("#menu").addClass("active");
    } else {
        $("#menu").removeClass("active");
    }

});


//Menu
$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});