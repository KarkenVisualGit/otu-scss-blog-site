class Carousel {
  constructor() {
    this.init();
    this.autoPlay();
  }

  init() {
    console.log("Hello");
    this.container = document.querySelector(".carousel");

    this.carouselItems = Array.from(
      document.querySelectorAll(".carousel-item")
    );
    this.selectedItem = document.querySelector(".carousel-item_isSelected");
    this.marker = this.carouselItems.indexOf(this.selectedItem);

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

    this.container.addEventListener("mouseenter", () => {
      this.stopAutoPlay();
    });

    this.container.addEventListener("mouseleave", () => {
      this.autoPlay();
    });
  }

  autoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  }

  updateMarker(position) {
    this.selectedItem.classList.remove("carousel-item_isSelected");
    this.selectedItem = this.carouselItems[position];
    this.selectedItem.classList.add("carousel-item_isSelected");
    this.carouselItems.forEach((item) => item.classList.add("hidden"));
    this.selectedItem.classList.remove("hidden");
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

  bulletNav() {
    const bulletNav = document.createElement("ul");
    bulletNav.className = "carousel-bulletNav";

    for (let i = 0; i < this.carouselItems.length; i += 1) {
      const li = document.createElement("li");
      li.className = "carousel-bulletNav-control js-carousel-bulletNav-control";
      const a = document.createElement("a");
      li.appendChild(a);
      bulletNav.appendChild(li);
    }

    this.container.appendChild(bulletNav);
  }

  bulletNavControl(index) {
    this.updateMarker(index);
    this.marker = index;
  }

  static initCarousel() {
    return new Carousel();
  }
}

document.addEventListener("DOMContentLoaded", Carousel.initCarousel);
