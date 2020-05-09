// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let item1 = {
    liquid: true,
    color: 'white',
    volume: 1
};
let item2 = {
    liquid: false,
    weight: 1,
    type: 'cereals'
};
let item3 = {
    name: 'cola',
    liquid: true,
    price: 25
};
let item4 = {
    availability: true,
    prodDate: '01/05/05',
    expDate: '01/05/06'
};
let item5 = {
    lable: 'tea',
    origin: 'china',
    type: 'oolong'
};


// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

let object1 = {
    title: 'student',
    name: 'Ihor',
    age: 20,
    edu: {city: 'Lviv', univercity: 'Lviv Politeh', faculty: 'telecomunications'},
    skills: ['java', 'js']
};
let object2 = {
    name: "Viktoria",
    isDeveloper: true,
    skills: ['java', 'js', 'HTML'],
    daughter: {daughterName: 'Ira', age: 7}
};
let object3 = {
    name: 'Petya',
    isDeveloper: true,
    skills: ['C++', 'Java', 'Go']
};
let object4 = {
    name: 'Max',
    isDeveloper: false,
    skills: ['fottbal', 'basketball']
};
let object5 = {
    name: 'Yarik',
    skills: ['python', 'java'],
    hobby: ['hiking', 'diving']
};


// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

let objects = [item1, item2, item3, item4, item5, object1, object2, object3, object4, object5];
// //
// for (let i = 0; i < objects.length; i++) {
//     for (const objectKeys in objects[i]) {
//         console.log(objectKeys);
//     }
// }

// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// for (let i = 0; i < objects.length; i++) {
//     console.log(Object.keys(objects[i]));
// }

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска,
// мощность, цвет. (Значаения полей могу быть выдуманными)
//
//
let cars = [
    {
        model: 'Maxima',
        year: 2015,
        power: 315,
        colour: 'red'
    },
    {
        model: 'Rogue',
        year: 2012,
        power: 165,
        colour: 'silver'
    },
    {
        model: 'Passat',
        year: 2017,
        power: 235,
        colour: 'black'
    },
    {
        model: 'jetta',
        year: 2014,
        power: 176,
        colour: 'white'
    },
    {
        model: 'Golf',
        year: 2009,
        power: 165,
        colour: 'blue'
    },
    {
        model: 'Tiguan',
        year: 2008,
        power: 155,
        colour: 'yellow'
    },
    {
        model: 'Megane',
        year: 2015,
        power: 131,
        colour: 'black'
    },
    {
        model: 'Talisman',
        year: 2017,
        power: 165,
        colour: 'blue'
    },
    {
        model: 'Kajar',
        year: 2007,
        power: 131,
        colour: 'brown'
    },
    {
        model: 'Koleos',
        year: 2019,
        power: 165,
        colour: 'red'
    },
];

//
// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let cities = [
    {
        name: 'Lviv', population: 750000, country: 'Ukraine', region: 'west'
    },
    {
        name: 'Prague', population: 1000000, country: 'Chech Republic', region: 'center'
    },
    {
        name: 'Krakow', population: 1500000, country: 'Poland', region: 'South'
    },
    {
        name: 'Lutsk', population: 350000, country: 'Ukraine', region: 'west'
    },
    {
        name: 'Kyiv', population: 2500000, country: 'Ukraine', region: 'center'
    },
];

// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
// // Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let cars2 = [
    {
        model: 'Maxima',
        year: 2015,
        power: 315,
        colour: 'red',
        driver: {name: 'Alex', age: 38, sex: 'male', experience: 5}
    },
    {
        model: 'Rogue',
        year: 2012,
        power: 165,
        colour: 'silver',
        driver: {name: 'Sasha', age: 31, sex: 'female', experience: 10}
    },
    {
        model: 'Passat',
        year: 2017,
        power: 235,
        colour: 'black',
        driver: {name: 'Oleg', age: 35, sex: 'male', experience: 15}
    },
    {
        model: 'jetta',
        year: 2014,
        power: 176,
        colour: 'white',
        driver: {name: 'Olena', age: 27, sex: 'female', experience: 3}

    },
    {
        model: 'Golf',
        year: 2009,
        power: 165,
        colour: 'blue',
        driver: {name: 'Victoria', age: 19, sex: 'female', experience: 1}
    },
    {
        model: 'Tiguan',
        year: 2008,
        power: 155,
        colour: 'yellow',
        driver: {name: 'Yoda', age: 150, sex: 'male', experience: 6}
    },
    {
        model: 'Megane',
        year: 2015,
        power: 131,
        colour: 'black',
        driver: {name: 'Nastya', age: 26, sex: 'female', experience: 7}

    },
    {
        model: 'Talisman',
        year: 2017,
        power: 165,
        colour: 'blue',
        driver: {name: 'Vasya', age: 65, sex: 'male', experience: 50}
    },
    {
        model: 'Kajar',
        year: 2007,
        power: 131,
        colour: 'brown',
        driver: {name: 'Ivan', age: 55, sex: 'male', experience: 70}
    },
    {
        model: 'Koleos',
        year: 2019,
        power: 165,
        colour: 'red',
        driver: {name: 'Petya', age: 48, sex: 'male', experience: 30}
    },
];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let indexCars= 0;
// while (indexCars < cars.length) {
//     console.log(cars[indexCars]);
//     indexCars++;
// }
//
// let indexCities= 0;
// while (indexCities < cities.length) {
//     console.log(cities[indexCities]);
//     indexCities++;
// }
//
// let indexCars2 =0;
// while (indexCars2 < cars2.length) {
//     console.log(cars2[indexCars2]);
//     indexCars2++;
// }

//
// // - проитерировать каждый массив из задания 5,6,7 при помощи for .
//
// let arrays = [cars, cities, cars2];
// for (let i = 0; i < arrays.length; i++) {
//     for (let j = 0; j < arrays[i].length; j++) {
//         console.log(arrays[i][j])
//     }
// }

// // - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// //let arrays = [cars, cities, cars2];
// for (let i = 0; i < arrays.length; i++) {
//     for (const object of arrays[i]) {
//         console.log(object);
//     }
// }
// - взять объекты из задания 1 и превратить каждый в json.
//
// let jsonItem1 = JSON.stringify(item1);
// console.log(jsonItem1);
//
// let jsonItem2 = JSON.stringify(item2);
// console.log(jsonItem2);
//
// let jsonItem3 = JSON.stringify(item3);
// console.log(jsonItem3);
//
// let jsonItem4 = JSON.stringify(item4);
// console.log(jsonItem4);
//
// let jsonItem5 = JSON.stringify(item5);
// console.log(jsonItem5);

// - взять json из задания 11 и превратить их обратно в объекты.

// let parsedItem1 = JSON.parse(jsonItem1);
//
// let parsedItem2 = JSON.parse(jsonItem2);
//
// let parsedItem3 = JSON.parse(jsonItem3);
//
// let parsedJsonItem4 = JSON.parse(jsonItem4);
//
// let parsedJsonItem5 = JSON.parse(jsonItem5);
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// for (let i = 0; i < cars.length; i++) {
//     const jsonCar = JSON.stringify(cars[i]);
//     console.log(jsonCar);
// }
// // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
//
// for (let i = 0; i < cities.length; i++) {
//     const jsonCity =JSON.stringify( cities[i]);
//     console.log(jsonCity);
// }
//
// // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
//
// let carsAdd = [];
// for (let i = 0; i < cars2.length; i++) {
//     const jsonCar2 = JSON.stringify(cars2[i]);
//     carsAdd[i]= jsonCar2;
//
// }
// console.log(carsAdd);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['python', 'java']},
//     {name: 'petya', age: 30, status: true, skills: ['js', 'react']},
//     {name: 'kolya', age: 29, status: true, skills: ['c++', 'java']},
//     {name: 'olya', age: 28, status: false, skills: ['python', 'go']},
//     {name: 'max', age: 30, status: true, skills: ['python', 'js']},
//
// ];
// for (let user of users) {
//     for (let skill of user.skills) {
//         console.log(skill);
//     }
//     console.log(user);
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив
//

// let Skills = [];
// let index = 0;
// for (let user of users) {
//     for (let skill of user.skills) {
//         Skills[index] = skill;
//         index++;
//     }
// }
// console.log(Skills);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// //
// for (let user of users) {
//     for (let skill of user.skills) {
//         console.log(skill);
//     }
//     console.log(user);
// }
//
//

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let adresses =[];
// i= 0;
// for (let user of users) {
//     adresses[i] = user.address;
//     i++;
// }
// console.log(adresses);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.

