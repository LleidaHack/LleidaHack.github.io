/**
 * Convert a member formated in JSON to HTML
 * @param {object} member Object containing member info
 * @returns {string} Html string
 */
function memberToHtml(member) {
  const role = member.status || "";

  return `
    <div class="p-1 col-lg-3 col-md-3 col-sm-6 col-6">
    <div class="team-member">
      <figure>
        <img src="${member.image}" width="20" class="img-responsive" alt="${member.name}-photo">
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
  var db = firebase.firestore();
  var count = 0;
  var rowCount=0;

  var db = firebase.firestore();
  db.collection("members").get().then((querySnapshot) => {
    const members = querySnapshot.docs.map(doc => doc.data());
    const membersHtml = members.map(memberToHtml);
    // Append members to document
    for(i=0; i<membersHtml.length/4; i++) {
      var rowMemberContainer = $.parseHTML(`<div class="members-container-${i} row justify-content-md-center"></div>`);
      $("#pre-events-container").append(rowMemberContainer);
    }
    membersHtml.forEach(function(element, index) {
      if (index>2)index++;
      var num = Math.floor((index)/4);
      var membersContainer = ('.members-container-'.concat(num));
      $(membersContainer).append(element);
    });
  });
}