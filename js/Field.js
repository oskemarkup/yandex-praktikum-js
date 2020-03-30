class Field {
  constructor(input, validate, errorLabelId) {
    this.input = input;
    this.validate = validate;
    this.errorLabel = document.querySelector(`#${errorLabelId}`);
    this.error = null;
    this._onValidate = null;

    this.onInput = this.onInput.bind(this);

    input.addEventListener('input', this.onInput);
  }

  set onValidate(f) {
    this._onValidate = f;
  }

  onInput() {
    this.error = this.validate(this.input.value);
    this.errorLabel.textContent = this.error;

    if (this._onValidate) {
      this._onValidate();
    }
  }

  get value() {
    return this.input.value;
  }

  set value(value) {
    this.input.value = value;
  }

  get isValid() {
    return !this.error;
  }
}
