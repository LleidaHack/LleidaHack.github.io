/**
 * Convert a member formated in JSON to HTML
 * @param {object} member Object containing member info
 */
function memberToHtml(member, isLord=false) {
  const role = member.status || "";
  return `
    <div class="p-4 col-lg-4 col-md-4 col-sm-12">
    <div class="team-member">
      <figure>
        <img src="${member.image}" width="30" class="img-responsive">
        <figcaption>
          <p>Temporibus dolor, quisquam consectetur molestias, veniam voluptatum. Beatae alias omnis totam.</p>
          <ul>
            <li><a href="${member.github}"><i class="fab fa-github-alt fa-2x"></i></a></li>
            <li><a href="${member.linkedin}"><i class="fab fa-linkedin-in fa-2x"></i></i></a></li>
          </ul>
        </figcaption>
      </figure>
      <h4>${member.name}</h4>
      <p>${role}</p>
    </div>
    </div>`;
}

function appendMembers() {
  $.getJSON("../data/members.json", function(members) {
    const lordHtml = members.lords.map(m => memberToHtml(m, true));
    const membersHtml = members.members.map(memberToHtml);

    lordHtml.concat(membersHtml).forEach(element => {
      $(".members-container").append(element);
    });
  });
}