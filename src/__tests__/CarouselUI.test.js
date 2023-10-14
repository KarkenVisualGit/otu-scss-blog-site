import { fireEvent } from "@testing-library/dom";
import CarouselLogic from "../CarouselLogic.js";
import CarouselUI from "../CarouselUI.js";

describe("CarouselUI", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <div class="carousel">
                <div class="js-carousel-nav_next"></div>
                <div class="js-carousel-nav_prev"></div>
                <div class="carousel-item"></div>
                <div class="carousel-item"></div>
                <div class="carousel-item carousel-item_isSelected"></div>
            </div>
        `;
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("initializes correctly", () => {
    const logic = new CarouselLogic(3);
    const ui = new CarouselUI(logic);

    expect(ui.container).toBeDefined();
    expect(ui.triggerNext).toBeDefined();
  });

  it("handles next slide click", () => {
    const logic = new CarouselLogic(3);
    const ui = new CarouselUI(logic);

    logic.setMarker(0);
    expect(logic.getMarker()).toBe(0);

    const event = new Event("click");
    ui.triggerNext.dispatchEvent(event);

    expect(logic.getMarker()).toBe(1);
  });

  it("handles wheel event correctly", () => {
    const logic = new CarouselLogic(3);
    const ui = new CarouselUI(logic);

    const mockNextSlide = jest.spyOn(ui, "nextSlide");
    const mockPrevSlide = jest.spyOn(ui, "prevSlide");

    const eventWheelUp = new WheelEvent("wheel", { deltaY: -1 });
    const eventWheelDown = new WheelEvent("wheel", { deltaY: 1 });

    ui.container.dispatchEvent(eventWheelUp);
    expect(mockPrevSlide).toHaveBeenCalledTimes(1);

    ui.container.dispatchEvent(eventWheelDown);
    expect(mockNextSlide).toHaveBeenCalledTimes(1);
  });

  it("handles mouseenter and mouseleave events correctly", () => {
    const logic = new CarouselLogic(3);
    const ui = new CarouselUI(logic);

    const mockStopAutoPlay = jest.spyOn(ui, "stopAutoPlay");
    const mockAutoPlay = jest.spyOn(ui, "autoPlay");

    const eventMouseEnter = new Event("mouseenter");
    ui.container.dispatchEvent(eventMouseEnter);
    expect(mockStopAutoPlay).toHaveBeenCalledTimes(1);

    const eventMouseLeave = new Event("mouseleave");
    ui.container.dispatchEvent(eventMouseLeave);
    expect(mockAutoPlay).toHaveBeenCalledTimes(1);
  });

  it("handles autoPlay correctly", () => {
    const logic = new CarouselLogic(3);
    const ui = new CarouselUI(logic);

    jest.useFakeTimers();

    const mockNextSlide = jest.spyOn(ui, "nextSlide");

    ui.autoPlay();

    jest.advanceTimersByTime(4999);
    expect(mockNextSlide).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(mockNextSlide).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(5000);
    expect(mockNextSlide).toHaveBeenCalledTimes(2);
  });

  it("stops autoPlay correctly", () => {
    const logic = new CarouselLogic(3);
    const ui = new CarouselUI(logic);

    jest.useFakeTimers();

    const mockNextSlide = jest.spyOn(ui, "nextSlide");

    ui.autoPlay();
    ui.stopAutoPlay();

    jest.advanceTimersByTime(10000);
    expect(mockNextSlide).not.toHaveBeenCalled();
  });

  it("updates marker correctly", () => {
    const logic = new CarouselLogic(3);
    const ui = new CarouselUI(logic);

    logic.setMarker(1);
    ui.updateMarker();

    expect(document.querySelectorAll(".carousel-item_isSelected")).toHaveLength(
      1
    );
    expect(document.querySelectorAll(".hidden")).toHaveLength(2);
    expect(
      document
        .querySelector(".carousel-item_isSelected")
        .classList.contains("hidden")
    ).toBe(false);
  });

  it("increments slide correctly", () => {
    const logic = new CarouselLogic(3);
    const ui = new CarouselUI(logic);

    ui.incrementSlide();
    expect(ui.marker).toBe(0);

    ui.incrementSlide();
    expect(ui.marker).toBe(1);

    ui.incrementSlide();
    expect(ui.marker).toBe(2);
  });

  it("decrements slide correctly", () => {
    const logic = new CarouselLogic(3);
    const ui = new CarouselUI(logic);

    ui.decrementSlide();
    expect(ui.marker).toBe(1);

    ui.decrementSlide();
    expect(ui.marker).toBe(0);

    ui.decrementSlide();
    expect(ui.marker).toBe(2);
  });

  it("handles nextSlide correctly", () => {
    const logic = new CarouselLogic(3);
    const ui = new CarouselUI(logic);

    logic.setMarker(0);
    ui.nextSlide();

    expect(logic.getMarker()).toBe(1);
    expect(document.querySelectorAll(".carousel-item_isSelected")).toHaveLength(
      1
    );
  });

  it("handles bulletNavControl correctly", () => {
    const logic = new CarouselLogic(3);
    const ui = new CarouselUI(logic);

    ui.bulletNavControl(1);

    expect(logic.getMarker()).toBe(1);
    expect(document.querySelectorAll(".carousel-item_isSelected")).toHaveLength(
      1
    );
  });
});

describe("CarouselUI - handles prevSlide correctly", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <div class="carousel">
                <div class="js-carousel-nav_next"></div>
                <div class="js-carousel-nav_prev"></div>
                <div class="carousel-item"></div>
                <div class="carousel-item"></div>
                <div class="carousel-item carousel-item_isSelected"></div>
            </div>
        `;
  });

  afterAll(() => {
    document.body.innerHTML = "";
  });

  it("handles prevSlide correctly", () => {
    const logic = new CarouselLogic(3);
    const ui = new CarouselUI(logic);

    logic.setMarker(0);
    ui.prevSlide();

    expect(logic.getMarker()).toBe(2);
    expect(document.querySelectorAll(".carousel-item_isSelected")).toHaveLength(
      1
    );
  });
});

