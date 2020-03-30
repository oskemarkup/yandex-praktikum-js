class CardList {
  constructor(container, initCards) {
    this.container = container;
    this.initCards = initCards;
  }

  addCard(card) {
    this.container.appendChild(card);
  }

  render(onOpenPopup) {
    this.initCards.forEach((card) => {
      const newCard = new Card(card.name, card.link);
      newCard.onOpenPopup = onOpenPopup;
      this.addCard(newCard.create());
    });
  }
}
