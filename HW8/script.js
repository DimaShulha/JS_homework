// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//

const textarea = document.getElementById('textarea');
textarea.value = localStorage.getItem('text');
textarea.oninput = (ev) => {
    localStorage.setItem('text', ev.target.value);
}
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
//
const form1 = document.getElementById('form');
getDataForm(form1)
function saveForm(t) {
    setDataForm(t)
}

function setDataForm(tag) {
    for (let i = 0; i < tag.length; i++) {
        if (tag.children[i].type === 'checkbox' || tag.children[i].type === 'radio')
            tag.children[i].checked
                ? tag.children[i].value = true
                : tag.children[i].value = false
        localStorage.setItem(tag.children[i].id, tag.children[i].value)
    }
}

function getDataForm(tag) {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.hasOwnProperty(tag.children[i].id)) {
            tag.children[i].value = localStorage.getItem(tag.children[i].id);
            if ( tag.children[i].value === 'true'){
                tag.children[i].setAttribute('checked', 'checked');
            }
        }
    }
}


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
const text = document.getElementById('text2');
const prevBtn = document.getElementById('prevBtn');
const fwdBtn = document.getElementById('fwdBtn');
const save = document.getElementById('saveForm');

save.onclick = () => {
    localStorage.setItem(localStorage.length + 1, text.value);
}
prevBtn.onclick = () => {
    fwdBtn.style.visibility = 'visible';
    let index;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (localStorage.getItem(key) === text.value) {
                index = key;
            }
        }
    }
    if (index === '1') {
        prevBtn.style.visibility = 'hidden';
        return;
    }
    text.value = localStorage.getItem(index - 1);
}

fwdBtn.onclick = () => {
    prevBtn.style.visibility = 'visible';
    let index;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (localStorage.getItem(key) === text.value) {
                index = key;
            }
        }
    }
    if (index === localStorage.length.toString()) {
        fwdBtn.style.visibility = 'hidden';
        return;
    }
    text.value = localStorage.getItem(+index + 1);
}



// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
