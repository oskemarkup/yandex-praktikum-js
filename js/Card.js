class Card {
  constructor(name, url) {
    this.name = name;
    this.url = url;
    this._openPopup = null;

    this.like = this.like.bind(this);
    this.remove = this.remove.bind(this);
    this.openPopup = this.openPopup.bind(this);
  }

  create() {
    // формируем все элементы
    const card = document.createElement('div');
    card.classList.add('place-card');

    const imgCard = document.createElement('div');
    imgCard.classList.add('place-card__image');
    imgCard.style.backgroundImage = `url(${this.url})`;

    const btnImgCard = document.createElement('button');
    btnImgCard.classList.add('place-card__delete-icon');

    const descCard = document.createElement('div');
    descCard.classList.add('place-card__description');

    const h3Card = document.createElement('h3');
    h3Card.classList.add('place-card__name');
    h3Card.textContent = this.name;

    const btnLike = document.createElement('button');
    btnLike.classList.add('place-card__like-icon');
    this.likeElement = btnLike;

    // обработчики событий
    imgCard.addEventListener('click', this.openPopup);
    btnLike.addEventListener('click', this.like);
    btnImgCard.addEventListener('click', this.remove);

    // сливаем их в один
    card.appendChild(imgCard);
    imgCard.appendChild(btnImgCard);
    card.appendChild(descCard);
    descCard.appendChild(h3Card);
    descCard.appendChild(btnLike);

    this.element = card;

    return card;
  }

  openPopup(e) {
    if (!this.openPopup || !e.target.classList.contains('place-card__image')) {
      return;
    }

    this._openPopup(this.url);
  }

  set onOpenPopup(f) {
    this._openPopup = f;
  }

  like() {
    this.likeElement.classList.toggle('place-card__like-icon_liked');
  }

  remove(event) {
    this.element.remove();
    this.element = null;
    event.preventDefault();
  }
}
