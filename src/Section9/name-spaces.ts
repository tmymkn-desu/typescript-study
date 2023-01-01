export {};

namespace Japanese{ 
  export namespace Tokyo{
    export class Person {
      constructor(public name: string){}
    }
  }

  export namespace Osaka{
    export class Person {
      constructor(public name: string){}
    }
  }

  // export class Person {
  //   constructor(public name: string){}
  // }
}

// const me = new Person('Tom')
// console.log(me.name)

namespace American {
  export class Person {
    constructor(
      public firstName: string, 
      public lastName: string, 
      public middleName: string){}
  }
}

const me = new Japanese.Osaka.Person('Tomyan')
const you = new American.Person('A', 'B','C')
console.log(me.name)  
console.log(you.firstName)  