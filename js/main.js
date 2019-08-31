$(document).ready(function() {

  
  // Load navbar
  $("#navbar").load("../shared/navbar.html"); 
  
  // Load banner
  $("#banner").load("../shared/banner.html", appendImagesToCarousel);

  // Load About Us
  $("#about-us").load("../home/about-us.html"); 

  // Load and append members
  $("#members").load("../home/members.html", appendMembers); 

  var media = window.matchMedia("(max-width: 800px)");
  loadEvents(media);
  media.addListener(loadEvents);
  
  // Load the footer
  $("#contact-us").load("/shared/footer.html");
});


function loadEvents(media) {
  if(media.matches){ 
    $("#events").load("../home/events.html", appendEvents("horizontal"));
  }else{
  // Load and append events chang to appendEventsMain when using news page
    $("#events").load("../home/events.html", appendEvents("vertical"));
  }
}