$(document).ready(function() {
  // Load navbar
  $("#navbar").load("../shared/navbar.html"); 
  
  // Load banner
  $("#banner").load("../shared/banner.html", appendImagesToCarousel);

  // Load About Us
  $("#about-us").load("../home/about-us.html"); 

  // Load and append members
  $("#members").load("../home/members.html", appendMembers); 

  // Load and append events
  $("#events").load("../home/events.html", appendEventsMain); 
});
