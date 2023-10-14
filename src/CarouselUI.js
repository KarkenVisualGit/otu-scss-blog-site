import CarouselLogic from "./CarouselLogic.js";

export default class CarouselUI {
  constructor(logic) {
    this.logic = logic;
    this.init();
    this.autoPlay();
  }

  init() {
    this.container = document.querySelector(".carousel");
    this.triggerNext = this.container.querySelector(".js-carousel-nav_next");
    this.triggerPrev = this.container.querySelector(".js-carousel-nav_prev");
    this.carouselItems = Array.from(
      document.querySelectorAll(".carousel-item")
    );
    this.selectedItem = document.querySelector(".carousel-item_isSelected");
    this.marker = this.carouselItems.indexOf(this.selectedItem);

    this.bulletNav();
    this.bindEvents();
  }

  bindEvents() {
    this.triggerNext.addEventListener("click", (e) => {
      e.preventDefault();
      this.nextSlide();
    });

    this.triggerPrev.addEventListener("click", (e) => {
      e.preventDefault();
      this.prevSlide();
    });

    this.container
      .querySelectorAll(".js-carousel-bulletNav-control")
      .forEach((bullet, index) => {
        bullet.addEventListener("click", (e) => {
          e.preventDefault();
          this.bulletNavControl(index);
        });
      });

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

  updateMarker() {
    const position = this.logic.getMarker();
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
    this.logic.incrementSlide();
    this.updateMarker();
  }

  prevSlide() {
    this.logic.decrementSlide();
    this.updateMarker();
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
    this.logic.setMarker(index);
    this.updateMarker();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const logic = new CarouselLogic(
    document.querySelectorAll(".carousel-item").length
  );
  return new CarouselUI(logic);
});
