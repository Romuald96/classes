class Shape {
  color: string;
  constructor(color:string) {
    this.color=color;
  }
  getColor ():string {
    return this.color;
  }
}

class Circle extends Shape {
  diameter:number;
  constructor(color:string,diameter:number) {
    super(color);
    this.diameter = diameter;
  }
  getRadius ():number {
    return this.diameter/2;
  }
}


class TemperatureConverter {

  private _celsium:number = 25;

  get celsiumTemperature():number {
    return this._celsium;
  }

  set celsiumTemperature(degree:number) {
    this._celsium = degree;
  }

  getConvertedToFarenheit():number {
    return (this._celsium*9/5)+32;
  }

  getConvertedToKelvin():number {
    return this._celsium+273.15;
  }

}


class MathOperations {
  x:number;
  y:number;
  constructor (x:number,y:number) {
    this.x = x;
    this.y = y;
  }
  static add(x:number,y:number) {
    return x+y;
  }
  static subtract(x:number,y:number) {
    return x-y;
  }
  static multiply(x:number,y:number) {
    return x*y;
  }
  static divide(x:number,y:number) {
    return x/y;
  }
}

class Engine {
  state:boolean = false;
  run() {
    return this.state = true;
  }
  stop() {
    return this.state = false;
  }
}

class Car {
  engine:Engine;
  constructor(engine:Engine) {
    this.engine = engine;
  }
  run() {
    this.engine.run();
  }
  stop() {
    this.engine.stop();
  }
}
function Person(name:string,age:number) {
}

Person.prototype = {
  greet: function() {
  console.log(`Привет,${this.name}, Возраст:${this.age}`)
  }
}
