export default class extends Stimulus.Controller {
  static get targets() {
    return ['source'];
  }

  copy() {
    this.sourceTarget.select();
    document.execCommand('copy');
  }

  connect() {
    if (document.queryCommandSupported('copy')) {
      this.element.classList.add('clipboard--supported');
    }
  }

}