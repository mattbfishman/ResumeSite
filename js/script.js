$(document).ready(function() {
    
    setInterval ('cursorAnimation()', 1000);
});
    
function cursorAnimation() {
$('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

// $('.enter-link').click(function () {
//     $(this).parent().parent().parent().parent().parent().fadeOut(800);
// });

