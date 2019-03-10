$(document).ready(function() {
  // Load navbar
  $("#navbar").load("../home/navbar.html"); 
  
  // Load about us
  $("#about-us").load("../home/about-us.html"); 

  // Load and append members
  $("#members").load("../home/members.html"); 
  appendMembers();

  // Load and append events
  $("#events").load("../home/events.html"); 
  appendEvents();
});