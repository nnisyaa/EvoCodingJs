// //1st presentation homework
// //task 1
// console.log('My name is Nisa');
// //task2
// const name = 'Nisa'
// console.log(name);
// //task3
// let bookPrice = prompt('Enter the price of the book')
// let bookAmount = prompt('Enter the amount of the book')
// console.log(bookAmount * bookPrice);

// //2nd presentation
// //task 1
// let num = prompt('Enter a two-digit number')
// let num1 = num**5
// let num2 = num%3
// console.log(num);
// console.log(num1);
// console.log(num2);
// //task2
// let firstName = prompt('Enter you first name')
// let lastName = prompt('Enter you last name')
// console.log('Your name is ' + firstName + ' ' + lastName);
// //task3
// let firstName2 = prompt('Enter you first name')
// let lastName2 = prompt('Enter you last name')
// console.log(`Nice to meet you again,${firstName2} ${lastName2}`);
// //task4
// let fullName = prompt('Enter you full name')
// console.log(fullName.length-1) 



// //1st classwork
// //task1
// let kmhSpeed = 75
// let msSpeed = kmhSpeed*1000/3600
// console.log(msSpeed)
// //task2
// let num3 = 57
// console.log(num3**5)
// console.log(num3%3)
// //task3
// let firstName3 = 'Alan'
// let lastName3 = 'Turing'
// console.log("Sizin adınız " + firstName3 + ' ' + lastName3 +  ".Tanışlığımıza çox şadam!")
// //task4
// console.log(`Sizi bir daha görməyimizə şadıq,${firstName3} ${lastName3}`)
// //task5
// let fullName2 = 'Alan Turing'
// console.log(fullName2.length-1)



// //second classwork = presentation4
// //task6
// let fullName = 'Alan Turning'
// console.log(fullName[0],fullName[5]);
// //task7
// let yourFullName = prompt('Enter your full name - first name,then lastname')
// let space = yourFullName.split(' ')
// let name = space[0]
// let surname = space[1]
// console.log(surname, name);
// //task8
// let yourName = prompt('Enter your name')
// console.log(`Hello, ${yourName}`);
// //task9
// let value1 = prompt('Enter first number')
// let value2 = prompt('Enter second number')
// console.log(+value1 + Number(value2))
// console.log(+value1 - Number(value2))
// console.log(+value1 * Number(value2))
// console.log(+value1 / Number(value2))
// console.log(+value1 % Number(value2))
// //task10
// console.log(`${12345*98765}`);
// console.log(`${12345*98765}`[5]);
// //task11
// let devide = yourFullName.split(' ')
// let firstname = devide[0]
// console.log(`Hello ${firstname}!`)
// //task12
// let price = prompt('Enter a numbe in 530.90 format')
// let space1 = price.split('.')
// let man = space1[0]
// let cent = space1[1]
// console.log(`${man} manat ${cent} qepik`)
// //task13
// let fullName1= prompt('Enter your name is this order: Lastname , Name , Patronymic')
// let yourName1 = fullName1.split(' ')
// let name1 =yourName1[1]
// let surname1 = yourName1[0]
// let patronymic = yourName1 [2]
// console.log(surname1 +' '+ name1[0]+ '. ' +  patronymic[0]+ '.')



//homework2
// let a = 10
// let b = 5
// let c = b //5
// b = a //10
// a = c //5
// console.log(a,b)



//third classwork
//task1
// let value = 10
// console.log(value <= 10);
// console.log(value === 10);
// console.log(value != 20);
// console.log(value == 10);
// console.log(value < 11);

//homework 3 if
// let age = prompt('Enter your age')
// if (age<18){
//     alert('Access denied');
// }
// else{
//     alert('Access granted');
// }


//classwork 4 if  
// let enter = prompt('Enter 3  two posinitioned numbers devided by comma')
// let devide = enter.split(',')
// let number1 = devide[0]
// let number2 = devide[1]
// let number3 = devide[2]
// if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
//     if (number1 == number2 || number1 == number3 || number2 == number1) {
//         console.log('two or three numbers are the same');
//     }
//     else if(devide.length >3){
//         console.log('You should enter only three numbers')
//     }
//      else {
//         if (number1 == null || number2 == null || number3 == null) {
//             console.log('Please enter all of the numbers');
//         }
//         else if (number1.length != 2 || number2.length != 2 || number3.length != 2) {
//             console.log('Entered numbers are not two positinioned');
//         }
//         else if (number2 < number1 && number1 < number3 || number3 < number1 && number1 < number2) { //213   132
//             console.log(number1);
//         }
//         else if (number3 < number2 && number2 < number1 || number1 < number2 && number2 < number3) { //321    
//             console.log(number2);
//         }
//         else if (number1 < number3 && number3 < number2 || number2 < number3 && number3 < number) { //132  
//             console.log(number3);
//         }
//     }
// } else {
//     console.log('Enter a number')
// }




