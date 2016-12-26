$(document).ready(function() {
    
    setInterval ('cursorAnimation()', 1000);
    
    $(".nav li").on("click", function() {
	    $(".nav li").removeClass("active");
	    $(this).addClass("active");
  	});
  
});
    
function cursorAnimation() {
$('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

$('.enter-link').click(function () {
	$(".terminal-container-fluid").css({ 'display' : 'block'});
	$(".projects-container-fluid").css({ 'display' : 'block'});
	$(".skills-container-fluid").css({ 'display' : 'block'});
	$(".footer").css({ 'display' : 'block'});
	$(".social-container-fluid").css({ 'display' : 'block'});
	$("#custom-bootstrap-menu").css({ 'display' : 'block'});
    $(this).parent().parent().parent().parent().parent().fadeOut(800);
});

