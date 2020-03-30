function isValidStrLength(str, min, max) {
  if (str.length === 0) {
    return null;
  }

  return str.length >= min && str.length <= max;
}

function isValidURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?' // protocol
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
    + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
    + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
    + '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}

function validateStrLength(value) {
  const result = isValidStrLength(value, 2, 30);
  let error = '';

  if (result === null) {
    error = 'Это обязательное поле';
  } else if (!result) {
    error = 'Должно быть от 2 до 30 символов';
  }

  return error;
}

function validateURL(value) {
  const result = isValidURL(value);
  let error = '';

  if (!result) {
    error = 'Здесь должна быть ссылка';
  }

  return error;
}