describe("CarouselUI event handlers", () => {
  let logic;
  let ui;

  beforeEach(() => {
    document.body.innerHTML = `
            <div class="carousel">
                <div class="js-carousel-nav_next"></div>
                <div class="js-carousel-nav_prev"></div>
                <div class="carousel-item"></div>
                <div class="carousel-item"></div>
                <div class="carousel-item carousel-item_isSelected"></div>
            </div>
        `;

    logic = new CarouselLogic(3);
    ui = new CarouselUI(logic);
  });

  it("handles prevSlide on prev button click", () => {
    expect(ui).toBeDefined();
    const prevButton = document.querySelector(".js-carousel-nav_prev");

    logic.setMarker(1);
    fireEvent.click(prevButton);

    expect(logic.getMarker()).toBe(0);
  });

  it("handles bulletNavControl on bullet click", () => {
    expect(ui).toBeDefined();
    const bulletItems = document.querySelectorAll(
      ".js-carousel-bulletNav-control"
    );

    logic.setMarker(0);
    fireEvent.click(bulletItems[2]);

    expect(logic.getMarker()).toBe(2);
  });
});

describe("DOMContentLoaded event handler", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <div class="carousel">
                <div class="js-carousel-nav_next"></div>
                <div class="js-carousel-nav_prev"></div>
                <div class="carousel-item"></div>
                <div class="carousel-item"></div>
                <div class="carousel-item carousel-item_isSelected"></div>
            </div>
        `;
  });

  it("initializes CarouselUI on DOMContentLoaded", () => {
    expect(
      document.querySelectorAll(".js-carousel-bulletNav-control")
    ).toHaveLength(0);

    const event = document.createEvent("Event");
    event.initEvent("DOMContentLoaded", true, true);
    window.document.dispatchEvent(event);

    expect(
      document.querySelectorAll(".js-carousel-bulletNav-control")
    ).toHaveLength(3);
  });
});
