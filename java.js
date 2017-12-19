	  var slideIndex = 1;
	  var slideIndex2 = 1;
	  var slideIndex3 = 1

	  showDivs(slideIndex);
	  showDivs2(slideIndex2);
	  showsDivs3(slideIndex3);

	function plusDivs(n) {
	  showDivs(slideIndex += n);
	}

	function plusDivs2(n2) {
		showDivs2(slideIndex2 += n2)
	}

	function plusDivs3(n3) {
		showDivs3(slideIndex3 += n3)
	}

	function currentDiv(n) {
	  showDivs(slideIndex = n);
	}

	function currentDiv2(n2) {
	  showDivs2(slideIndex2 = n2);
	}

	function currentDiv3(n3) {
	  showDivs3(slideIndex3 = n3);
	}

	function showDivs(n) {

	  var i;
	  var x = document.getElementsByClassName("mySlides");

	  var dots = document.getElementsByClassName("demo");
	  if (n > x.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = x.length}
	  for (i = 0 ; i < x.length; i++) {
	     x[i].style.display = "none";
	  }
	  x[slideIndex-1].style.display = "block";
	  console.log(slideIndex);

	}

	function showDivs2(n2) {
	  var i;
	  var x = document.getElementsByClassName("mySlides2");

	  var dots = document.getElementsByClassName("demo2");
	  if (n2 > x.length) {slideIndex2 = 1}
	  if (n2 < 1) {slideIndex2 = x.length}
	  for (i = 0 ; i < x.length; i++) {
	     x[i].style.display = "none";
	  }
	  x[slideIndex2-1].style.display = "block";
	  console.log(slideIndex2);
	}

	function showDivs3(n3) {
	  var i;
	  var x = document.getElementsByClassName("mySlides3");

	  var dots = document.getElementsByClassName("demo3");
	  if (n3 > x.length) {slideIndex3 = 1}
	  if (n3 < 1) {slideIndex3 = x.length}
	  for (i = 0 ; i < x.length; i++) {
	     x[i].style.display = "none";
	  }
	  x[slideIndex3-1].style.display = "block";
	  console.log(slideIndex3);
	}