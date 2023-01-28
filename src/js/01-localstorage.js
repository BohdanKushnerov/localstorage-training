// const user = {
//   name: 'Mango',
//   age: 2,
// };

// // Из масива или обьекта делает строку
// console.log(JSON.stringify(user));

// const savedUserData = '{"name":"Mango","age":2}';

// // Берет строку и роспарсивает как обьект или массив
// console.log(JSON.parse(savedUserData));
// __________________________________

console.log(localStorage);

localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));

const savedData = localStorage.getItem('my-data');
console.log('savedData', savedData);

const parsedData = JSON.parse(savedData);
console.log('parsedData', parsedData);

// В локалСторидж хранят обьекты данных