//classwork4 swich case
//task1
// let id = +prompt('введите id товара:');
// switch(id){
//     case 1:
//         alert('В наличии 10 шт.');
//         break;
//     case 2:
//         alert('В наличии 256 шт.');
//         break;
//     case 3:
//         alert('В наличии 53 шт.');
//         break;
//     case 4:  
//         alert('В наличии 3 шт.');
//         break;
//     default:
//         alert('Нет в наличии');
// }

//task2 
// let gender1 = prompt('Enter your gender as F or M')
// let whatIsYourGender1 = gender1.toLowerCase() == 'f' ? 'Female' :  gender1.toLowerCase() == 'm' ? 'Male' :  'please enter correct letter'
// console.log(whatIsYourGender1);

//task3
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
//classwork4 function
//task1
// let Fullname = prompt('Enter your name')
// function logGreeting (){
//     console.log(`${Fullname} is a developer`)
// }
// logGreeting() 
//task2
// let fullName = prompt('Enter your name')
// let fullName1 = prompt('Enter your name')
// let fullName2 = prompt('Enter your name')
// function yourNameIS(fullName = ' '){
//     console.log(`${fullName} is active now`);
// }
// yourNameIS(fullName)
// yourNameIS(fullName1)
// yourNameIS(fullName2)





//homework function
// let number1 = +prompt('Enter a number')
// let number2 = +prompt('Enter a number')
// let number3 = +prompt('Enter a number')
// function maxNUm (num1,num2,num3){
//     if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
//         if(num1<num2 && num2<num3){
//             console.log(num3)
//         }
//         else if(num2<num1 && num1<num3){
//             console.log(num3)
//         }
//         else if(num1<num3 && num3<num2){
//             console.log(num2)
//         }
//         else if(num3<num1 && num1<num2){
//             console.log(num2)
//         }
//         else if(num3<num2 && num2<num1){
//             console.log(num1)
//         }
//         else if(num2<num3 && num3<num1){
//             console.log(num1)
//         }
//     }else{
//          console.log('Enter a number');
//     }
// }
// maxNUm(number1,number2,number3)






//classwork function return
//task1
// let num1 = +prompt('Enter the first number')
// let num2 = +prompt('Enter the second number')
// function min(num1, num2){
//     if(!isNaN(num1) && !isNaN(num2)){
//         if(num1<num2){
//             return num1
//         }else{
//             return num2
//         }
//     }
//     else{
//         console.log('Please enter a number');
//     }
// }
// console.log(min(num1,num2));
//task2
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
// let num1 = +(prompt('Enter 1st number'))
// let num2 = +(prompt('Enter 2nd number'))
// let operation = prompt('Enter the operation')
// calc(num1,num2,operation)





//classwork function
//task1
// let rublBalance = +prompt('Enter your rubl balance')
// let dollarBalance = +prompt('Enter your dollar balance')
// function changeDollartoRubl(dollarBalance, rublBalance){
//    dollarBalance *= 75
//    let fullBalance = dollarBalance + rublBalance
//    console.log(`The full balance is ${fullBalance} rubl`); 
// }
// changeDollartoRubl(dollarBalance, rublBalance)
//task2
// let enterNumber = prompt('Enter a number with six positions ')
// function isLucky(enteredNumber){
//   let num1 = +enteredNumber[0]
//   let num2 = +enteredNumber[1]
//   let num3 = +enteredNumber[2]
//   let num4 = +enteredNumber[3]
//   let num5 = +enteredNumber[4]
//   let num6 = +enteredNumber[5]
//     if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4) && !isNaN(num5) && !isNaN(num6)){
//         if(enteredNumber.length == 6){
//             if( num1 + num2 + num3 == num4 + num5 + num6){
//                 console.log('The number is lucky');
//             } else{
//                 console.log('The number is not lucky');
//             }
//           }
//           else{
//             console.log('Please write a 6 positioned number');
//           }
//     }else{
//         console.log('Please enter a number');
//     }
// }
// isLucky(enterNumber)
//task3
// function capitalizeWords(sen) {
//     let words = sen.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
//     }
//     return words.join(" ");
// }
// let enterSen = prompt('Enter a sentence');
// console.log(capitalizeWords(enterSen)); 





//casswork for 
// //task1
// let multiplication = 1
// for (let i = 1; i <10; i++){
//     multiplication = multiplication * i
// }
// console.log(multiplication);
//task2
// let str = prompt('Enter a sentence')
// for(let i = str.length; i > 0; i--){
//     console.log(str[i - 1]);
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
//   function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function printPrimesUpTo(n) {
//     for (let i = num1; i >= 1; i--) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// let num1 = parseInt(prompt("Введи число больше 1"));
// printPrimesUpTo(num1);
//task5
// let sum = 0
// function numCounter(sen1){
    