// for (let j = 0; j < users.length; j++) {
//     let userDiv  = document.createElement('div');
//     userDiv.innerText = JSON.stringify(users[j]);
//   document.body.appendChild(userDiv);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     let ul = document.createElement('ul');
//     for (let key in user) {
//         let li = document.createElement('li')
//         li.textContent = `${key}: ${user[key]}`;
//         ul.append(li);
//     }
//     console.log(ul);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//?????????????????????????????????????????????????////
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//
  let usersWithId = [
      {id: 1, name: 'vasya', age: 31, status: false},
      {id: 2, name: 'petya', age: 30, status: true},
      {id: 3, name: 'kolya', age: 29, status: true},
      {id: 4, name: 'olya', age: 28, status: false},
  ];

  let citiesWithId = [
      {user_id: 3, country: 'USA', city: 'Portland'},
      {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
      {user_id: 2, country: 'Poland', city: 'Krakow'},
      {user_id: 4, country: 'USA', city: 'Miami'},
  ];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let usersWithCities = [];
// for (const user of usersWithId) {
//     for (const city of citiesWithId) {
//         if (user.id === city.user_id) {
//             user.address = city;
//             usersWithCities.push(user);
//         }
//     }
// }
//
// console.log(usersWithCities);


// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let someId = document.getElementById('someId');
// let someClass = document.getElementsByClassName('someClass') [0];
// let someTag = document.getElementsByTagName('div') [0];
// console.log(someId.innerText);
// console.log(someClass.innerText);
// console.log(someTag.innerText);

// - змінити цей текст використовуючи селектори id, class,  tag

// someId.textContent = 'Changed text 1';
// someClass.textContent = 'Changed text 2';
// someTag.textContent = 'Changed text 3';


// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// someId.style.width = '150px';
// someClass.style.width = '200px';
// someTag.style.width = '250px';

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let table = document.createElement('table');
// let tr = document.createElement('tr');
// let td1 = document.createElement('td');
// let td2 = document.createElement('td');
// let td3 = document.createElement('td');
// td1.textContent = 'string 1';
// td2.textContent  = 'string 2';
// td3.textContent = 'string 3';
// tr.append(td1);
// tr.append(td2);
// tr.append(td3);
// table.append(tr);
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// const table = document.createElement('table');
// for (let i = 0; i < 10; i++) {
//   const tr = document.createElement('tr');
//   for (let j = 0; j < 3; j++) {
//     const td = document.createElement('td');
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// }
//
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
//
// const table = document.createElement('table');
// const rows = +prompt('enter number of rows');
// const columns  = +prompt('enter number of columns');
// for (let i = 0; i < rows; i++) {
//   const tr = document.createElement('tr');
//   for (let j = 0; j < columns; j++) {
//     const td = document.createElement('td');
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// }
//
// document.body.appendChild(table);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають id
// let elemsWithId = document.querySelectorAll('[id]');
// // - знайти всі параграфи ,та змінити текст на hello oktenweb!
// const tagsP = document.getElementsByTagName('p');
// for (let p of tagsP) {
//   p.innerText = 'hello oktenweb!'
// }
// //     - знайти всі div та змінити ім колір на червоний
// const divs = document.getElementsByTagName('div');
// for (let div of divs) {
//     div.style.color= 'red';
// }
//
// ============
// ====class===
//     ============
//
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//

// // Cannot read property 'appendChild' of null Чому???

const ul = document.createElement('ul') ;
const arrayH2 =document.getElementsByTagName("h2")
const content = document.getElementById('content');
for (let h2 of arrayH2) {
    const li = document.createElement('li');
    li.innerText = h2.innerText;
    ul.appendChild(li);
// ul.appendChild(li);
}
content.appendChild(ul);
document.body.appendChild(content);



// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// const wrap = document.createElement("div");
// wrap.id = "wrap";
//
// for (let i = 0; i < rules.length; i++) {
//     const rule = rules[i];
//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
//     div.className = `rules rules${i}`;
//     h2.innerText = rule.title;
//     p.innerText = rule.body;
//     div.appendChild(h2);
//     div.appendChild(p);
//
//     wrap.appendChild(div);
//
// }
//
// document.body.appendChild(wrap);