// //presentation 3
// //1
// let fullName = prompt('Enter your full name')
// console.log(`Hello ${fullName}`)
// //2
// let value1 = prompt('Enter first number')
// let value2 = prompt('Enter second number')
// console.log(+value1 + Number(value2))
// console.log(+value1 - Number(value2))
// console.log(+value1 * Number(value2))
// console.log(+value1 / Number(value2))
// console.log(+value1 % Number(value2))

// //3
// console.log(`${12345*98765}`);
// console.log(`${12345*98765}`[5]);

// //4
// let value = prompt("ввести четырёхзначное число")
// console.log(+`${value}`[0] + Number(`${value}`[1]) + Number(`${value}`[2]) + Number(`${value}`[3]))

// //5

// let devide = fullName.split(' ')
// let firstname = devide[0]
// let surname = devide[1]
// console.log(`Hello ${firstname}!`)

// //presentation4
// //1
// let price = prompt('Enter a numbe in 530.90 format')
// let space = price.split('.')
// let rubl = space[0]
// let cent = space[1]

// console.log(`${rubl} руб. ${cent} коп. `)

// //2
// let moneyAmount = prompt('Enter you salary')
// moneyAmount = moneyAmount*87/100
// console.log(moneyAmount)

// //3
// let fullName1= prompt('Напишите Ф.И.О.')
// let yourName = fullName.split(' ')
// let name =yourName[1]
// let surname1 = yourName[0]
// let patronymic = yourName [2]
// console.log(surname +' '+ name[0]+ '. ' +  patronymic[0]+ '.')

//presentation5
//task2
// let age = prompt('Enter your age')
// if (age<18){
//     console.log('Access denied');
// }
// else{
//     console.log('Access granted');
// }
// //task3
// let enter = prompt('Enter 3 numbers')
// split = enter.split(' ')
// let firstNum = split[0]
// let secondNum = split[1]
// let thirdNum = split[2]
// if(( firstNum>secondNum) && (secondNum >thirdNum)){
//     console.log('Среднее число - ' + secondNum);
// }else if ((firstNum>thirdNum) && (thirdNum>secondNum)) {
//     console.log('Среднее число - ' + thirdNum);
// }else if((secondNum>firstNum) && (firstNum>thirdNum)) {
//     console.log('Среднее число - ' + firstNum);
// }else if ((thirdNum>firstNum) && (firstNum>secondNum)){
//     console.log('Среднее число - ' + firstNum);
// }else if((thirdNum>secondNum) && (secondNum>firstNum)){
//     console.log('Среднее число - ' + secondNum);
// }else if((secondNum>thirdNum) && (thirdNum>firstNum)){
//     console.log('Среднее число - ' + thirdNum);
// }else if((firstNum == secondNum) && (secondNum==thirdNum) &&(firstNum== thirdNum)){
//     console.log('Два или три введённых числа равны');
// }else ('Введено некорректное значение');