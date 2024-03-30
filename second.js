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
// function isEven (num){
//     if(num%2 == 0){
//         console.log(true)
//     }
//     else{
//         console.log(false);
//     }
// }
// let evenNum = Number(prompt('Enter a number'))
// let evenNum2 = Number(prompt('Enter a number'))
// isEven(evenNum)
// isEven(evenNum2)
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
//task4
// let value = prompt('Enter a sentence')
// let count = 0
// function numCounter(){
//     for(let i = 0;i < value.length;i++){
//         if(!isNaN(value[i])){
//             count ++
//         }
//     }
//     return count
// }
// console.log(numCounter());
//function youtube стрелочные 
// function sum(a,b){
//     return a +b
// }
// console.log(sum(2,3))
// let sum2 =  (a,b) => a + b
// console.log(sum2(2,3));
//task
// let count = 0
// setInterval(()=> console.log(++count),300)
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
//for In
// const user = {
//     name: 'Nisa',
//     age: 20,
//     isMarried: false,
// };
// for(let key in user){
//     console.log(key, user[key]);
// }







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

//presentation 13
//task1
// let classmates = ['Nisa Hasratova' , 'Elvina Mustafayeva' , 'Fidan Huseynova']
// classmates.push('Fidan Aleskerli')
// classmates.shift()
// console.log(classmates);
//task2
// let sen = '32, 31, 34, 36, 31'
// let arr = sen.split(',')
// let sen2 = arr.join(';')
// console.log(sen2);
//task3
// const numbers=[1, 2 ,3, 4, 5 ,6, 7, 8, 9, 10]
// const [firstNum, secondNum, ...otherNums] = numbers
// console.log(firstNum,secondNum,otherNums);
//task4
// const numbers=[1, 2 ,3, 14, 5 ,6, 7, 8, 9, 10]
// console.log(Math.max(...numbers))
//task5 НЕ СМОГЛА СДЕЛАТЬ ААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА



//presentation 14 arrays practice
//task1
// let employees = [
//     [ 'Jaylee Macy', 'marketing' ],
//     [ 'John Smith', 'management' ],
//     [ 'Blossom Hartley', 'design' ],
//     [ 'Austin Carpenter', 'marketing' ],
//     [ 'Joan Knowles', 'development' ],
//     [ 'Sally Nunez', 'management' ],
//     [ 'Joan Knowles', 'development' ],
//     [ 'Lark Simon', 'marketing' ],
//     [ 'Jane Stone', 'management' ],
//     [ 'Courtney Olson', 'development' ],
//   ];
  
// let development = []
// for(let i = 0; i < employees.length;i++){
//         if(employees[i][1] === 'development'){
//             development.push(employees[i])
//         }
// }
// console.log(development);



// //presentation 15 for each
// let array = [1,2,3,4,5]
// function callback(num,index){
//     console.log(`index of the ${num} is ${index}`);
// }
// array.forEach(callback)
//task1
// let array = [2,3,-2,0,-1,]
// function logNegatives(item){
//     if(item < 0){
//         console.log(item);
//     }
// }
// array.forEach(logNegatives)
//task2
// array = [2,3,-2,0,-3]
// array.forEach((item)=> {
//     if(item > 0){
//         console.log(item);
//     }
// });
//task3
// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// function printWithHearts(name,index){
//     console.log(`<3<3<3<3${name}<3<3<3<3`);
// }
// function printWithIndex(name,index){
//     console.log(`${index} - ${name}`);
// }
// function printWithDashes(name,index){
//     console.log(`-------------`);
//     console.log(`${name}`);
//     console.log(`-------------`);
// }
// names.forEach(printWithDashes)
// names.forEach(printWithHearts)
// names.forEach(printWithIndex)
//task4
// let sen = 'fisrt-user'
// let sen2 = sen.split('-')
// function upper(element,index,array){
//     array[index] = element.toUpperCase()
//     let sen3 = sen2.join('_')
//     console.log(sen3);
// }
// sen2.forEach(upper)
//task from youtube
// let fruits = ['apple' , 'orange']
// function upperCase(element,index,array){
//     console.log(array[index] = element.toUpperCase());
    
// }
// fruits.forEach(upperCase)
//task5 НЕ СМОГЛА СДЕЛАТЬ ААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААААА




 

