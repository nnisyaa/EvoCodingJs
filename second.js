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
// if (!isNaN(year)) {
//   if(year>0){
//     if(year%4 == 0){
//         if(year%100 == 0 && year%400 != 0){
//             console.log('this year isnt high')
//         }
//         console.log('this is a high year');
//     }else{
//         console.log('this year isnt high');
//     }
//   }else{
//     console.log('Please enter a correct year');
//   }
// }else{
//     console.log('Enter a number')
// }







//presentation6 swich case

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
// let numbers =prompt('Enter 3 numbers')
// let enter = numbers.split(' ')
// let num1 = enter[0]
// let num2 = enter[1]
// let num3 = enter[2]
// function maxNum (num1, num2, num3){
//     if(num1<num2 && num2<num3){
//         console.log(num3)
//     }
//     else if(num2<num1 && num1<num3){
//         console.log(num3)
//     }
//     else if(num1<num3 && num3<num2){
//         console.log(num2)
//     }
//     else if(num3<num1 && num1<num2){
//         console.log(num2)
//     }
//     else if(num3<num2 && num2<num1){
//         console.log(num1)
//     }
//     else if(num2<num3 && num3<num1){
//         console.log(num1)
//     }
// }
// maxNum(num1, num2, num3) 
//task4
// let rublBalance = prompt('Enter your rubl balance')
// let dollarBalance = prompt('Enter your dollar balance')
// let numRublBalance = +rublBalance
// let numDollarBalance = +dollarBalance
// function changeDollartoRubl(numDollarBalance, numRublBalance){
//    numDollarBalance *= 75
//    let fullBalance = numDollarBalance + numRublBalance
//    console.log(`The full balance is ${fullBalance} rubl`); 
// }
// changeDollartoRubl(numDollarBalance, numRublBalance)



//presentation8 functions-return
//task1
// let numbers = prompt('Enter 2 numbers')
// let enter = numbers.split(' ')
// let num1 = enter[0]
// let num2 = enter[1]
// function min(num1, num2){
//     if(Number(num1)<Number(num2)){
//         return num1
//     }else{
//         return num2
//     }
// }
// let minNum = min
// console.log(minNum(num1,num2));
//task3
// function calc(num1,num2,operation){
//     switch(operation){
//         case '+':
//             console.log(num1 + num2);
//         break;
//         case '-':
//             console.log(num1 - num2);
//         break;
//         case '*':
//             console.log(num1 * num2);
//         break;
//         case '/':
//             console.log(num1 / num2);
//         break;
//     }
// }
// let num1 = Number(prompt('Enter 1st number'))
// let num2 = Number(prompt('Enter 2nd number'))
// let operation = prompt('Enter the operation')
// calc(num1,num2,operation)
//task4
// let enterNumber = prompt('Enter a number with six positions ')
// function isLucky(enterNumber){
//   let num1 = +enterNumber[0]
//   let num2 = +enterNumber[1]
//   let num3 = +enterNumber[2]
//   let num4 = +enterNumber[3]
//   let num5 = +enterNumber[4]
//   let num6 = +enterNumber[5]

//   if(enterNumber.length == 6){
//     if( num1 + num2 + num3 == num4 + num5 + num6){
//         console.log('The number is lucky');
//     } else{
//         console.log('The number is not lucky');
//     }
//   }
//   else{
//     console.log('Please write a 6 positioned number');
//   }
// }
// isLucky(enterNumber)  



//presentation9 function-practice
//task1
// function isEven (evenNum){
//     if(evenNum%2 == 0){
//         console.log(true)
//     }
//     else{
//         console.log(false);
//     }
// }
// let evenNum = Number(prompt('Enter a number'))
// isEven(evenNum)
//task2
// function fourth(num){
//     return num**4
// }
// let num = Number(prompt('Enter a number'))
// console.log(fourth(num));
//task3
// function isValid(telephoneNumber){
//     if(telephoneNumber.length == 12 && telephoneNumber[0] == '+' && telephoneNumber[1] == '7'){
//         console.log(true)
//     }
//     else{
//         console.log(false)6 епымсч
//     }
// }
// let telephoneNumber = prompt('Enter a telephone number')
// isValid(telephoneNumber)
//function youtube
// const brokenLinks = ['vk', 'youtube', 'facebook']
// const fixLinksArray = (linkArray)=>{
//     const correctLink = []
//     linkArray.array.forEach(element => {
        
//     });
    
    

// }





//presentation10 while loop
// let num = 1
// while(num < 5){
//     console.log(num);
//     num ++
// }
//task1
// let n = +prompt('Enter a two positioned number')
// let k = +prompt('Enter the encrease step')
// while(n<100){
//     console.log(n);
//     n = n+k
// }
//task2
// let n2 = +prompt('Enter a number')
// while(n2>0){
//     console.log("I know how to use loops");
//     n2--
// }
//task3
// let num = 100
// while(num<1000){
//     console.log(num);
//     num += 10
// }
//task n
// let num = 0
// let count = 0
// while(num<100){
//     num++
//     if(num%7===0){
//         count++
//     }
// } console.log(count);
//task4
// let num = 10
// let sum = 0
// while(num<100){
//     num++
//     if(num%2 === 1){
//         sum = sum + num
//     }
// }
// console.log(sum);
//task5
// let enteredNum = +prompt('Enter a number')
// let sum = 0
// let num = 99
// while(num<999){
//     num++
//     if(num%enteredNum === 0){
//         console.log(num);
//         sum = sum + num
//     }
// }
// console.log(sum);
//task6 не знаю как сделать




