export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Ku';
  static lastName: String = 'Ar';

  static work() {
    return `YEAH, ${this.firstName}`
  }
}

// let me = new Me()
// console.log(me.isProgrammer)

console.log(Me.isProgrammer)
console.log(Me.work())
