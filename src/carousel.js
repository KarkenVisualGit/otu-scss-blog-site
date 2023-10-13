class Carousel {
  constructor() {
    this.init();
    this.autoPlay();
  }

  init() {
    this.container = document.querySelector(".carousel");

    this.carouselItems = Array.from(
      document.querySelectorAll(".carousel-item")
    );
    this.selectedItem = document.querySelector(".carousel-item_isSelected");
    this.marker = this.carouselItems.indexOf(this.selectedItem);

    this.bulletNav();
    this.bindEvents();
  }

  static initCarousel() {
    return new Carousel();
  }
}

document.addEventListener("DOMContentLoaded", Carousel.initCarousel);
