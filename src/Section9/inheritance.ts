export {};

class Animal {
constructor(public name: string){}

  run(): string {
    return `${this.name} can run`
  };
};

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number){
    super(name);

    this.speed = speed;
  };

  run(): string { 
    return `${super.run()} ${this.speed}km`
  };
};

console.log(new Animal('Haha').run())
console.log(new Lion('Shinba', 80).run())

// let animal = new Animal()
// console.log(animal.run())

// let lion = new Lion()
// console.log(lion.run())