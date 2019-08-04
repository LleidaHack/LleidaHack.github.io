/**
 * Prettify event date
 * @param {date} date  date to prettify
 */
function prettifyDates(uglyDate) {
  const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const months = ["enero", "febrero", "marzo", 
                  "abril", "mayo", "junio", 
                  "julio", "agosto", "septiembre", 
                  "octubre"," noviembre", "diciembre"];

  const splitDate = uglyDate.split("-")
  const date = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]);  
  const dateStr = days[date.getDay()] + ", " 
                  + date.getDate()   + " de " + months[date.getMonth()] + " " + date.getFullYear();
  return dateStr;
}

/**
 * Convert a member formated in JSON to HTML
 * @param {object} member Object containing member info
 */
function eventToHtml(event) {
  
  const dateStr = prettifyDates(event.date);

  let html = `
    <div class="card" id="event-card" title="${event.name}">
      <div class="p-4" style="background-color: ${event.color}; border-radius: inherit">
        <img class="card-img-top" src="${event.image}" alt="Card image cap">
      </div>
      <div class="card-body">
        <p class="card-text text-left">${dateStr}</p>
        <h4 class="card-title">${event.name}</h4>
      `;

    // if (event.seeMore)
    //   html += `<a href="${event.seeMore}" class="btn btn-sm btn-amber"><i class="far fa-eye"></i> Ver más</a>
    //   </div></div>`;
    // else
      html += "</div></div>";

    return html;
}

/**
 * Loads events from data/events.json and append all events to document (main page!)
 */
function appendEventsScroll() {
  $.getJSON("../data/events.json", function (events) {
    // Convert events to HTML
    const eventsHtml = events.reverse().map(eventToHtml);

    // Append events to document
    eventsHtml.forEach(e => {
      $(".events-scrolling").append(e);
    });
      
  });
}

/**
 * Loads events from data/events.json and append all events to document (news page!)
 */
function appendEventsRows() {
    $.getJSON("../data/events.json", function (events) {
      // Convert events to HTML
      const eventsHtml = events.reverse().map(eventToHtml);
  
      // Append events to document
      eventsHtml.forEach(e => {
          $(".events-container").append(e);
        });
        
    });
  }

  /**
   * Adds a modal based on the clicked event if the modal has been already added it won't
   * do it again.
   */
  $(document).on("click", "div#event-card", function(){
    const elemTitle = $(this).attr("title");

    $.getJSON("../data/events.json", function (events) {
      events.forEach(e => {
        if(e.name.localeCompare(elemTitle) === 0){
          let id = e.name.replace(/\s/g, '');
          if(!$("#".concat(id).concat(".modal")).length) {
            let dateStr = prettifyDates(e.date);
            let modalOpen =
            `
            <div id="${id}" class="modal fade" role="dialog">
                <div class="modal-dialog modal-lg">
                  <!-- Modal content-->
                  <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">${e.name}</h4>
                        <br>
                        <p class="card-text text-left">${dateStr}</p>
                    </div>
                    <div class="modal-body">`
            let modalTopDescription = 
            `
                      <p>${e.topDescription}</p>
            `
            let modalPicture =
            `
                      <img class="img-responsive" src="${e.modalImage}" alt="${e.name}">
            `
            let modalBottomDescription =
            `
                      <br>
                      <p style="margin-bottom:0">${e.bottomDescription}</p>
            `
            console.log(e.seeMore);
            let modalSeeMore =
            `         <br>
            `
            e.seeMore.forEach(function(element){
              modalSeeMore += `<a href="${element.url}" target="_blank">${element.text}</a>`
            });
                                  
            let modalClose =
            `
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>
              `;
            if(e.topDescription != ""){ modalOpen += modalTopDescription }
            modalOpen += modalPicture
            if(e.bottomDescription != ""){ modalOpen += modalBottomDescription }
            if(e.seeMore != "") { modalOpen += modalSeeMore}
            modalOpen += modalClose
              $("body").append(modalOpen);
          }
            $("#".concat(id)).modal();
        }});
        
    });
  });