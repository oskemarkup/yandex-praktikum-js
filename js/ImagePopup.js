class ImagePopup extends Popup {
  open(url) {
    super.open();

    this.element.querySelector('.popup__image').src = url;
  }
}
