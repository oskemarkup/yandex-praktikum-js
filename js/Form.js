class Form {
  constructor(form, fields = []) {
    this.form = form;
    this.fields = fields;
    this._onSubmit = null;

    this.submit = this.submit.bind(this);

    form.addEventListener('submit', this.submit);
    Object.values(fields).forEach((field) => {
      field.onValidate = this.onFieldValidate.bind(this);
    });
  }

  set onSubmit(f) {
    this._onSubmit = f;
  }

  validate() {
    Object.values(this.fields).forEach((field) => field.onInput());
  }

  onFieldValidate() {
    this.valid = Object.values(this.fields).every((field) => field.isValid);
    this.form.querySelector('.popup__button').classList.toggle('popup__button_enable', this.valid);
  }

  submit(event) {
    event.preventDefault();

    if (!this._onSubmit || !this.valid) {
      return;
    }

    this._onSubmit(Object.entries(this.fields).reduce((result, [name, field]) => ({
      ...result,
      [name]: field.value,
    }), {}));

    this.form.reset();
  }
}
