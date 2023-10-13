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

  bindEvents() {
    this.container.addEventListener(
      "wheel",
      (e) => {
        if (e.deltaY > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
        e.preventDefault();
      },
      { passive: false }
    );
  }

  incrementSlide() {
    this.marker = (this.marker + 1) % this.carouselItems.length;
  }

  decrementSlide() {
    this.marker =
      this.marker === 0 ? this.carouselItems.length - 1 : this.marker - 1;
  }

  nextSlide() {
    this.incrementSlide();
  }

  prevSlide() {
    this.decrementSlide();
  }

  static initCarousel() {
    return new Carousel();
  }
}

document.addEventListener("DOMContentLoaded", Carousel.initCarousel);
