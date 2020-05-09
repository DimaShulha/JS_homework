// - создать массив с 20 числами.

let arrOfNumbers = [34, 44, 56, 12, 5, 78, 89, 567, 789, 37, 98, 87, 76, 45, 23, 56, 78, 90, 19, 20];

// // -- при помощи метода sort отсортировать массив.
let resultOfSortUP = arrOfNumbers.sort((a, b) => a - b);
console.log(resultOfSortUP);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

let resultOfSortDn = arrOfNumbers.sort((a, b) => b - a);
console.log(resultOfSortDn);

// -- при помощи filter получить числа кратные 3

let filteredNums = arrOfNumbers.filter(a => a % 3 === 0);
console.log(filteredNums);

// -- при помощи filter получить числа кратные 10

let filteredNums2 = arrOfNumbers.filter(a => a % 10 === 0);
console.log(filteredNums2);

// -- перебрать (проитерировать) массив при помощи foreach()

arrOfNumbers.forEach(function (arrElem) {
    console.log(arrElem);
});

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let mapedArr = arrOfNumbers.map(a => a * 3);
console.log(mapedArr);
//
// - создать массив со словами на 15-20 элементов.

let fruits = ['Cherry', 'Blackberry', 'Apple', 'Fig', 'Grape', 'Lime', 'Mango', 'Melon', 'Nectarine', 'Pear', 'Raspberry',
    'Yuzu', 'Pea', 'Pomelo', 'Pomegranate', 'Kiwifruit', 'Guava'];
// console.log(fruits);

// -- отсортировать его по алфавиту в восходящем порядке.
//
let sortedFruits = fruits.sort();
console.log(sortedFruits);

// -- отсортировать его по алфавиту  в нисходящем порядке.
let sortedFruitsDN = fruits.sort(function (a, b) {
    if (a > b) {
        return -1
    }
    if (b > a) {
        return 1;
    }
    return 0;
});
console.log(sortedFruitsDN);

// -- отфильтровать слова длиной менее 4х символов

let less4symb = fruits.filter(fruit => fruit.length < 4);
console.log(less4symb);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

let mappedFruits = fruits.map(fruit => fruit + '!');
console.log(mappedFruits);
//
//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// // - відсортувати його за  віком (зростання , а потім окремо спадання)
let sortByAgeUp = users.sort((a, b) => a.age - b.age);
console.log(sortByAgeUp);

// __________________________________________________

let sortByAgeDn = users.sort((a, b) => b.age - a.age);
console.log(sortByAgeDn);
//
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

let sortByNameLenUP = users.sort(function (a, b) {
    if (a.name.length > b.name.length) {
        return 1
    }
    if (a.name.length < b.name.length) {
        return -1
    }
    return 0;
});
console.log(sortByNameLenUP);

// ---------------------------------------------------------
let sortByNameLenDN = users.sort(function (a, b) {
    if (a.name.length < b.name.length) {
        return 1
    }
    if (a.name.length > b.name.length) {
        return -1
    }
    return 0;
});
console.log(sortByNameLenDN);

//
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

const usersWithId = users.map((user, index) => {
    user.id = index + 1;
    return user;
});
console.log(usersWithId);
// - відсортувати його за індентифікатором
//
const usersWithIdDN = usersWithId.sort((a, b) => b.id - a.id);
console.log(usersWithIdDN);
//
// -- наисать функцию калькулятора с 2мя числами и колбеком
function calc1(a, b, callback) {
    return callback(a, b);
}

let summ = calc1(3, 5, (a, b) => {
    return a + b
});
console.log(summ);

// -- наисать функцию калькулятора с 3мя числами и колбеком
//
function calc2(a, b, c, callback) {
    return callback(a, b, c);
}

let result = calc2(3, 5, 3, (a, b, c) => {
    return ((a + b) * c)
});
console.log(result);

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
let cars = [
    {producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400},
    {producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250},
    {producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300},
    {producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140},
    {producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200},
    {producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165},
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180},
    {producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400},
    {producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230}];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

const filterVol3more= cars.filter(car =>car.volume > 3);
console.log(filterVol3more);

