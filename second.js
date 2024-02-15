// //presentation4


// //2
// let moneyAmount = prompt('Enter you salary')
// moneyAmount = moneyAmount*87/100
// console.log(moneyAmount)




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

//task4
// let year = prompt('Enter a random year')
// if(year%4 == 0){
//     if(year%100 == 0 && year%400 != 0){
//         console.log('this year isnt high')
//     }
//     console.log('this is a high year');
// }else{
//     console.log('this year isnt high');
// }




//presentation6 swich case
// //task1
// let id = prompt('введите id товара:');
// switch(id){
//     case '1':
//         alert('В наличии 10 шт.');
//         break;
//     case '2':
//         alert('В наличии 256 шт.');
//         break;
//     case '3':
//         alert('В наличии 53 шт.');
//         break;
//     case '4':  
//         alert('В наличии 3 шт.');
//         break;
//     default:
//         alert('Нет в наличии');    
// }

// //task2
// let gender = prompt('Enter your gender as F or M')
// let whatIsYourGender = gender == 'F' || gender == 'f'?
// 'Female': 'Male'
// console.log(whatIsYourGender)

// task3
// let date = prompt('Enter the date in this format "YYYY.MM.DD"')
// dote = date.split('.')
// let year = dote[0]
// let month = dote[1]
// let day = dote[2]
// switch(month){
//     case '01':
//         dote[1] = 'January';
//     break;
//     case '02':
//         dote[1] = 'February';
//     break;
//     case '03':
//         dote[1] = 'March';
//     break;
//     case '04':
//         dote[1] = 'April';
//     break;
//     case '05':
//         dote[1] = 'May';
//     break;
//     case '06':
//         dote[1] = 'June';
//     break;
//     case '07':
//         dote[1] = 'July';
//     break;
//     case '08':
//         dote[1] = 'August';
//     break;
//     case '09':
//         dote[1] = 'September';
//     break;
//     case '10':
//         dote[1] = 'October';
//     break;
//     case '11':
//         dote[1] = 'November';
//     break;
//     case '12':
//         dote[1] = 'December';
//     break;
// }
// console.log(`${day} ${dote[1]} ${year} года`);

// //presentation7 functions
// //task1
// let Fullname = prompt('Enter your name')
// function logGreeting (){
//     console.log(`${Fullname} is a developer`)
// }
// logGreeting()
// //task2
// function yourName1(Fullname1){
//     console.log(`${Fullname1} is active now`);
// }
// yourName1('Nisa Hasratova')
// yourName1('Said Hasratli')
//task3
function maxNum (num1, num2){
    if(num1<num2){
        console.log(num2)
    }
    else{
        console.log(num1);
    }
}
// maxNum(2, 3) //нужно переделать для 3х элементов
// //task4