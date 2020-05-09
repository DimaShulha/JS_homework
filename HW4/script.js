// - створити функцію яка виводить масив

function arrayToConsole(array) {
    console.log(array);
}

arrayToConsole([1, false, "string"]);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function filledRandom(length) {
    let arrayRand = [];
    for (let i = 0; i < length; i++) {
        arrayRand.push(Math.floor(Math.random() * 100));
    }
    return arrayRand;
}

arrayToConsole(filledRandom(10));

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function getMin(x1, x2, x3) {
    return Math.min(x1, x2, x3)
}

console.log(getMin(330, 76, 55));

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function getMax(y1, y2, y3) {
    return Math.max(y1, y2, y3);
}

console.log(getMax(33, 25, 56));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function returnMinLogMax(min, max) {
    console.log(Math.max(...[...arguments]));
    min = Math.min(...[...arguments]);
    return min;
}

let someNumbers = returnMinLogMax(12, 34, 445, 84, 3, 55, 86, 98);

// // - створити функцію яка виводить масив

function arrayToConsole2(array) {
    console.log(array);
}

arrayToConsole2([1, 2, 3]);

// // - створити функцію яка повертає найбільше число з масиву

function returnMax(min, max) {
    return Math.max(...[...arguments]);
}

returnMax(12, 34, 445, 84, 3, 55, 86, 98);

// // - створити функцію яка повертає найменьше число з масиву

function returnMin(min, max) {
    return Math.min(...[...arguments]);
}

returnMin(12, 34, 445, 84, 3, 55, 86, 98);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function sumArray(array) {
    return array.reduce((sum, n) => sum + n);
}

console.log(sumArray([1, 2, 3]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function averageOfArr(array) {
    return array.reduce((sum, n) => sum + n) / array.length;
}

console.log(averageOfArr([1, 2, 3, 4, 5]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

function countObjectsInArr(array) {
    let counter = 0;
    for (const arrayElement of array) {
        if (typeof arrayElement === 'object')
            counter++
    }
    // console.log(counter);
    return counter;
}

countObjectsInArr([{a: 1}, {a: 1}, {a: 1}]);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function countFieldsInArr(array) {
    let counter = 0;
    for (const arrayElement of array) {
        if (typeof arrayElement === 'object')
            for (const field in arrayElement) {
                counter++;
            }

    }
    console.log(counter);
    return counter;
}

countFieldsInArr([{a: 1, b: 2}, {a: 1, b: 2, c: 3}, {a: 1}]);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5];

function summOfArrays(arr1, arr2) {
    let resultArray = [];
    for (let i = 0; i < arr1.length; i++) {
        resultArray.push(arr1[i] + arr2[i]);
    }
    return resultArray;
}

console.log(summOfArrays(arr1, arr2));

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

function addDivToHTML(someText) {
    const div = document.createElement('div');
    div.innerHTML = someText;
    document.body.appendChild(div);
}

addDivToHTML("Hello owu");

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function addDivToHTML2(tagName, someText) {
    const div = document.createElement(tagName);
    div.innerHTML = someText;
    document.body.appendChild(div);
}

addDivToHTML2('h1', 'Hello owu');


// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

let cars = [
    {model: 'Maxima', year: 2015, power: 315, colour: 'red'},
    {model: 'Rogue', year: 2012, power: 165, colour: 'silver'},
    {model: 'Passat', year: 2017, power: 235, colour: 'black'},
    {model: 'jetta', year: 2014, power: 176, colour: 'white'},
    {model: 'Golf', year: 2009, power: 165, colour: 'blue'},
    {model: 'Tiguan', year: 2008, power: 155, сolour: 'yellow'},
    {model: 'Megane', year: 2015, power: 131, colour: 'black'},
    {model: 'Talisman', year: 2017, power: 165, colour: 'blue'},
    {model: 'Kajar', year: 2007, power: 131, colour: 'brown'},
    {model: 'Koleos', year: 2019, power: 165, colour: 'red'},
];

function addCarListToHTML(array, id) {
    const divInHtml = document.getElementById(id);
    const ul = document.createElement('ul');
    for (let i = 0; i < array.length; i++) {
        const car = array[i];
        const li = document.createElement('li');
        li.innerText = `${car.model}`;
        ul.appendChild(li);
    }
    divInHtml.appendChild(ul);
}

addCarListToHTML(cars, 'car');

// Для кожного автомобіля створити свій блок, та додати його в елемент,
// індентифікатор якого ви отримали. Всі властивості авто в обному блоці

function addCarListToHTML2(array, id) {
    const divInHtml = document.getElementById(id);
    const ul = document.createElement('ul');
    for (let i = 0; i < array.length; i++) {
        const car = array[i];
        const li = document.createElement('li');
        li.innerText = `${car.model} ${car.year} ${car.power} ${car.colour}`;
        ul.appendChild(li);
    }
    divInHtml.appendChild(ul);
}

addCarListToHTML2(cars, 'cars2');
const cars2 = document.getElementById('cars2');


// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:

let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {
    id: 2,
    name: 'petya',
    age: 30,
    status: true
}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {
    user_id: 1,
    country: 'Ukraine',
    city: 'Ternopil'
}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

function concatById(usersArr, citiesArr) {
    for (const user of usersArr) {
        for (const city of citiesArr) {
            if (user.id === city.user_id) {
                user.address = city;
                citiesArr.push(user);
            }
        }
    }

    return usersArr;
}


const usersWithCities = concatById(usersWithId, citiesWithId);
console.log(usersWithCities);
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "