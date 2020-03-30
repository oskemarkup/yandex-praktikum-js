function initImagePopup() {
  const imagePopupElement = document.querySelector('#big-size-image');
  const imagePopup = new ImagePopup(imagePopupElement);

  return imagePopup;
}

function initCardList(openBigImagePopup) {
  const cardListContainer = document.querySelector('.places-list');
  const cardList = new CardList(cardListContainer, initialCards);
  cardList.render(openBigImagePopup);

  return cardList;
}

function initAddCard(cardList, openImagePopup) {
  const addCardPopupElement = document.querySelector('#add-card');
  const addCardPopup = new Popup(addCardPopupElement);
  const addCardNameField = new Field(document.forms.new.elements.name, validateStrLength, 'error-card-name');
  const addCardLinkField = new Field(document.forms.new.elements.link, validateURL, 'error-card-link');
  const addCardForm = new Form(document.forms.new, {
    name: addCardNameField,
    link: addCardLinkField,
  });
  const addCardbutton = document.querySelector('.user-info__button');

  addCardbutton.addEventListener('click', addCardPopup.open);

  addCardPopup.onOpen = () => {
    addCardForm.validate();
  };

  addCardForm.onSubmit = ({ name, link }) => {
    const newCard = new Card(name, link);
    newCard.onOpenPopup = openImagePopup;
    cardList.addCard(newCard.create());
    addCardPopup.close();
  };
}

function initProfileEdit() {
  const userInfoName = document.querySelector('.user-info__name');
  const userInfoJob = document.querySelector('.user-info__job');

  const profilePopupElement = document.querySelector('#profile');
  const profilePopup = new Popup(profilePopupElement);
  const profileNameField = new Field(document.forms.profile.elements.name, validateStrLength, 'error-profile-name');
  const profileJobField = new Field(document.forms.profile.elements.job, validateStrLength, 'error-profile-job');
  const profileForm = new Form(document.forms.profile, {
    name: profileNameField,
    job: profileJobField,
  });
  const profileButton = document.querySelector('.button.user-info__edit');

  profileButton.addEventListener('click', profilePopup.open);

  profilePopup.onOpen = () => {

    profileForm.fields.name.value = userInfoName.textContent;
    profileForm.fields.job.value = userInfoJob.textContent;
    profileForm.validate();
  };

  profileForm.onSubmit = ({ name, job }) => {
    userInfoName.textContent = name;
    userInfoJob.textContent = job;
    profilePopup.close();
  };
}

function main() {
  const imagePopup = initImagePopup();
  const openImagePopup = (url) => imagePopup.open(url);
  const cardList = initCardList(openImagePopup);
  initAddCard(cardList, openImagePopup);
  initProfileEdit();
}

main();
