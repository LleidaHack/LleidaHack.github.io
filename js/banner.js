var firstTime = true;

function imageToCarouselHtml(imagePath) {
  const html = `
    <div class="carousel-item ${firstTime ? "active" : ""}">
    <div class="view">
      <img class="w-100 h-100" src="${imagePath}" alt="Second slide">
      <div class="mask rgba-black-strong mask-height-80"></div>
    </div>
  </div>`;
  firstTime = false;
  return html;
}

function appendImagesToCarousel() {
  const images = [
    "/img/carousel/hackeps.jpg",
    "/img/carousel/hackeps1.jpg",
    "/img/carousel/hackeps3.jpg",
    "/img/carousel/pins.jpg",
    "/img/carousel/taller.jpg",
    "/img/carousel/ucode.jpg",
  ];

  const html = images.map(imageToCarouselHtml);  
  $(".carousel-inner").html(html.join(""));

  setInterval(() => {
      $(".carousel-control-next").click();
  }, 3000);
}