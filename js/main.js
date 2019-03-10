$(document).ready(function() {
  // Load navbar
  $("#navbar").load("../home/navbar.html"); 
  
  // Load and append members
  $("#members").load("../home/members.html"); 
  appendMembers();

});