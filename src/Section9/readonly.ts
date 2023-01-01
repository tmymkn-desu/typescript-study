export {};

class VisaCard {
  readonly owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }
}

let myVisa = new VisaCard('Tom')
console.log(myVisa)
// myVisa.owner = 'abc'

class VisaCard2 {constructor(public readonly owner: string) {}}

let myVisa2 = new VisaCard2('Tom')
// myVisa2.owner = 'abc'
console.log(myVisa2)