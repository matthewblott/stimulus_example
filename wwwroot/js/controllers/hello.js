class hello extends Stimulus.Controller {

  static get targets() {
    return ['name'];
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }

  get name() {
    return this.nameTarget.value;
  }

}

export { hello };