/**
 * Convert a member formated in JSON to HTML
 * @param {object} member Object containing member info
 */
function eventToHtml(event) {
  const days = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
  const months = ["enero", "febrero", "marzo", 
                  "abril", "mayo", "junio", 
                  "julio", "agosto", "septiembre", 
                  "octubre"," noviembre", "diciembre"];

  // Prettify event date 
  const date = new Date(event.date);  
  const dateStr = days[date.getDay()] + ", " 
                  + date.getDate() + " de " + months[date.getMonth()] + " " + date.getFullYear();

  let html = `
    <div class="card">
      <div class="p-4" style="background-color: ${event.color}; border-radius: inherit">
        <img class="card-img-top" src="${event.image}" alt="Card image cap">
      </div>
      <div class="card-body">
        <p class="card-text text-left">${dateStr}</p>
        <h4 class="card-title"><a>${event.name}</a></h4>
      `;

    // if (event.seeMore)
    //   html += `<a href="${event.seeMore}" class="btn btn-sm btn-amber"><i class="far fa-eye"></i> Ver más</a>
    //   </div></div>`;
    // else
      html += "</div></div>";

    return html;
}

/**
 * Loads events from data/events.json and append all events to document 
 */
function appendEvents() {
  $.getJSON("../data/events.json", function (events) {
    // Convert events to HTML
    const eventsHtml = events.map(eventToHtml);

    // Append events to document
    eventsHtml.forEach(e => {
      $(".events-scrolling").append(e);
    });
  });
}