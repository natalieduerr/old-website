$(document).ready(function() {
    
    ///////////// BACKGROUND DRAW GAME
    // initial state of website is view
    // switch to play on click of button
    var state = "view"; 

    // initial size of the circles, shrinks and grews based on +/- keys
    var size = 100;

    // initial mouse coordinate values
    var xVal = 0;
    var yVal = 0;

    // captures initial width of the screen
    const screenWidth = $(document).width();

    // captures initial height of the screen
    const screenHeight = $(document).height();


    // start game
    // - move the home content up and away
    // - bring up the instructions and view button
    // - add circle that follows the mouse
    // - switch the state to play
    function startGame(){
        $('.home').css({'margin-top': '-110vh'});
        instruct();
        $( "<div class = 'follow-circle' style = 'width: " + size + "px; height: " + size + "px;'></div>" ).appendTo( '.back' );
        state = "play";
    }
    // end game 
    // - move the home content back on screen
    // - disappear the instructions
    // - disappear the view button
    // - disappear the circle that follows the mouse
    // - disappear the instructions
    // - switch the state to view
    function endGame() {
        $('.home').css({'margin-top': '0px'});
        disappear('.instructions');
        hide('.view-button');
        disappear('.follow-circle');
        disappear('.instructions');
        state = "view";
    }

    // When play button is clicked...
    $('.game-click').click(function () {
        // if the state was view -> start game

        if (state == "view"){
            startGame();
        }
        // if the state was play -> end game
        else if (state == "play"){
            endGame();
        }
    });

    $('.game-click').keydown(function (e) {
            //creates local keycode variable
            var keyCode = e.which;

            if (keyCode == 13){
                if (state=="view") {
                    startGame();
                }
                else if (state=="play") {
                    endGame();
                }
            }

    });

    function instruct() {
        // make the circles go away, brings the instructions up,
        // and changes the button content to be View
        $('.instructions').css({'opacity': '1', 'display': 'inherit'});
        $('.view-button').css({'opacity':'1', 'transition': '.4s'});
    }

    //given an element, makes the opacity 0
    function hide(element) {
        $(element).css({'opacity': '0'});
    }

    // given an element, make the display none
    function disappear(element){
        $(element).css({'display':'none'});
    }

    // adds new circle to the background element
    function letsDraw(){
        $( "<div class = 'new-circles'" + whereTo() + "></div>" ).appendTo( '.back' );
    }

    // places circle at the given xVal and yVal by updating the CSS for .follow-circle
    function placeCircle(xVal, yVal) {
        $('.follow-circle').css({
            left:xVal,
            top:yVal
        });
    }

    // updates the xVal and yVal based on mouse coordinates
    // offset by the size of the circle so it is placed in the middle of the mouse
    $(document).on("mousemove", function(event) {
        xVal = event.pageX - size/2;
        yVal = event.pageY - size/2;

        placeCircle(xVal,yVal);

    });

    // adds styling to the letsDraw circle element to place the circle with xVal and yVal
    // also adds size 
    function whereTo(){
        return "style = 'width: " + size + "px; height: " + size + "px; top:" + yVal + "px; left:" + xVal + "px;'";
    }

    // when the background is click, start drawing
    $('.back').click(function () {
        if (state == "play"){
            letsDraw();
            console.log("background clicked");
        }
    })

    // when + or - key is pressed during play state, update the size of the circle
    $(document).keydown(function(e) {
        //creates local keycode variable
        var keyCode = e.which;

         if (state == "play") {
            if (keyCode == 187) { //if + key
                size+=50;
            }
            if (keyCode == 189 && size!=50) { //if - key and size isnt 0
                size-=50;
            }
            if (keyCode == 37 && xVal > 0) { //if left arrow and on screen
                xVal-=50;
                placeCircle(xVal,yVal);
            }
            if (keyCode ==  38 && yVal > 0) { //if up arrow and on screen
                yVal-=50;
                placeCircle(xVal,yVal);
            }
            if (keyCode == 39 && xVal < (screenWidth-size) ) { //if right arrow and on screen
                xVal+=50;
                placeCircle(xVal,yVal);
            }
            if (keyCode == 40 && yVal < (screenHeight-size)) { //if down arrow and on screen
                yVal+=50;
                placeCircle(xVal,yVal);
            }
            if (keyCode == 80) {
                letsDraw();
            }
        }

        //changes the follow-circle's width and height
        $('.follow-circle').css({
            width: size,
            height: size
        });
      });
        
});
