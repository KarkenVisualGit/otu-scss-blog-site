import CarouselLogic from "./CarouselLogic.js";

export default class CarouselUI {
  constructor(logic, options = {}) {
    this.logic = logic;

    this.options = {
      containerSelector: ".carousel",
      autoplay: true,
      ...options,
    };

    this.autoPlaying = this.options.autoplay;
    this.init();

    if (this.options.autoplay) {
      this.autoPlay();
    }
  }

  init() {
    this.container = document.querySelector(this.options.containerSelector);
    this.triggerNext = this.container.querySelector(".js-carousel-nav_next");
    this.triggerPrev = this.container.querySelector(".js-carousel-nav_prev");
    this.carouselItems = Array.from(
      this.container.querySelectorAll(".carousel-item")
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
        this.updateBulletNav();
        e.preventDefault();
      },
      { passive: false }
    );

    this.container.addEventListener("mouseenter", () => {
      if (this.options.autoplay) {
        this.stopAutoPlay();
      }
    });

    this.container.addEventListener("mouseleave", () => {
      if (this.options.autoplay && !this.autoPlaying) {
        this.autoPlay();
      }
    });
  }

  autoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
    this.autoPlaying = true;
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
    this.autoPlaying = false;
  }

  updateBulletNav() {
    const bullets = this.container.querySelectorAll(
      ".js-carousel-bulletNav-control"
    );
    bullets.forEach((bullet, index) => {
      if (index === this.logic.getMarker()) {
        bullet.classList.add("active");
      } else {
        bullet.classList.remove("active");
      }
    });
  }

  updateMarker() {
    const position = this.logic.getMarker();

    this.selectedItem.classList.remove("carousel-item_isSelected");
    this.selectedItem = this.carouselItems[position];
    this.selectedItem.classList.add("carousel-item_isSelected");
    this.carouselItems.forEach((item) => item.classList.add("hidden"));
    this.selectedItem.classList.remove("hidden");

    this.updateBulletNav();
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
    this.stopAutoPlay();
    this.logic.setMarker(index);
    this.updateMarker();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  function initCarousel(containerSelector) {
    const logic = new CarouselLogic(
      document.querySelectorAll(`${containerSelector} .carousel-item`).length
    );
    return new CarouselUI(logic, {
      containerSelector,
      autoplay: true,
    });
  }

  initCarousel(".carousel1");
  initCarousel(".carousel2");
});
