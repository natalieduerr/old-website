// TODO
// - Keep letters skewed post hover

$(document).ready(function() {

    // Variables to find my name (H1) and get the string value
    var name = document.querySelector('h1');
    var nameString = name.innerHTML;
    var nameStringArray = nameString.split('');

    for(i=0; i < nameStringArray.length; i++) {
        var letter = nameStringArray[i];
        var newH1 = document.createElement('h1')
        newH1.innerHTML = letter;
        newH1.className = "name-letter-style";

        $('.name-letters').append(newH1);
    }

    $('.name-letter-style').hover(
        function() {
            console.log("hovering");
          $( this ).css('transform', 'skew(-12deg) rotate(20deg)');
        }, function() {
          $( this ).css('transform', 'skew(-12deg) rotate(0deg)');
        }
      );
});