//     for(let i = 0; i < sen1.length; i++){
//         sum ++ 
//     }
//     return sum
// }
// let sen = prompt('Enter a random sentence')
// console.log(numCounter(sen));


//classwork array
//task1
// let array = ['Новая надежда', 'Империя наносит ответный удар', 'Возвращение джидая']
// for(let i = 0; i < array.length; i ++){
//     console.log(`Эпизод ${i + 4}: ${array[i]}`);
// }
//task2
// let num = prompt('Enter 5 numbers')
// let arr = num.split(',')
// for(let i = 0; i<5; i++){
//     if(arr[i]<arr[0]) arr[0] = arr[i]
// }
// console.log(arr[0]); 

// Push,unshift,shift,pop
// join

//task3
// let names = ['Name1' , 'Name2' , 'Name3']
// names.push('Name4')
// names.shift()
// console.log(names);
//task4
// let nums = '32,31,34,36,31'
// let nums2 = nums.split(',')
// let nums3 = nums2.join(';')
// console.log(nums3);




//array methods
//task1
// let sen = ['Hello,','my','name','is','Ali']
// function logSen(sen){
//     let sen2 = sen.join(' ')
//     return sen2
// }
// console.log(logSen(sen));
//task2
// let arr = [12,21,9,49,102]
// let evenSum = 0
// let oddSum = 0
// function difference(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//             evenSum += arr[i]
//         }
//         else{
//             oddSum += arr[i]
//         }
//     }
//     return evenSum - oddSum
// }
// console.log(difference(arr));
//task3
// let arr = [12, 21, 7, 49, 102];
// let max = 0;
// function oddMax(arr) {
//     for(let i = 0; i < arr.length; i ++){
//         if(arr[i] % 2 == 1){
//             for(let j = i+1; j < arr.length; j++){
//                 if((arr[j] % 2 == 1 && arr[j] > arr[i])){
//                     max = arr[j]
//                 }
//             }
//         }
//     }
//   return max
// }
// console.log(oddMax(arr));
//task4
// let arr = [12, 21, 7, 102];
// let maxOdd = 0;
// let maxEven = 0
// function oddMax(arr) {
//     for(let i = 0; i < arr.length; i ++){
//         if(arr[i] % 2 == 1){
//             for(let j = i+1; j < arr.length; j++){
//                 if(arr[j] % 2 == 1 && arr[j] > arr[i]){
//                     maxOdd = arr[j]
//                 }
//                 else{
//                     maxOdd = arr[i]
//                 }
//             }
//         }else{
//             for(let j = i+1; j < arr.length; j++){
//                 if(arr[j] % 2 == 0 && arr[j] > arr[i]){
//                     maxEven = arr[j]
//                 }
//             }
//         }
//     }
//   return maxOdd + maxEven
// }
// console.log(oddMax(arr));

//homework
//task1
// for each presentation
// let arr = [2, 3, -2, 0, -1]
// function callback(item){
//     if(item<0){
//         console.log(item);
//     }
// }
// arr.forEach(callback)
//task2
// let arr2 = [2, 3, -2, 0, -1]
// arr2.forEach((item)=>{
//     if (item >0 ){
//         console.log(item);
//     }
// } )
//map,filter,find
//task1
// let arr = [2, 3, -2, 0, -1]
// let Newarr = arr.map((item) =>{
//     if(item < 0){
//         return item * -1;
//     }
//     else{
//         return item *2
//     }
// })
// console.log(Newarr);
//task2
// let sen = ['Green' , 'Red' , 'Blue']
// let newSen = sen.find((item )=>{
//     if(item.length == 3){
//         return item
//     }
// })
// console.log(newSen);
//task3
// let names = ['Jane', 'Ann' , 'Sam' , 'Ally']
// let nameA = names.filter((item) =>{
//     if(item[0] == 'A'){
//         return item
//     }
// })
// console.log(nameA);


//classwork
// let arr = [12, 21, 9, 49, 102, 4]

