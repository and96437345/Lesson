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

// let obj = {
//     name:"Иван",
//     secondName:"Петров",
//     new:"Иванов",
//     adress:{
//         city: 'Курск',
//         street: 'Комарова',
//         number: '9',
//     }
// }

// obj.name = "не Иван"
// obj["name"] = "не Иван Х 2"
// // console.log(obj)

// for(let value in obj) {
//     console.log(value)
//     console.log(obj[value])
// }

// let x = prompt('First value')
// let y = prompt('Second value')
// function sum(xF,yF){
//     if (xF > yF){
//         console.log(xF + ' Больше ')
//     } else {
//         console.log(yF + ' Больше ')
//         console.log(`${yF} Больше`)
//     }
// }
// sum(x,y)

// let rect = {
//     a:20,
//     b:30,
// }

// function informRect(){
//     console.log("Первая точка 0,0")
//     console.log(`Вторая точка это 0,${rect.a}`)
//     console.log(`Третья точка это ${rect.b},${rect.a}`)
//     console.log(`Четвертая точка это ${rect.b},0`)
// }
// informRect()

// function perimeter(){
//     console.log(`Периметр равен ${(rect.a + rect.b)*2}`)
// }
// function square(){
//     console.log(`Площадь равна ${(rect.a * rect.b)}`)
// }
// perimeter()
// square()
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }

  });


    
