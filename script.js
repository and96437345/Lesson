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


$(".child11").click(function(){
    // $(this).toggleClass("isActive")
    $(this).parent().next().toggleClass("isActive")
    .parent() - выход на родителя
    .next() - следующий в узле
    .prev() - предыдущий в узле
    .children() - выход на ребенка
    .closest(".allParent") выход на allParent
    .find(".child44") поиск элемента child44
    .siblings() - все соседние элементы
})







