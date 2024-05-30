// These F() open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// closes the form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// This F() displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This F() changes the slide when the left or right arrows are clicked on
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This F() changes the displayed slide when a dot is clicked on by user
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// This F() displays the slide a user selects by clicking on dots or next and prev buttons or the default slide upon page load
function showSlides(n) {

    // This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var slides = document.getElementsByClassName("mySlides"); 
    // This takes all elements with the class name "dot" and stores them in the variable array "dots"
    var dots = document.getElementsByClassName("dot"); 
    
    // If n (argument passed) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n > slides.length) {slideIndex = 1}; 
    // If n (argument passed) is less than 1, te slideIndex is set to the length of the array "slides"
    if (n < 1) {slideIndex = slides.length}; 
    
    // This for loop takes each item in the array "slides" and sets the display to none
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); 
    }
   
    // This displays the image in the slideshow
    slides[slideIndex - 1].style.display = "block"; 
    // This adds the active styling to the dot associated with the image
    dots[slideIndex - 1].className += " active"; 
}

// This code will create close the contact form when the user clicks off of it
// The first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    // Here we state that if the click happens on the cancel button or anywhere that is not the contact form and the click does not happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".pop-up-button") && !event.target.closest(".contact")){
        closeForm()
 }
}, false )