//presentation 16 map find and filter methods
//task
// const arr = [1,2,3,4]
// const newArr = arr.map((item) =>  item + 5)
// console.log(newArr);
//task1
// const arr = [1,-1,2,-2,3,-3]
// const newArr = arr.map((item)=>{
//     if(item>0){
//         return item*2
//     }else{
//         return item * -1
//     }
// })
// console.log(newArr);
//task2
// const arr = ['first','second','Ann'];
// const threeSymbols = arr.find((item)=> item.length == 3)
// console.log(threeSymbols);
//task3
// let names = ['Sam', 'Alan', 'Bill', 'Adam', 'Anna', 'George'];
// const firstLetterA = names.filter((item) => item[0] == 'A')
// console.log(firstLetterA);
//task4
// const price = [100,20,43,13,42,4]
// const addTax = price.map((item) => item + (item*20/100))
// console.log(addTax);
//task5
// let even = 0
// let odd = 0
// let arr = [10,11,12,13,14,15,16]
// let newArr = arr.map((item)=>{
//         if(item % 2 === 0){
//           even ++
//         }else{
//            odd ++ 
//         }
// })
// console.log(`there are ${even} even numbers and ${odd} odd numbers in this array`);



//presentation17 sort
// let arr = [1,5,1,5,54,14,2,13,87,4,6,45,8,3,7,95,87,6,53]
// arr.sort((a,b) => b- a)
// console.log(arr);
//task1
// let names = ['Hofstadter', 'Cooper', 'Wolowitz', 'Koothrappali'];
// names.sort((a,b) => b.localeCompare(a))
// console.log(names);



//presentation18 objects
//task1
// let User = {
//     name: 'Nisa',
//     birthday: '08.08.2003',
//     gender: 'Female',
// }
// console.log(User.birthday);
// //task2
// delete User.birthday
// User.age = 20
// console.log(User);
// //task3
// let  stockItem = {
//     id:1,
//     place:'Baku',
//     weight:'20kg'
// }
// let shopItem = {...stockItem,price: '10azn'}
// delete shopItem.place
// console.log(shopItem);



//presentation19 objects methods
//task
// const player = {
//     name:'John',
//     greet(){
//         console.log('Hello');
//     }
// }
// player.greet()
//task
// let car = {
//     brand : 'Toyota',
//     year: 2003,
//     changeYear(newYear){
//         this.year = newYear
//         console.log(newYear);
//     }
// }
// car.changeYear(2005)
// console.log(car);
//task2
// let client ={
//     fullName: 'Nisa Hasratova',
//     creditLimit: 1000,
//     balance: -200,
//     precentOfMinPayment : 20,
//     getBalance(){
//         if(this.balance>0){
//             console.log(`Your balance is ${this.balance}$`);
//         }else{
//             console.log(`Your debt is ${this.balance * -1}$`);
//         }
//     },
//     getMinPayment(){
//         if(this.balance < 0){
//             console.log(`Your minimal payment is ${-1 * this.balance*20/100}`);
//         }else{
//             console.log(`Your dont have debt `);
//         }
//     },
//     withdraw(spentMoney){
//         if(spentMoney > this.balance + this.creditLimit){
//             console.log(`Your balance is not enough`);
//         }else{
//             this.balance = this.balance - spentMoney
//             console.log(`You spent ${spentMoney}$ and your current ballance is ${this.balance}$`);
//         }
//     },
//     refill(sendMoney){
//         this.balance = this.balance + sendMoney
//         console.log(`You got + ${sendMoney}$. Your balance is ${this.balance}$`); 
//     },
// }
// client.refill(40)
// client.withdraw(20)
// client.getBalance()
// client.getMinPayment()






//presentation22 classes
//task1 
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
//task2
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
//task3
// class Person{
//     constructor(id,name,lastname,age,balance){
//         this.id = id,
//         this.name = name,
//         this.lastname = lastname,
//         this.age  = age,
//         this.balance = balance
//     }
//     str(){
//         console.log(`ID - ${this.id}`)
//         console.log(`Lastname - ${this.lastname}`)
//         console.log(`Name - ${this.name}`)
//         console.log(`Age - ${this.age}`)
//         console.log(`balance - ${this.balance}`)   
//     }
// }
// const person1 = new Person('1','Nisa', 'Hasratova', 20, 200)
// person1.str()
//task4
// class Transaction{
//     constructor(fromClient,toClient,amount, commission){
//         this.fromClient = fromClient
//         this.toClient = toClient
//         this.amount = amount
//         this. commission =  5
//     }
//     calculateCommision(){
//         console.log(this.commision = this.amount * this.commission /100 ); 
//     }
// }
// const transaction1 = new Transaction('Nisa', 'Fidan', 2000)
// transaction1.calculateCommision()






