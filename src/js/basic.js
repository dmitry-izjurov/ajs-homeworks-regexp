export default class Validator {
  constructor(username) {
    this.username = String(username);
  }

  validateUsername() {
    return /^[^_-\dа-яё]+[-_a-z]*[0-9]{0,3}[-_a-z]*[^_-\dа-яё]+$/i.test(this.username);
  }
}
