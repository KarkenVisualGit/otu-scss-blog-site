import CarouselLogic from "../CarouselLogic.js";

describe("CarouselLogic", () => {
  describe("constructor", () => {
    it("should initialize with the correct item length and marker set to 0", () => {
      const logic = new CarouselLogic(5);
      expect(logic.getCarouselItemsLength()).toBe(5);
      expect(logic.getMarker()).toBe(0);
    });
  });

  describe("incrementSlide", () => {
    it("should increment the marker", () => {
      const logic = new CarouselLogic(5);
      logic.incrementSlide();
      expect(logic.getMarker()).toBe(1);
    });

    it("should loop back to 0 if at the end", () => {
      const logic = new CarouselLogic(5);
      logic.setMarker(4);
      logic.incrementSlide();
      expect(logic.getMarker()).toBe(0);
    });
  });

  describe("decrementSlide", () => {
    it("should decrement the marker", () => {
      const logic = new CarouselLogic(5);
      logic.setMarker(2);
      logic.decrementSlide();
      expect(logic.getMarker()).toBe(1);
    });

    it("should loop to the end if at the start", () => {
      const logic = new CarouselLogic(5);
      logic.decrementSlide();
      expect(logic.getMarker()).toBe(4);
    });
  });

  describe("setMarker", () => {
    it("should set the marker to a specific value", () => {
      const logic = new CarouselLogic(5);
      logic.setMarker(3);
      expect(logic.getMarker()).toBe(3);
    });
  });

  describe("getMarker", () => {
    it("should return the current marker", () => {
      const logic = new CarouselLogic(5);
      logic.setMarker(2);
      expect(logic.getMarker()).toBe(2);
    });
  });
});