//presentation23 classes oop
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
//task3
// class SimpleCalc{
//     constructor(number){
//         this.number = number
//     }
//     plus(number){
//         console.log(this.number + number);
//     }
//     mult(number){
//         console.log(this.number * number);
//     }
//     divide(number){
//         console.log(this.number / number);
//     }
//     minus(number){
//         console.log(this.number - number);
//     }
//     toString(){
//         let str = this.number + ''
//         console.log(str); 
//     }
// }
// const simpleCalc = new SimpleCalc(8);
// simpleCalc.mult(10);
// simpleCalc.plus(2);
// simpleCalc.minus(7);
// simpleCalc.divide(5);
// simpleCalc.toString();

// class ProgrammerCalc extends SimpleCalc{
//     constructor(number){
//         super(number)
//     }
//     toString(){
//         if (this.number === 0) {
//             return '0';
//         }
        
//         let binary = '';
//         while (this.number > 0) {
//             let remainder = this.number % 2;
//             binary = remainder + binary;
//             this.number = Math.floor(this.number / 2); 
//         }
        
//         return binary;
        
//     }
// }
// let calc1 = new ProgrammerCalc(20)
// calc1.divide(2)
// calc1.plus(3)
// console.log(calc1.toString());






//presentation25 DOM elements
//task1
// const listElement = document.querySelector('li')
// console.log(listElement);
//task2
// let header = document.querySelector('h1')
// header.remove()
// let list = document.querySelector('ul')
// let newListElement = document.createElement('li')
// newListElement.textContent = '«TITAN RTX»'
// list.append(newListElement)
//task3
// let header = document.querySelector('h1')
// header.textContent = 'GeForce 20 Series'
// let primary = document.querySelector('.primary')
// let primary2 = document.querySelector('li:last-child')
// primary.style.backgroundColor = '#ebebeb'
// primary2.style.backgroundColor = '#ebebeb'




//presentation26 elements collection
//task1
// let elements = document.querySelectorAll('.primary')
// elements.forEach((element)=> console.log(element))
//task2
// let elements = document.querySelectorAll('li')
// elements.forEach((item)=>{
//     item.classList.add('item')
//     if(!item.classList.contains('primary')){
//         item.classList.add('secondary')
//     }
// })




//presentation28 Add Event Listener
//1
// function showALter(){
//     alert('Hello World')
// }
// let button = document.querySelector('button')
// button.addEventListener('click', showALter)
//2
// function changeText(event){
//     event.target.innerText = 'clicked'
// }
// function changeColor(event){
//     event.target.style.backgroundColor = 'yellow'
// }
// let button = document.querySelectorAll('button')
// button.forEach((element)=>{
//     element.addEventListener('click', changeText)
//     element.addEventListener('click', changeColor)
// })
//3
// function changeText(event){
//     event.target.innerText = 'clicked'
// }
// function changeColor(event){
//     event.target.style.backgroundColor = 'yellow'
//     event.target.removeEventListener('click',changeColor)
// }
// let button = document.querySelectorAll('button')
// button.forEach((element)=>{
//     element.addEventListener('click',changeText)
//     element.addEventListener('click', changeColor)
// })
//4
// function changeText(event) {
//     event.target.innerText = 'Clicked';
//   }
//   function changeColor(event) {
//     event.target.style.color = 'yellow';
//     event.target.removeEventListener('click', changeColor);
//   }
//   const elements = document.querySelectorAll('button');
//   elements.forEach((element) => {  
//     element.addEventListener('click', changeText);
//     element.addEventListener('click', changeColor);
//   });
//5
// let listEl = document.querySelector('li')
// listEl.addEventListener('click',()=>{
//     alert()
// })
//6
// let kim = document.querySelectorAll('li')
// kim.forEach((item)=>{
//     item.addEventListener('click',()=>{
//         item.classList.toggle('background')
//     })
// })    
//7
// let kim = document.querySelector('h1')
// kim.onclick = liAlter
// function liAlter(){
//     kim.classList.toggle('background')
// }
//8
// function showConsole(){
//     console.log('click');
//     kim.removeEventListener('click', showConsole)
// }
// let kim = document.querySelector('h1')
// kim.addEventListener('click', showConsole)




