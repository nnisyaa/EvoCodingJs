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
let enter = prompt('Enter 3  two posinitioned numbers devided by comma')
let devide = enter.split(',')
let number1 = devide[0]
let number2 = devide[1]
let number3 = devide[2]
if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)) {
    if (number1 == number2 || number1 == number3 || number2 == number1) {
        console.log('two or three numbers are the same');
    }
    else if(devide.length >3){
        console.log('You should enter only three numbers')
    }
     else {
        if (number1 == null || number2 == null || number3 == null) {
            console.log('Please enter all of the numbers');
        }
        else if (number1.length != 2 || number2.length != 2 || number3.length != 2) {
            console.log('Entered numbers are not two positinioned');
        }
        else if (number2 < number1 && number1 < number3 || number3 < number1 && number1 < number2) { //213   132
            console.log(number1);
        }
        else if (number3 < number2 && number2 < number1 || number1 < number2 && number2 < number3) { //321    
            console.log(number2);
        }
        else if (number1 < number3 && number3 < number2 || number2 < number3 && number3 < number) { //132  
            console.log(number3);
        }
    }
} else {
    console.log('Enter a number')
}
