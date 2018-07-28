// Navbar 
var nav = document.getElementById("special");
var header = document.getElementById('headSec');
var ixs = document.getElementById('ixs');
var jst = document.getElementById('jst');
var count = 1;
nav.addEventListener('click', function () {
    count++;
    if (count % 2 == 0) {
        header.style.height = '100%';
        header.style.backgroundColor = 'black';
        ixs.style.display = 'block';
        jst.style.display = 'none';

    }
    else {
        header.style.height = '100px';
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        ixs.style.display = 'none';
        jst.style.display = 'block';
    }
});

$(function(){
// AOS library

    AOS.init({
        duration: 1000,
      });



    // Counter

$('.count-this').each(function () {
        
         
        
    // Start the counting from a specified number - in this case, 0!
  
    $(this).prop('Counter',0).animate({
  
        Counter: $(this).text()
  
    }, {
  
        // Speed of counter in ms, default animation style
  
        duration: 2000,
  
        // Easing function
  
        easing: 'swing',
  
        step: function (now) {
  
          // Round up the number
  
            $(this).text(Math.ceil(now));
  
        }

    });
  
  });
  if($(window).scrollTop()<500){
    $(".scrolltop").hide()
 }
   
 $(window).scroll(function(){
     if($(this).scrollTop()>500){
        $(".scrolltop").fadeIn(1000);
    } else{
        $(".scrolltop").fadeOut(1000);
    }

 });  
  $(".scrolltop").click(function(){
      $("html, body").animate({scrollTop: 0},2000);
      return false;
  });






});