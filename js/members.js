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
        <figcaption>
          <p>${member.quote}</p>
          <ul>
            <li><a href="${member.github}"><i class="fab fa-github-alt"></i></a></li>
            <li><a href="${member.linkedin}"><i class="fab fa-linkedin-in"></i></i></a></li>
          </ul>
        </figcaption>
      </figure>
      <h4>${member.name}</h4>
      <p>${role}</p>
    </div>
    </div>`;
}

/**
 * Convert a lord formated in JSON to HTML
 * @param {object} lord Object containing lord info
 * @returns {string} Html string
 */
function lordToHtml(lord) {
    return `
    <div class="p-4 col-lg-4 col-md-4 col-sm-12">
    <div class="team-member">
      <figure>
        <img src="${lord.image}" width="20" class="img-responsive">
        <figcaption>
          <p>Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.</p>
          <ul>
            <li><a href="${lord.github}"><i class="fab fa-github-alt"></i></a></li>
            <li><a href="${lord.linkedin}"><i class="fab fa-linkedin-in"></i></i></a></li>
          </ul>
        </figcaption>
      </figure>
      <h4>${lord.name}</h4>
      <p>${lord.status}</p>
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
    const lordHtml = members.lords.map(lordToHtml);
    const membersHtml = members.members.map(memberToHtml);

    // Append members to document
    lordHtml.concat(membersHtml).forEach(element => {
      $(".members-container").append(element);
    });
  });
}