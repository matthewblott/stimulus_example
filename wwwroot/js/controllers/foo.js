export default class extends Stimulus.Controller {
  static get targets() {
    return ['name'];
  }

  connect() {
    console.log('foo controller started');
  }

}