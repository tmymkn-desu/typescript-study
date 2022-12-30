export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'YEEEEAAAAAH';

type Example = {
  name: string;
  age: number;
};

const example1: Example = { name: 'a', age: 43 };

type Profile2 = typeof example1;