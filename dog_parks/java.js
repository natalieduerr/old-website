// $(document).ready(function(){
// 	 $(".hamburger img").click(function(){
// 		 $(".hamburger-links").slideToggle("fast");
// 		 	 });

//   })

$(document).ready(function() {
	 $(".hamburger img").click(function(){
		 $(".hamburger-links").slideToggle("fast");
		 	 });

  var degrees = 0;
  $('.hamburger img').click(function rotateMe(e) {

    degrees += 90;

    //$('.img').addClass('rotated'); // for one time rotation

    $('.hamburger img').css({

      'transform': 'rotate(' + degrees + 'deg)',
      '-ms-transform': 'rotate(' + degrees + 'deg)',
      '-moz-transform': 'rotate(' + degrees + 'deg)',
      '-webkit-transform': 'rotate(' + degrees + 'deg)',
      '-o-transform': 'rotate(' + degrees + 'deg)'
    });

  })




});


