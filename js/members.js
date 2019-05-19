/**
 * Convert a member formated in JSON to HTML
 * @param {object} member Object containing member info
 * @returns {string} Html string
 */
function memberToHtml(member) {
  const role = member.status || "";

  return `
    <div class="p-4 col-lg-3 col-md-3 col-sm-6">
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
  $.getJSON("../data/members.json", function(members) {
    // Convert lords and simple members to HTML
    const membersHtml = members.members.map(memberToHtml);

    // Append members to document
    membersHtml.forEach(element => {
      $(".members-container").append(element);
    });
  });
}