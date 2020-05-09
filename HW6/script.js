// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//
function tag(titleOfTag, action, titleOfAttr1, ActionOfAttr1,
             titleOfAttr2, ActionOfAttr2) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attributes = [{titleOfAttr1, ActionOfAttr1}, {titleOfAttr2, ActionOfAttr2}];
    console.log(this);
}

let tagA = new tag('a', 'предназначен для создания ссылок', 'href',
    'Задает адрес документа, на который следует перейти.', 'name',
    'Устанавливает имя якоря внутри документа.');

let tagDiv = new tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения ' +
    'фрагмента документа с целью изменения вида содержимого', 'align', 'Задает выравнивание содержимого тега <div>',
    'title', 'Добавляет всплывающую подсказку к содержимому');

let tagH1 = new tag('h1', 'Заголовок первого уровня', 'align', 'Определяет выравнивание заголовка',
    'style', 'Применяется для определения стиля элемента с помощью правил CSS.');

let tagSpan = new tag('span', 'Тег <span> предназначен для определения строчных элементов документа.',
    'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением',
    'id', 'Указывает имя стилевого идентификатора.');

let tagInput = new tag('input', '<input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков',
    'accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов',
    'autocomplete', 'Включает или отключает автозаполнение');

let tagForm = new tag('form', 'Связывает поле с формой по её идентификатору',
    'id', 'Указывает имя стилевого идентификатора',);

let tagOption = new tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
    'disabled', 'Заблокировать для доступа элемент списка',
    'label', 'Указание метки пункта списка.');

let tagSelect = new tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
    'autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.',
    'tabindex', 'Определяет последовательность перехода между элементами при нажатии на клавишу Tab');

//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================

class Tag {
    constructor(titleOfTag, action, titleOfAttr1, ActionOfAttr1,
                titleOfAttr2, ActionOfAttr2) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attributes = [{titleOfAttr1, ActionOfAttr1}, {titleOfAttr2, ActionOfAttr2}];
        console.log(this);
    }
}

let tagA_c = new Tag('a', 'предназначен для создания ссылок', 'href',
    'Задает адрес документа, на который следует перейти.', 'name',
    'Устанавливает имя якоря внутри документа.');

let tagDiv_c = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения ' +
    'фрагмента документа с целью изменения вида содержимого', 'align', 'Задает выравнивание содержимого тега <div>',
    'title', 'Добавляет всплывающую подсказку к содержимому');

let tagH1_c = new Tag('h1', 'Заголовок первого уровня', 'align', 'Определяет выравнивание заголовка',
    'style', 'Применяется для определения стиля элемента с помощью правил CSS.');

let tagSpan_c = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа.',
    'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением',
    'id', 'Указывает имя стилевого идентификатора.');

let tagInput_c = new Tag('input', '<input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков',
    'accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов',
    'autocomplete', 'Включает или отключает автозаполнение');

let tagForm_c = new Tag('form', 'Связывает поле с формой по её идентификатору',
    'id', 'Указывает имя стилевого идентификатора',);

let tagOption_c = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
    'disabled', 'Заблокировать для доступа элемент списка',
    'label', 'Указание метки пункта списка.');

let tagSelect_c = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
    'autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.',
    'tabindex', 'Определяет последовательность перехода между элементами при нажатии на клавишу Tab');
//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

let car = {
    model: 'Cruze', manufacturer: 'Chevrolet', year: 2015, maxSpeed: 215, engineCap: 2.0
};
car.drive = function () {
    console.log(`їдемо зі швидкістю ${car.maxSpeed} км/год`);
};

car.info = function () {
    console.log(car);
};


car.increaseMaxSpeed = function (newSpeed) {
    car.maxSpeed = car.maxSpeed + newSpeed;
};

car.changeYear = function (newValue) {
    car.year = newValue;
};

car.addDriver = function (driver = {}) {
    car.driver = driver;
};
car.addDriver({name: 'Mahmud', age: 22});
// console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2020);

// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//     максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//

function car2(model, manufacturer, year, maxSpeed, engineCap) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCap = engineCap;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} км/год`);
    };
    this.info = function () {
        console.log(this);
    };
    this.info = function () {
        console.log(this);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = maxSpeed + newSpeed;
        console.log(maxSpeed);
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(this.year);
    };
    this.addDriver = function (driver = {}) {
        this.driver = driver;
    };
}

let newCar = new car2('Maxima', 'Nissan', 2017, 200, 3.6);
newCar.drive();
newCar.info();
newCar.increaseMaxSpeed(20);
newCar.changeYear(2020);
newCar.addDriver({name: 'Mahmud', age: 22});
console.log(newCar);

// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
class Car {
    constructor(model, manufacturer, year, maxSpeed, engineCap) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCap = engineCap;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`model ${this.model}, manufacturer: ${this.manufacturer}, year: ${this.year}, Max speed: ${this.maxSpeed},
         engine volume: ${this.engineCap}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver = {}) {
        this.driver = driver;
    }
}

let car3 = new Car('Jetta', 'WV', 2010, 100, 2.0);
car3.drive();
car3.info();
car3.increaseMaxSpeed(50);
car3.changeYear(2020);
car3.addDriver({name: 'Vasya', age: 30});
console.log(car3);
//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let cinderells = [];
// for (let i = 0; i < 10; i++) {
//     const footSizeStart = 35;
//     const ageStart = 16;
//     cinderells.push(new Cinderella(`Cinderella${i + 1}`, ageStart + i, footSizeStart + i));
// }
// // console.log(cinderells);
// class Prince {
//     constructor(name, age, sizeOfShoe) {
//         this.name = name;
//         this.age = age;
//         this.sizeOfShoe = sizeOfShoe;
//     }
// }
// let prince = new Prince('Petya', 22, 37);
// for (const cinderella of cinderells) {
//     if (prince.sizeOfShoe === cinderella.footSize) {
//         console.log(`Prince ${prince.name} found a shoe of ${cinderella.name}!!!`);
//     }
// }

//
//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
function cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderells = [];
for (let i = 0; i < 10; i++) {
    const footSizeStart = 35;
    const ageStart = 16;
    cinderells.push(new cinderella(`cinderella${i + 1}`, ageStart + i, footSizeStart + i));
}

// console.log(cinderells);

function Prince(name, age, sizeOfShoe) {
    this.name = name;
    this.age = age;
    this.sizeOfShoe = sizeOfShoe;
    this.findCinderella = function (cinderells) {
        for (const cinderell of cinderells) {
            if (this.sizeOfShoe === cinderell.footSize) {
                console.log(`Prince ${this.name} found a shoe ${cinderell.name}.`)
            }
        }
    }
}

const prince = new Prince('Vasya', 33, 40);
prince.findCinderella(cinderells);





