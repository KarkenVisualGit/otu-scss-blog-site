class Carousel {
  constructor() {
    this.init();
    this.autoPlay();
  }

  static initCarousel() {
    return new Carousel();
  }
}

document.addEventListener("DOMContentLoaded", Carousel.initCarousel);
