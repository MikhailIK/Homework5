// 1
let a;
let b;

function minNumber(a, b) {
    if (a < b) {
        console.log(a);
    } else {
        console.log(b)
    }
}

minNumber(5, 2);

// 2

function checkNumber(number) {
    if (number % 2 == 0) {
        console.log("Четное число");
    } else {
        console.log("Нечетное число");
    }
}

checkNumber(10);

// 3.1

function squareNumber(c) {
    console.log(c ** 2);
}

squareNumber(5);

// 3.2

function square(d) {
    return d ** 2;
}

console.log(square(5)); // Для проверки правильности
*/
// 4

function age() {
    let i = prompt("Сколько вам лет?");
    if (i >= 13) {
        alert("Добро пожаловать!");
    } 
    else if (i >= 0 && i <= 12) {
        alert("Привет, друг!");
    }

    else if (i < 0) {
        alert("Вы ввели неправильное значение");
    }
}
    age();

// 5

function askNumber () {
    num = prompt("Напишите число.");
    console.log(typeof(num));
}

askNumber();