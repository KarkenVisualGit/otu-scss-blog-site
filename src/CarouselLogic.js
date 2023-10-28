export default class CarouselLogic {
  constructor(itemsLength) {
    this.carouselItemsLength = itemsLength;
    this.marker = 0;
  }

  getCarouselItemsLength() {
    return this.carouselItemsLength;
  }

  incrementSlide() {
    this.marker = (this.marker + 1) % this.carouselItemsLength;
  }

  decrementSlide() {
    this.marker =
      this.marker === 0 ? this.carouselItemsLength - 1 : this.marker - 1;
  }

  setMarker(position) {
    this.marker = position;
  }

  getMarker() {
    return this.marker;
  }
}
