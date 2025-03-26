console.log('hi');

const fruits = ['apple', 'grape'];

const arr = [...fruits, 'cherry'];

console.log(arr);
console.log(fruits);

const bookObj = {
    bookName: 'Great Gatsby',
    price: 20
}

const newBookObj = {...bookObj, author: 'Fitzgerald'};
console.log(newBookObj);

const colors = ['red', 'black'];
//const color1 = colors[0];
//const color2 = colors[1];
// console.log(color1);
// console.log(color1);
// console.log(colors);

const [color1, color2] = colors;
console.log(color1);
console.log(color1);
console.log(colors);

const animal = {
    title:'Dog',
    weight: 20
}

//const title = animal.title;

const {title, weight: animalWeight} = animal;
console.log(title);
//console.log(weight);
console.log(animalWeight);
console.log(animal);