// let tek = 0
// let cut = 0

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] % 2 != 0 && tek < arr[i]) {

//         tek = arr[i]

//     } else if (cut < arr[i]) {
        
//         cut = arr[i]
//     }
// }

// console.log(tek);
// console.log(cut);
//task1
// let arr = [12, 21, 102, 9, 49, 102, 102]
// let max = 0
// let count = 0
// for(let i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i]
//             if (max = arr[i]){
//                 for(let j = i; j < arr.length; j++){
//                     count +=1
//                 }
//             }
//     }    
//     }
// console.log(`${max} повторяется ${count} раз`);
// //task2
// let arr1 = [5,4]
// let arr2 = [12,46]
// function callback(item,index) {
//     return arr1.index + arr2.index
// }

// let arr = ['salam' , true, true, false, '45', false, 'sagol']
// let count = 0
// function print(){
//     for(let i=0 ; i < arr.length; i++){
//         if ( arr[i] == false || arr[i] == true){
//             count += 1
//         }
//     }
// }
// console.log(print(arr));











// classwork object presentation
//task1
// let user = {
//     name : 'Nisa',
//     gender : 'Female',
//     birthday : '08.08.2003'
// } 
// console.log(user.birthday);
// //task2
// user.age = 20
// delete user.birthday 
// console.log(user);
// object methods presentation
//task1
// let user2 = {
//     age : 25,
//     retired : 65,
//     setAge(newAge){
//         this.age += 5
//         return this.age
//     },
//     getYearsBeforeRetirement(){
//         let beforeRetire = this.retired - this.age
//         return beforeRetire
//     }
// }
// console.log(user2.setAge());
// console.log(user2.getYearsBeforeRetirement());



//classwork objects
//task1
// let users = [
// {
//     name : 'Fidan',
//     age: 22,
// },
// {
//     name : 'Fidan',
//     age: 14,
// },
// {
//     name : 'Fidan',
//     age: 5,
// },
// {
//     name : 'Fidan',
//     age: 12,
// },
// {
//     name : 'Fidan',
//     age: 3,
// },
// ]
// let users2 = []
// for(let i = 0; i <users.length; i++){
//     if(users[i].age > 10){
//         console.log(users[i]);
//         users2.push(users[i])
//     }
// }
// console.log(users2);
//task2
// let stockItem = {
//     id: 1,
//     place: 'Baku',
//     weight: 20,
// }
// let shopItem = {
//     ...stockItem,
//     price: '150azn',
// }
// delete shopItem.place
// console.log(shopItem);
//task2
// let names = ['Nicola Tesla, 1856' , 'Alan Turning, 1912' , 'Ada Lovelace, 1815']

// function sortByBirth(name) {
//     for(let i = 0; i<names.lengthl ;i++){
//         if(name[i].split(',')[1] < name[i +1].split(',')[1]){
//             let year = name[i+1]
//             name[i+1] = name[i]
//             name[i] = year
//         }
//     }
//     return name
// }
// console.log(sortByBirth(names));



// let calc = {
//     memory: 0,
//     add(num){   
//       this.memory += num;
//     },    
  
//     readR(){
//       console.log(this.memory);
//     },
  
//     clean(){
//       this.memory = 0;
//     },
  
//     sum(){
//       return this.a + this.b;
//     },
  
//     sub(){
//       return this.a - this.b;
//     },
  
//     mul(){
//       return this.a * this.b;
//     },
  
//     div(){
//         return this.a / this.b;
//     },
  
//     read() {
//       this.a = +prompt('Enter a', 0);
//       this.b = +prompt('Enter b', 0);
//     }
    
//   }
  
//   calc.read();
//   alert(calc.sum());
//   alert(calc.sub());
//   alert(calc.mul());
//   alert(calc.div());
//   calc.readR();





















//homework
//task1 
// class Person{
//   constructor(surname,name,age,gender){
//       this.surname = surname
//       this.name = name
//       this.age = age
//       this.gender = gender
//   }
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
//   constructor(surname,name,age,gender){
//       this.surname = surname
//       this.name = name
//       this.age = age
//       this.gender = gender
//   }
//   rename(name){
//       this.name = name
//   }
// }
// class Admin extends Person{
//   constructor(surname,name,age,gender,role,id){
//       super(surname,name,age,gender)
//       this.role = role
//       this.id = id
//   }
// }
// const admin1 = new Admin('Anney','Ann', 25,'Female', 'Designer', 21)
// admin1.rename('Nany')
// console.log(admin1);






//DOM classwork2
//task2
// let list = document.querySelector("ul")
// console.log(list.parentElement);
// console.log(list.previousElementSibling);
// console.log(list.children);
// console.log(list.firstElementChild);
//task3
// let listEls = document.querySelectorAll('li')
// for(let i = 0;i<listEls.length;i++){
//     listEls[i].classList.add('item')
//     if(!listEls[i].classList.contains('primary')){
//         listEls[i].classList.add('secondary')
//     }
// }



// events
//1
// let form = document.querySelector('form')
// let inp = document.querySelector('input')
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//    document.querySelector('p').innerHTML += inp.value.trim()
// })
//2
// let form = document.querySelector('form')
// let inp = document.querySelector('input')
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//    console.log(inp.value.trim());
// })
//burger menu
let div = document.querySelector('i')
let aside = document.querySelector('aside')

div.addEventListener('click',()=>{
    aside.classList.toggle('active')
})

