// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
//
document.getElementById('hider').onclick = () => {
    document.getElementById('text').hidden = true;
}
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

document.getElementById('hideButon').onclick = () => {
    document.getElementById('hideButon').hidden = true;
}
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
//
document.getElementById('checkAge').onclick = () => {
    if (document.getElementById('age').value < 18) {
        alert('Too young!')
    } else {
        alert("Welcome!")
    }
};

// - Создайте меню, которое раскрывается/сворачивается при клике
//
document.getElementById('menu').onclick = () => {
    document.getElementById('menuItem').hidden = document.getElementById('menuItem').hidden !== true;
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
let comments = [
    {title: 'comment1', body: 'Lorem ipsum dolor sit amet'},
    {title: 'comment2', body: 'Lorem ipsum dolor sit amet'},
    {title: 'comment3', body: 'Lorem ipsum dolor sit amet'},
    {title: 'comment4', body: 'Lorem ipsum dolor sit amet'},
    {title: 'comment5', body: 'Lorem ipsum dolor sit amet'},
];

const comment = document.getElementById('comments');
comments.forEach(item => {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const button = document.createElement('button');
    button.onclick = () => {
        p.hidden ? p.hidden = false : p.hidden = true;
    }
    h3.innerHTML = item.title;
    p.innerHTML = item.body;
    button.innerHTML = 'Hide';
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(button);
    comment.appendChild(div);
});
document.body.appendChild(comment);

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

const logBtn = document.getElementById('logForms');
logBtn.onclick = () => {
    const form1 = document.forms.form1;
    const form2 = document.forms.form2;
    console.log(`Form 1: ${form1.input11.value} ${form1.input12.value}`);
    console.log(`Form 2: ${form2.input21.value} ${form2.input22.value}`);
};

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
const tableContainer = document.getElementById('tableContainer');

function createTable(rows, cols, tag) {
    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.innerHTML = i.toString() + j.toString();
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    tag.appendChild(table)
}

createTable(4, 5, tableContainer);


//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const rowsInput = document.getElementById('rows');
rowsInput.oninput = () => rows = parseInt(document.getElementById('rows').value);

const colsInput = document.getElementById('columns');
colsInput.oninput = () => cols = parseInt(document.getElementById('columns').value);

let contentInp = document.getElementById('content'), content;
contentInp.oninput = () => content = document.getElementById('content').value;

const btnCreate = document.getElementById('createTable2');
const tableContainer2 = document.getElementById('tableContainer2');

function createTable2(rows, cols, tag, content) {
    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    tag.appendChild(table)
}

btnCreate.onclick = () => createTable2(rows, cols, tableContainer2, content);


// (Додатковачастина для завдання)
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
 const censoredWords = [
     'someWord0',
     'someWord1',
     'someWord2',
     'someWord3',
     'someWord4',
     'someWord5',
     'someWord6',
     'someWord7',
     'someWord8',
     'someWord9',
 ];
let wordInp = document.getElementById('wordsForCheck'), word;
wordInp.oninput = () => word = document.getElementById('wordsForCheck').value;
let btnCheck = document.getElementById('checkWord');
function checkForCensoring(arr,word) {
    if (censoredWords.includes(word)) {
        alert('You enter censored word!')
    } else { alert("OK")}
return
}
btnCheck.onclick =(click) => checkForCensoring(censoredWords, word);

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//

let sentenceInp = document.getElementById('sentenceForCheck'), sentence;
sentenceInp.oninput = () => sentence = document.getElementById('sentenceForCheck').value;
let btnCheckSent = document.getElementById('checkSentence');

function checkSentForCensoring(arr, sentence) {
    for (let i = 0; i < censoredWords.length; i++) {
        if (sentence.includes(censoredWords[i])) {
            alert('alert')
        }
    }
}

btnCheckSent.onclick =(click) => checkSentForCensoring(censoredWords, sentence);

//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
const userContainer = document.getElementById('userContainer');
const chkStatus = document.getElementById('status');
const chkAge = document.getElementById('age');
const chkCity = document.getElementById('isKyiv');


//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
