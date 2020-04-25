// Зробити свій розпоряжок дня.
//
//     Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
//     Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
//     Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не
//     успішне виконання.
//     Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
//     Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте -
// Поїхали до дому - Повчились - Лягли спати.
//
//     Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції
//     доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.

let chance = 0;
function myDay(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(message)
                : reject('Decided to sleep more.')
        }, 1000)

    })
}

function washUp(message) {
    console.log('Wash up!');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(message)
                : reject('No water.')
        }, 1000)
    })
}

function breakfast(message) {
    console.log('Time for breakfast.');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance

                ? resolve(message)
                : reject('No food in fridge')
        }, 1000)
    })
}

function goToWork(message) {
    console.log('Go to work');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(message)
                : reject('Traffic jam.')
        }, 2000)
    })
}

function working(message) {
    'Do my work.'
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(message)
                : reject('Carantine, go home!')
        }, 3000)
    })
}

function coffeBreak(message) {
    console.log('Time for coffee.');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(message)
                : reject('No coffee.')
        }, 1000)
    })
}

function dinner(message) {
    console.log('Time for dinner');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(message)
                : reject('Forgot my pocket.')
        }, 2000)
    })
}

function goHome(message) {
    console.log('finished work, go home!');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(message)
                : reject('Traffic Jams')
        }, 3000)
    })
}

function goToMarket(message) {
    console.log('Need to buy something.');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(message)
                : reject('no money')
        }, 3000)
    })
}

function study(message) {
    console.log('Listen the lection');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(message)
                : reject('Some reason')
        }, 3000)
    })
}

function goToSleep(message) {
    console.log('Go to sleep.');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(message)
                : reject('Insomnia.')
        }, 3000)
    })
}

myDay('alarmClock')
    .then((result) => {
        console.log(result);
        return washUp('Washed')
    })
    .then((result) => {
        console.log(result);
        return breakfast('eat breakfast')
    })
    .then((result) => {
        console.log(result);
        return goToWork('Driving to work')
    })
    .then((result) => {
        console.log(result);
        return working('Work hard')
    })
    .then((result) => {
        console.log(result);
        return coffeBreak('Coffe')
    })
    .then((result) => {
        console.log(result);
        return dinner('eat dinner')
    })
    .then((result) => {
        console.log(result);
        return goHome('Driving to home')
    })
    .then((result) => {
        console.log(result);
        return goToMarket('Buying smth')
    })
    .then((result) => {
        console.log(result);
        return study('Learn JS')
    })
    .then((result) => {
        console.log(result);
        return goToSleep('Sleeping')
    })
    .catch((error) => console.log(`error ${error}`));