//task1
// function changeColor(event){
//     event.target.style.color = 'gray'
// }
// let listElement = document.querySelectorAll('ul')
// listElement.forEach((element)=>{
//     element.addEventListener('click', changeColor)
// })
//task3
// function press(event) {
//     if (event.keyCode === 13) {
//         console.log("ENTER");
//     }
//     document.removeEventListener('keypress',press)
// }
// document.addEventListener("keypress", press);
//task2
// let shoppingItems = document.querySelectorAll('.shopping-list li');
// function click(event) {
//     event.target.style.textDecoration = 'line-through';
//     event.target.removeEventListener('click', click);
// }
// shoppingItems.forEach(function(item) {
//     item.addEventListener('click', click);
// });

//9 selected-not selected
// let btn = document.querySelectorAll('button')
// btn.forEach((element)=>{
//     element.addEventListener('click',(event)=>{
//         const text = event.target.textContent
//         if(text === 'Selected'){
//             event.target.textContent = 'Not selected'
//         }else{
//             event.target.textContent = 'Selected'
//         }
//     })
// })
//10
// let square = document.querySelector('.kub')
// square.addEventListener('mouseover',(event)=>{
//     event.target.style.backgroundColor = 'yellow'
// })
//11
// document.addEventListener('keyup',(event)=>{
//     console.log(event.key);
// })


//EVENT 2.0
//1  вывод из инпут на кансоль
// let input = document.getElementById('name')
// let btn = document.getElementById('button')
// let form = document.querySelector('form')
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     console.log(input.value);
// })
//2 вывод из инпут на экран
// let input = document.getElementById('name')
// let btn = document.getElementById('button')
// let form = document.querySelector('form')
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     let div = document.createElement('div')
//     document.body.append(div)
//     div.innerHTML += `<p>${input.value }<\p>`
// })
//3 парралельный вывод из инпута на экран
// let input = document.getElementById('name')
// let form = document.querySelector('form')
// input.addEventListener('input',(event)=>{
//     let div = document.querySelector('div')
//     div.innerHTML = event.target.value
// })
//4






//CLIENT-SERVER
//presentation1
//task1
// const data = '{"id":371,"type":"general","joke":"Why does a chicken coop only have two doors?Because if it had four doors it would be a chicken sedan."}';
// const dataObj = JSON.parse(data)
// dataObj.id = 157
// console.log(JSON.stringify(dataObj));
//task2
// const character1 = '{"agility": 15, "intelligence": 15, "strength": 150, "magicPower": 5500, "magicResist": 2000, "armor": true}';
// const character2 = '{"agility": 20, "intelligence": 10, "strength": 150, "magicPower": 5000, "magicResist": 2500, "armor": true}';
// const character1Obj = JSON.parse(character1)
// const character2Obj = JSON.parse(character2)
// character1Obj.agility = 35
// character2Obj.agility = 40
// character1Obj.intelligence = 35
// character2Obj.intelligence = 30
// console.log(JSON.stringify(character1Obj));
// console.log(JSON.stringify(character2Obj));
//presentation2
//task1
// fetch('https://api.chucknorris.io/jokes/random').then((response)=> console.log(response))
//task2
// joke.addEventListener('click',()=>{
//     fetch('https://api.chucknorris.io/jokes/random').then((response)=> response.json())
//     .then((data)=>{
//         console.log(data.value);
//     })
// })
//task3

const image = document.getElementById('img')
const body = document.querySelector('body')
fetch('https://randomuser.me/api/')
.then((response)=> response.json())
.then((data)=>{
    const name = document.createElement = 'p'
    name.innerHTML = data.results[0].name.first
    body.appendChild.name
    image.src =data.results[0].picture.large
    console.log(data);
})





































// const data = 
// '{"id":371,"type":"general","joke":"Why does a chicken coop only have two doors? Because if it had four doors it would be a chicken sedan."}';
// const objData = JSON.parse(data)
// objData.id = 157
// const newData = JSON.stringify(objData)
// console.log(data);
// console.log(objData);
// console.log(newData);


 
// fetch('https://api.chucknorris.io/jokes/random')
//     .then(response=>{
//         console.log(response);
//     })
