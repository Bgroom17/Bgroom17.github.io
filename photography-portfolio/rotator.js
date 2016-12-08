/*
 * This script will create a carousel to rotate a series of images,
 * their alt values and captions in a web page.
 */

// Stores the two HTML elements to be worked with into
// JavaScript variables
var mainImage = document.getElementById("mainImage");
var mainImageCaption = document.getElementById("mainImageCaption");

// Two arrays for storing images and description text
var imageArray = ["/photography-portfolio/images/home/waterfall.jpg", "/photography-portfolio/images/home/stan.jpg", "/photography-portfolio/images/home/skull.jpg", "/photography-portfolio/images/home/flower.jpg", "/photography-portfolio/images/home/flower-close.jpg","/photography-portfolio/images/home/cart.jpg","/photography-portfolio/images/home/bridge.jpg","/photography-portfolio/images/home/beckam.jpg"
                  
                 ];

var captionArray = ["Waterfall at the BYU-Idaho Gardens", "Cowboy at Bannack Ghost Town", "Cow skull found in Bannack Ghost Town", "Flower", "Micro shot of a flower","Hand cart found at Bannack Ghost Town", "Bridge found at Bannack Ghost Town", "My adorable nephew!"];

// Variables to indicate which items in the arrays to start with
var imageIndex = 1;
var captionIndex = 1;

// The function to change the html markup with the items in the arrays
function changeImage() {
 mainImage.setAttribute("src", imageArray[imageIndex]);
 mainImage.setAttribute("alt", captionArray[captionIndex]);
 mainImageCaption.innerHTML = captionArray[captionIndex];
 imageIndex++;
 captionIndex++;
 if (imageIndex >= imageArray.length) {
  imageIndex = 0;
  captionIndex = 0;
 }
}

// 1000 milliseconds = 1 second
// Rotate the image using the function every 5 seconds
var rotateAction = setInterval(changeImage, 5000);

// clearInterval stops the rotation from happening
mainImage.onmouseover = function () {
 clearInterval(rotateAction);
};

// restarts the rotation from where it was previously
mainImage.onmouseout = function () {
 rotateAction = setInterval(changeImage, 5000);
};

