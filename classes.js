class Shape {
  constructor(color) {
    this.color=color;
  }
  getColor () {
    return this.color;
  }
}

class Circle extends Shape {
  constructor(color,diameter) {
    super(color);
    this.diameter = diameter;
  }
  getRadius () {
    return this.diameter/2;
  }
}


class TemperatureConverter {

  #celsium = 25;

  get celsiumTemperature() {
    return this.#celsium;
  }

  set celsiumTemperature(degree) {
    this.#celsium = degree;
  }

  getConvertedToFarenheit() {
    return (this.#celsium*9/5)+32;
  }

  getConvertedToKelvin() {
    return this.#celsium+273.15;
  }

}


class MathOperations {
  constructor (x,y) {
    this.x = x;
    this.y = y;
  }
  static add(args) {
    return args.x+args.y;
  }
  static subtract(args) {
    return args.x-args.y;
  }
  static multiply(args) {
    return args.x*args.y;
  }
  static divide(args) {
    return args.x/args.y
  }
}




class Engine {
  state = false;
  run() {
    return this.state = true;
  }
  stop() {
    return this.state = false;
  }
}

class Car {
  constructor(engine) {
    this.engine = engine;
  }
  run() {
    this.engine.run();
  }
  stop() {
    this.engine.stop()
  }
}
function Person(name,age) {
this.name = name;
this.age = age;
}

Person.prototype = {
  greet: function() {
  console.log(`Привет,${this.name}, Возраст:${this.age}`)
  }
}
module.exports = {Shape,Circle,Person,TemperatureConverter,Engine,MathOperations,Car}