//presentation11 for 
//task1
// let multiplication = 1
// for (let i = 1; i <10; i++){
//     multiplication = multiplication * i
// }
// console.log(multiplication);
//task n
// const str = 'Nisa Hasratova'
// for(let i = 0;i<str.length;i++){
//     console.log(str[i]);
// }
//task2
// let str = prompt('Enter a sentence')
// for(let i = str.length; i > 0; i--){
//     console.log(str[i - 1]);
// }

// let text = ('Hello. World.')
// for(i = 0; i<text.length; i++){
//     if(text[i] === '.'){
//         continue
//     }
//     console.log(text[i]);
// }



//task3
// let text = prompt('Enter a sentence')
// for(let i = 0; i<text.length; i++){
//     if(text[i] === '.'){
//         console.log(i);
//         break
//     }
// } 
//task4
// let text = prompt('Enter a sentence')
// for(let i = 0; i<text.length; i++ ){
//     if(text[i] == parseInt(text[i])){
//         console.log('This sentence has a number');
//     }
// }



//FOR AND WHILE FROM YOUTUBE
//ex1
// for(let i = 0; i<4; i++){
//     console.log(i);
// }
// console.log('');
//ex2
// const array = ['a', 'b', 'c','d', 'e', 'f']
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
// console.log('');
//ex3
// const array = ['a', 'b', 'c','d', 'e', 'f']
// for(let i = array.length; i>0; i--){
//     console.log(array[i-1]);
// }
//ex4
// let word = '';
// while(word.length<5){
//     const value = prompt('Enter a letter')
//         if(value.length === 0){
//             break;
//         }
//     word = word + value;
//     console.log(word);
// }
//ex5 DO WHILE
// let x = 0
// do{
//     console.log(x);
//     x++
// }while(x<=3)
//ex6 FOR OF
// const array = ['a', 'b', 'c','d', 'e', 'f']
// for(let letter of array){
//     console.log(letter);
// }
//task1
// let num = 1
// while(num<10){
//     console.log(num);
//     num++
// }
//task2
// let num2 = +prompt('Enter a number')
// for(let i = 1;i <=10;i++ ){
//     if(!isNaN(num2)){
//         let res = num2*i
//         console.log(`${num2} * ${i} = ${res}`);
//     }else{
//         console.log('error');
//     }
// }
//task3
// let num = +prompt('Enter a number') // 3
// let sum = 0
// let i = 0
// while(i<num){
//     i++
//     sum = sum + i
// }
// console.log(sum);
//task4
// let sen = prompt('Enter a sen')
// for (let i = sen.length; i > 0; i--){
//     console.log(sen[i-1]);
// }



// let fullName = prompt('Enter your name')
// let fullName1 = prompt('Enter your name')
// let fullName2 = prompt('Enter your name')
// function yourNameIS(fullName = ' '){
//     console.log(`${fullName} is active now`);
// }
// yourNameIS(fullName)
// yourNameIS(fullName1)
// yourNameIS(fullName2)


//presentation 12 array
//task1
// let names = ['Nisa', 'Said', 'Elvina']
// names[1] = 'Classified'
// console.log(names);
//task2
// let array = ['Новая надежда', 'Империя наносит ответный удар', 'Возвращение джидая']
// for(let i = 0; i < array.length; i ++){
//     console.log(`Эпизод ${i + 4}: ${array[i]}`);
// }
//task3
// let num = prompt('Enter 5 numbers')
// let arr = num.split(',')
// for(let i = 0; i<5; i++){
//     if(arr[i]<arr[0]) arr[0] = arr[i]
// }
// console.log(arr[0]);



//ВТОРОЙ КРУГ
//функции 
// function logArg(){
//     for(let argument of arguments){
//         console.log(argument);
//     }
//     console.log('stop');
// }
// logArg(1,2,3,4)

//presentation classes
// //task1 
// class Person{
//     constructor(surname,name,age,gender){
//         this.surname = surname
//         this.name = name
//         this.age = age
//         this.gender = gender
//     }
// }

// const person1 = new Person('Hasratova', 'Nisa', 20, 'Female')
// const person2 = new Person('Mustafayeva', 'Elvina', 21, 'Female')
// const person3 = new Person('Huseynova', 'Fidan', 21, 'Female')
// console.log(person1,person2,person3);
// task2
// class Person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     celebrateBirthday(){
//         this.age++
//     }
// }
// const person1 = new Person('Nisa', 20)
// person1.celebrateBirthday()
// console.log(person1);
//presentation classes oop
//task1
// class Person{
//     constructor(surname,name,age,gender){
//         this.surname = surname
//         this.name = name
//         this.age = age
//         this.gender = gender
//     }
// }
// class Admin extends Person{
//     constructor(surname,name,age,gender,role,id){
//         super(surname,name,age,gender)
//         this.role = role
//         this.id = id
//     }
// }
// class Pleyer extends Person{
//     constructor(surname,name,age,gender,level){
//         super(surname,name,age,gender)
//         this.level = level
//     }
// }
//task2
// class Person{
//     constructor(surname,name,age,gender){
//         this.surname = surname
//         this.name = name
//         this.age = age
//         this.gender = gender
//     }
//     rename(name){
//         this.name = name
//     }
// }
// class Admin extends Person{
//     constructor(surname,name,age,gender,role,id){
//         super(surname,name,age,gender)
//         this.role = role
//         this.id = id
//     }
// }
// const admin1 = new Admin('Anney','Ann', 25,'Female', 'Designer', 21)
// admin1.rename('Nany')
// console.log(admin1);