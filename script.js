// var name = 0;
// let name2 = 0;
// const constName = 0;
// console.log(constName)

// const block = document.querySelector(".block")
// console.log(block)
// const insideBlock = block.querySelector(".insideblock")

// alert(insideBlock)

// let value = prompt("Введите число", " ")
// alert(value **)

// let first = prompt ("first number", "")
// let second = prompt ("second number", "")
// alert((+first + +second) / 2)

// let a =0 
// console.log(a)

// document.querySelector(".block")
// $('.block').click(function() 
    // $(".block").toggleClass("newClass")
    // $(".block").addClass("newClass")
    // $(".block").removeClass("newClass")
//     $(this).toggleClass("newClass")
// })

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// let block = document.querySelector(".block")

// function nameFunction(x,y) {
//     console.log(x + y)   
// }
// nameFunction() 




// --- РЕКУРСИЯ ---------------

// let value = +prompt("Enter number", '')

// function factorial(value) {
//     if (value === 1) {
//         return value
//     }
//     return value*factorial(value - 1)
// }

// alert(factorial(value))

// -----------------------------


// $(".child11").click(function(){
//     // $(this).toggleClass("isActive")
//     $(this).parent().next().toggleClass("isActive")
//     .parent() - выход на родителя
//     .next() - следующий в узле
//     .prev() - предыдущий в узле
//     .children() - выход на ребенка
//     .closest(".allParent") выход на allParent
//     .find(".child44") поиск элемента child44
//     .siblings() - все соседние элементы
// })



// let old = prompt("Сколько Вам лет?", '39')

// if ((old < 0) && (old>120)) {
//     alert("Ваш возраст некорректный")
// } else alert("Ваш возраст корректный")



// let num = prompt("Введите число", "")
// if (num >= 0) {
//     alert(num)
// } else {
//     alert(-num)
// }


// let x = prompt("Введите координату X")
// let y = prompt("Введите координату Y")
// if (x == 0 && y == 0) {
//     alert("начало координат")
//     return
// }

// if (x > 0 && y > 0) {
//     alert("I четверть")
// }
// if (x < 0 && y > 0) {
//     alert("II четверть")
// }
// if (x < 0 && y < 0) {
//     alert("III четверть")
// }
// if (x > 0 && y < 0) {
//     alert("IV четверть")
// }



// let month = +prompt("Введите номер месяца")
// switch (month) {
//     case 1:
//         alert("Январь")      
//         break;
//     case 2:
//         alert("Февраль")      
//         break;
//     case 3:
//         alert("Март")      
//         break;
//     case 4:
//         alert("Апрель")      
//         break;
//     case 5:
//         alert("Май")      
//         break;
//     case 6:
//         alert("Июнь")      
//         break;
//     case 7:
//         alert("Июль")      
//         break;
//     case 8:
//         alert("Август")      
//         break;
//     case 9:
//         alert("Сентябрь")      
//         break;
//     case 10:
//         alert("Октябрь")      
//         break;
//     case 11:
//         alert("Ноябрь")      
//         break;
//     case 12:
//         alert("Декарь")      
//         break;
//     default:
//         alert("Нет такого месяца")  
//         break;
// }



// let x = +prompt("Введите первое число")
// let operation = prompt("Введите действие + - / *")
// let y = +prompt("Введите второе число")
// function Calc(xF,yF,operationF) {
// switch (operationF) {
//     case "+":
//         alert(xF + yF)        
//         break;

//     case "-":
//         alert(xF - yF)        
//         break;2

//     case "*":
//         alert(xF * yF)        
//         break;

//     case "/":
//         alert(xF / yF)        
//         break;

//     default:
//         break;
// }
// }
// Calc(x,y,operation)


// let x = +prompt("Введите количество")

// for (let i = 0; i < x; i++) {
//     console.log("#");
// }

// let x = +prompt("Введите количество")

// for (let i = 0; i < x; i++) {
//     console.log(x);
//     x--;
// }

// let array = new Array()

// let ar = [1,2,"test",true]
// console.log(ar.length)
// let arr = []
// arr[3] = 12
// arr[1] = 14
// console.log(arr[2])

// let array = [10,15,12,14,15,12,123,16,23,45]
// let sum = 0
// for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i]
// }
// console.log(sum)

// let array2 = [
//     [1,2,3],
//     [4,5,6],
// ]
// console.log(array2[0][0])
// console.log(array2[0][1])
// console.log(array2[0][2])

// 1. indexOf поиск слева направо
// let array = [10,15,12,14,15,12,123,16,23,45]
// let indexof = array.indexOf(123,[5])
// console.log(indexof)

// 2. lastIndexOf поиск справа налево

// let array = [12,144,114,21,12,14,14,12,234]
// let counter = 0

// let indexEl = array.indexOf(12)

// while(indexEl != -1) {
//     counter++
//     indexEl = array.indexOf(12, indexEl+1)
// }
// console.log(counter)

// let indexEl = array.lastIndexOf(12)

// while(indexEl != -1) {
//     counter++
//     if (indexEl == 0) {
//         break;
//     }
//     indexEl = array.lastIndexOf(12, indexEl+1)
// }
// console.log(counter)

// 3. sort - сортировка

// array = [124,561,361,512,123,51,51,5123,1,7,10,8]
// console.log(array.sort())

// function compareValue(a,b) {
//     if (a>b)
//         return 1
//     else if (a<b)
//         return -1
//     else
//         return 0
// }
// console.log(array.sort(compareValue))

// string.split(separator)
// let string = 'Яблоко Апельсин виноград'

// string = string.split(' ')

// // string.join(separator)
// console.log(string.join('-'))


// let array = [1,2,3,7,5,6,10,8,9,10]
// function alertArray(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (i%2 == 0){
//         sum += arr[i]
//         }
//     }

//     console.log(sum)
// }

// function sortArray(a,b){
//     if (a>b)
//     return 1
//     else if (a<b)
//     return -1
// }
// alertArray(array)

// let str = 'Какая-\tто текстовая \"надпись\"'

// alert(str)
// console.log(str[5])
// console.log(str.length)
// console.log(str.charAt(5))
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str.indexOf('ая'))
// console.log(str.lastIndexOf('ая'))

// let subst = str.substring(1,5)
// let subst = str.substr(0,5)
// console.log(subst)

// setTimeout( 
//     function() {
//         alert('hello')
//     },
//     1000
// )

// function sayHello(){
//     alert("hello")
// }
// setTimeout(sayHello(),1000)

// let timer = setInterval(boom,3000)
// let counter = 0
// function boom(){
//     console.log(counter)
//     counter++
//     if (counter > 3){
//         clearInterval(timer)
//         console.log("Boom")
//         return
//     }
// }

// console.log(Math.ceil(10.4))
// console.log(Math.floor(10.4))
// console.log(Math.round(10.4))
// console.log(Math.round(10.7))
// console.log(Math.pow(10, 4))
// console.log(Math.sqrt(10))

// let x = 10.5555555
// let y = x.toFixed(2)
// console.log(y)

// console.log(Math.floor(Math.random()*11))
// console.log(Math.random())

let date = new Date()
console.log(date)

console.log(Date.now())

let date1 = new Date("2020-10-20")
console.log(date1)