const main = require("./classes.js")

describe('Shape and Circle',()=> {
  const shape = new main.Shape('red');
  const circle = new main.Circle('black',20)
  test('get color from Shape',()=> {
    expect(shape.getColor()).toBe('red')
  })
  test('get radius from Circle',()=>{
    expect(circle.getRadius()).toBe(10)
    expect(circle.getColor()).toBe('black')
  })
})


describe('Temperature converter',()=> {
  const temperatureConverter = new main.TemperatureConverter()
  test('getting temperature',()=>{
    expect(temperatureConverter.celsiumTemperature).toBe(25)
  })
  test('setting temperature',()=>{
    expect(temperatureConverter.celsiumTemperature=30).toBe(temperatureConverter.celsiumTemperature)
  })
  test('Сonverting to Farenheit',()=>{
    expect(temperatureConverter.getConvertedToFarenheit()).toBe(86)
  })
  test('Сonverting to Kelvin',()=>{
    expect(temperatureConverter.getConvertedToKelvin()).toBe(303.15)
  })
})


describe('Math operations',()=>{
  const numbers = new main.MathOperations(6,3)
  test('add arguments',()=>{
    expect(main.MathOperations.add(numbers)).toBe(9)
  })
  test('subtract arguments',()=>{
    expect(main.MathOperations.subtract(numbers)).toBe(3)
  })
  test('multiply arguments',()=>{
    expect(main.MathOperations.multiply(numbers)).toBe(18)
  })
  test('divide arguments',()=>{
    expect(main.MathOperations.divide(numbers)).toBe(2)
  })
})


describe('Testing Car and Engine',()=> {
  const engine = new main.Engine();
  const car = new main.Car(engine);
  test('run car',()=>{
  expect(car.engine.run()).toBe(true)
  })
  test('stop car',()=>{
    expect(car.engine.stop()).toBe(false)
  })
})


describe('create Person',()=>{
  const person = new main.Person('Roma',28)
  test('get person name',()=>{
    expect(person.name).toBe('Roma')
    expect(person.age).toBe(28)
    expect(person.greet()).toBeUndefined()
  })
})