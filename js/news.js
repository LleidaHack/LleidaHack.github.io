$(document).ready(function() {
    // Load navbar
    $("#navbar").load("../shared/navbar.html"); 
    // Load banner
    $("#banner").load("../shared/banner.html", appendImagesToCarousel);
    // Load and append events
    $("#events").load("../news/events.html", appendEventsNews); 
  });
  