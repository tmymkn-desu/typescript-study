import axios from 'axios';
export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';
axios.get(url).then(function (response) {
  interface Airticle {
    id: number;
    title: string;
    description: string;
  }
  let data: Airticle[];
  data = response.data;
  data = [
    {
      id: 1,
      title: 'title',
      description: 'abc'
    }
  ]
  console.log(data);
});
