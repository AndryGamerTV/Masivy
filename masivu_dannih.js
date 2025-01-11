let fruits = ("Banana", "Mellon", "Apple", "Car");

/*for (let fruit of fruits) {// ітерується по елементах масиву
  console.log( fruit );
}
console.log('\n')*/

console.log( fruits[0] );
console.log( fruits[1] ); // Яблуко
console.log( fruits[2] ); // Апельсин
console.log( fruits[3] ); // Слива

console.log();

//console.log(fruits.pop());// видаляємо один елемент з кінця масиву
fruits.push("Апельсин", "Персик");
console.log( fruits.shift() );// видалити один елемент з початку push and unshift
fruits.unshift('Кіт');//додавати одразу декілька елементів
console.log(fruits);
console.log( fruits[fruits.at-5] );/*Ми можемо явно обчислити індекс останнього елемента, 
а потім отримати до нього доступ:*/
// різні типи значень

console.log('\n')

let arr = [
    'Яблуко',
    { name: 'Микола' },true, function() { console.log('привіт'); }];
  // отримати елемент з індексом 1 (об'єкт) та вивести його властивість name
  console.log( arr[1].name );  arr[3](); // Микола
  // отримати елемент з індексом 3 (функція) та виконати її
  console.log( arr[arr.length -3] );















  