function start() {
  document.querySelector(".home").addEventListener("click", function() {
    changeSlide("home");
  });
  document.querySelector(".about").addEventListener("click", function () {
    changeSlide("about");
  });
  document.querySelector(".portfolio").addEventListener("click", function () {
    changeSlide("portfolio");
  });
  document.querySelector(".contact").addEventListener("click", function () {
    changeSlide("contact");
  });

  this.slideIndex = "home";
  changeSlide(slideIndex);  
}

function changeSlide(n) {
  showSlides(slideIndex = n);  
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");    
 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 
  document.getElementById(n).style.display = "inline-block";
  this.backgroundChange = document.querySelector(".header");
  
  if (n != "home") {
    this.backgroundChange.style = 'background-image: url("assets/images/bg.png")!important';
  } else {
    this.backgroundChange.style = 'background-image: url("assets/images/me.png")!important';
  }
}

start();