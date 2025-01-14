const log = console.log;
let fruits = []; // створюємо масив

fruits[99999] = 5; // створюємо властивість, індекс якої набагато перевищує довжину масиву
log(fruits.length, fruits[99999]); // Output: 100000 5

fruits.age = 25; // створюємо властивість з довільним ім'ям
log(fruits.age, fruits); // Output: 25, Array with length 100000 and property 'age'