// TODO: Which element is the following line of code selecting?
var carousel = document.querySelector(".carouselbox"); // div class carouselbox
// TODO: Which element is the following line of code selecting?
var next = carousel.querySelector(".next"); // button(next) class inside carouselbox
var prev = carousel.querySelector(".prev"); // button(prev) class inside carouselbox
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/id/10/300/200",
  "https://picsum.photos/id/20/300/201",
  "https://picsum.photos/id/30/300/202",
  "https://picsum.photos/id/47/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
carousel.addEventListener("click", function() {
  window.location.href = images[index]; //sets the image to the first index number
});

// TODO: Describe the functionality of the following event listener.
next.addEventListener("click", function(event) { //changes image to the next image when clicked
  // TODO: What is the purpose of the following line of code?
  event.stopPropagation(); // stops the image from opening to the whole page

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function(event) { // changes image to the prev image when clicked
    // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation(); // the whole page would become the image

  navigate(-1);
});

navigate(0);
