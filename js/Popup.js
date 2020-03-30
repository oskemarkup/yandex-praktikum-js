class Popup {
  constructor(element) {
    this.element = element;
    this._onOpen = null;

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);

    element.querySelector('.popup__close').addEventListener('click', this.close);
  }

  set onOpen(f) {
    this._onOpen = f;
  }

  open() {
    this.element.classList.add('popup_is-opened');

    if (this._onOpen) {
      this._onOpen();
    }
  }

  close() {
    this.element.classList.remove('popup_is-opened');
  }
}