// - двигун = 2л
const filterVolIs2= cars.filter(car =>car.volume = 2);
console.log(filterVolIs2);

// - виробник мерс

const filterMers = cars.filter(car => car.producer === 'mercedes');
console.log(filterMers);


// - двигун більше 3х літрів + виробник мерседес

const filterMersVol3 = cars.filter(car => car.producer === 'mercedes' && car.volume >= 3);
console.log(filterMersVol3);

// - двигун більше 3х літрів + виробник субару
const filterSubaruVol3more = cars.filter(car => car.producer === 'subaru' && car.volume >= 3);
console.log(filterSubaruVol3more);

// - сили більше ніж 300

const filterPower300more = cars.filter(car => car.power > 300);
console.log(filterPower300more);

// - сили більше ніж 300 + виробник субару
const filterPow300Sub = cars.filter(car => car.power > 300 && car.producer === 'subaru');
console.log(filterPow300Sub);

// - мотор серіі ej

const filterEjEngine = cars.filter(car => car.engine.startsWith('ej'));
console.log(filterEjEngine);
// - сили більше ніж 300 + виробник субару + мотор серіі ej

const filterEjMore300Sub = cars.filter(car => car.power > 300 && car.producer === 'subaru' && car.engine.startsWith('ej'));
console.log(filterEjMore300Sub);

// - двигун меньше 3х літрів + виробник мерседес

const filterMersV3less = cars.filter(car => car.producer === 'mercedes' && car.volume < 3);
console.log(filterMersV3less);

// - двигун більше 2л + сили більше 250
const filterV2more250 = cars.filter(car => car.volume > 2 && car.power > 250);
console.log(filterV2more250);
// - сили більше 250  + виробник бмв
const filterBmw250 = cars.filter(car => car.power > 250 && car.producer === 'bmw');
console.log(filterBmw250);
//
//
//
// - взять слдующий массив
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
];

// -- отсортировать его по id пользователей

const sortByIdUp = usersWithAddress.sort((a, b) => a.id - b.id);
console.log(sortByIdUp);

// -- отсортировать его по id пользователей в обратном опрядке

const sortByIdDn = usersWithAddress.sort((a, b) => b.id - a.id);
console.log(sortByIdDn);

// -- отсортировать его по возрасту пользователей

const sortByAgeUp2 = usersWithAddress.sort((a, b) => a.age - b.age);
console.log(sortByAgeUp2);

// -- отсортировать его по возрасту пользователей в обратном порядке

const sortByAgeDn2 = usersWithAddress.sort((a, b) => b.age - a.age);
console.log(sortByAgeDn2);

// -- отсортировать его по имени пользователей

const sortByNameUp = usersWithAddress.sort((a, b) => a.name - b.name);
console.log(sortByNameUp);

// -- отсортировать его по имени пользователей в обратном порядке

const sortByNameDn = usersWithAddress.sort((a, b) => b.name - a.name);
console.log(sortByNameDn);

// -- отсортировать его по названию улицы  в алфавитном порядке

const sortByHomeStr = usersWithAddress.sort((a, b) => a.address.street - b.address.street);
console.log(sortByHomeStr);

// -- отсортировать его по номеру дома по возрастанию

const sortByHomeNum = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
console.log(sortByHomeNum);

// -- отфильтровать (оставить) тех кто младше 30

const filterByAge30less = usersWithAddress.filter((a) => a.age < 30);
console.log(filterByAge30less);

// -- отфильтровать (оставить) тех у кого отрицательный статус

const filterByStatusNeg = usersWithAddress.filter((a) => a.status === false);
console.log(filterByStatusNeg);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

const filterByStatNeg30less = usersWithAddress.filter((a) => a.status === false && a.age < 30);
console.log(filterByStatNeg30less);
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
    Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
function minMaxIndex(array,element) {
let minIndex = null;
let maxIndex = null;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
          if (!minIndex)minIndex = i;
          maxIndex = i;
      }
    }
    minIndex
    ?console.log(`MinIndex = ${minIndex}, MaxIndex = ${maxIndex}.`)
    :console.log(-1);
    }
minMaxIndex(Arr, 4);
