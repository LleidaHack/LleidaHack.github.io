/**
 * Convert a member formated in JSON to HTML
 * @param {object} member Object containing member info
 * @returns {string} Html string
 */
function memberToHtml(member) {
  const role = member.status || "";

  return `
    <div class="p-4 col-lg-3 col-md-3 col-sm-6 col-6">
    <div class="team-member">
      <figure>
        <img src="${member.image}" width="20" class="img-responsive">
      </figure>
      <h4>${member.name}</h4>
      <p>${role}</p>
    </div>
    </div>`;
}

/**
 * Loads members from data/members.json, convert them into html format 
 * and append them to the document
 */
function appendMembers() {
  var count = 0;
  var rowCount=0;
  $.getJSON("../data/members.json", function(members) {
    // Convert members to HTML
    const membersHtml = members.members.map(memberToHtml); 

    // Append members to document
    for(i=1; i<membersHtml.length/4; i++) {
      var rowMemberContainer = $.parseHTML(`<div class="members-container-${i} row justify-content-md-center"></div>`);
      $("#pre-events-container").append(rowMemberContainer);
    }
    membersHtml.forEach(function(element, index) {
      var num = Math.ceil((index+1)/4);
      var membersContainer = ('.members-container-'.concat(num));
      $(membersContainer).append(element);
    });
  });
}