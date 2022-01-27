// 9 Explore Differences Between the var and let Keywords
let catName = "Oliver";
let catSound = "Meow!";

// 10 Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// 11 Add Two Numbers with JavaScript
const sum = 10 + 10;

// 12 Subtract One Number from Another with JavaScript
const difference = 45 - 33;

// 13 Multiply Two Numbers with JavaScript
const product = 8 * 10;

// 14 Divide One Number by Another with JavaScript
const quotient = 66 / 33;

// 15 Increment a Number with JavaScript
let myVar = 87;
// Only change code below this line
myVar++;

// 16 Decrement a Number with JavaScript
let myVar = 11;
// Only change code below this line
myVar--;

// 17 Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;
// Only change code below this line
let myDecimal = ourDecimal;

// 18 Multiply Two Decimals with JavaScript
const product = 2.0 * 2.5;

// 19 Divide One Decimal by Another with JavaScript
const quotient = 4.4 / 2.0; // Change this line

// 20 Finding a Remainder in JavaScript
let remainder = 0;
remainder = 11 % 3

// 21 Compound Assignment With Augmented Addition
let a = 3;
let b = 17;
let c = 12;
// Only change code below this line
a += 12;
b += 9;
c += 7;

// 22 Compound Assignment With Augmented Subtraction
let a = 11;
let b = 9;
let c = 3;
// Only change code below this line
a -= 6; //a = a - 6;
b -= 15; //b = b - 15;
c -= 1; //c = c - 1;

// 23 Compound Assignment With Augmented Multiplication
let a = 5;
let b = 12;
let c = 4.6;
// Only change code below this line
a *= 5; //a = a * 5;
b *= 3; //b = 3 * b;
c *= 10; //c = c * 10;

// 24 Compound Assignment With Augmented Division
let a = 48;
let b = 108;
let c = 33;
// Only change code below this line
a /= 12; //a = a / 12;
b /= 4; //b = b / 4;
c /= 11; //c = c / 11;

// 25 Escaping Literal Quotes in Strings
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
//I am a "double quoted" string inside "double quotes".
console.log(myStr)

// 26 Quoting Strings with Single Quotes
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// 27 Escape Sequences in Strings
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
/* myStr:
Первая строка
	\Вторая линия
Третья линия */

// 28 Concatenating Strings with Plus Operator
const myStr = "This is the start. " + "This is the end."; // Change this line

// 29 Concatenating Strings with the Plus Equals Operator
let myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.'

// 30 Constructing Strings with Variables
// Only change code below this line
const myName = "Andrey";
const myStr = "My name is " + myName + "and I am well";

// 31 Appending Variables to Strings
// Change code below this line
const someAdjective = "cool";
let myStr = "Learning to code is ";
myStr += someAdjective;

// 32 Find the Length of a String
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";
// Only change code below this line
lastNameLength = lastName.length;

// 33 Use Bracket Notation to Find the First Character in a String
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// 34 Understand String Immutability
//Строки являются неизменяемыми, те нельзя изменить в них отдельные символы, целиком строку поменять можно
// Setup
let myStr = "Jello World";
// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// 35 Use Bracket Notation to Find the Nth Character in a String
// Setup
const lastName = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// 36 Use Bracket Notation to Find the Last Character in a String
//Поиск последнего символа в строке
// Setup
const lastName = "Lovelace";
// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// 37 Use Bracket Notation to Find the Nth-to-Last Character in a String
//Поиск N - символа в строке, в данном случае предпоследней буквы
// Setup
const lastName = "Lovelace";
// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

// 38 Word Blanks
//Составить из слов, используя переменные предложение
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
// Only change code below this line
const wordBlanks = myAdjective + ' ' + myNoun + ' ' + myVerb + ' ' + myAdverb; // Change this line
// Only change code above this line

// 39 Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
const myArray = ['string', 5];

// 40 Nest one Array within Another Array
//Вложение одного массива в другой
// Only change code below this line
const myArray = ['Array - 1', ['Array - 2']];

// 41 Access Array Data with Indexes
//Доступ к данным массива с помощью индекса
const myArray = [50, 60, 70];
const myData = myArray[0]

// 42 Modify Array Data With Indexes
//В отличии от строк данные массива можно изменять
// Setup
const myArray = [18, 64, 99];
// Only change code below this line
myArray[0] = 45

// 43 Access Multi-Dimensional Arrays With Indexes
/* Доступ к многомерным массивам
const arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14]
  ];
  
  arr[3];
  arr[3][0];
  arr[3][0][1];
  arr[3]есть [[10, 11, 12], 13, 14], arr[3][0] есть [10, 11, 12] и arr[3][0][1] есть 11 */

const myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[
		[10, 11, 12], 13, 14
	],
];

const myData = myArray[2][1]; //цифра 8

// 44 Manipulate Arrays With push()
//Простой способ добавления данных в конец массива — через push()функцию.
// Setup
const myArray = [
	["John", 23],
	["cat", 2]
];

// Only change code below this line
myArray.push(["dog", 3]) //  результат: [["John", 23], ["cat", 2], ["dog", 3]]

// 45 Manipulate Arrays With pop()
//.pop() удаляет последний элемент из массива и возвращает этот элемент.
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown); // 6
console.log(threeArr); // [1, 4]

// Setup
const myArray = [
	["John", 23],
	["cat", 2]
];
// Only change code below this line
const removedFromMyArray = myArray.pop() //["cat", 2]

// 46 Manipulate Arrays With shift()
//.shift() удаляет первый элемент из массива
// Setup
const myArray = [
	["John", 23],
	["dog", 3]
];
// Only change code below this line
const removedFromMyArray = myArray.shift() //["John", 23]

// 47 Manipulate Arrays With unshift()
//.unshift()работает точно так же .push(), но вместо добавления элемента в конец массива unshift()добавляет элемент в начало массива.

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); //ourArray = [ "J", "cat"];
ourArray.unshift("Happy"); //ourArray = ["Happy", "J", "cat"];

// Setup
const myArray = [
	["John", 23],
	["dog", 3]
];
myArray.shift();
// Only change code below this line
myArray.unshift(["Paul", 35]) // myArray = [["Paul", 35], ["dog", 3]]

// 48 Shopping List
const myList = [
	['Potato', 5],
	['bread', 1],
	['cucumber', 3],
	['corn', 2],
	['water', 4]
];

// 49 Write Reusable JavaScript with Functions
function reusableFunction() {
	console.log('Hi World')
}

reusableFunction();

// 50 Passing Values to Functions with Arguments
function functionWithArgs(numberOne, numberTwo) {
	console.log(numberOne + numberTwo)
}
functionWithArgs(7, 9) //16
functionWithArgs(1, 2) //3

// 51 Return a Value from a Function with Return
function timesFive(num) {
	return num * 5;
}
console.log(timesFive(2))
console.log(timesFive(5))

// 52 Global Scope and Functions
// Declare the myGlobal variable below this line
let myGlobal = 10

function fun1() {
	// Assign 5 to oopsGlobal Here
	oopsGlobal = 5
}

// Only change code above this line
function fun2() {
	var output = "";
	if (typeof myGlobal != "undefined") {
		output += "myGlobal: " + myGlobal;
	}
	if (typeof oopsGlobal != "undefined") {
		output += " oopsGlobal: " + oopsGlobal;
	}
	console.log(output);
}

// 53 Local Scope and Functions
function myLocalScope() {
	// Only change code below this line
	let myVar
	console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// 54 Global vs. Local Scope in Functions
//Можно иметь как локальные , так и глобальные переменные с одинаковыми именами. При этом локальная переменная имеет приоритет над глобальной.
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
	// Only change code below this line
	const outerWear = 'sweater'
	// Only change code above this line
	return outerWear;
}

console.log(myOutfit());

// 55 Understanding Undefined Value returned from a Function
// Setup
let sum = 0;

function addThree() {
	sum = sum + 3;
}

// Only change code below this line
function addFive() {
	sum = sum + 5
}

// Only change code above this line
console.log(addThree());
console.log(addFive());
console.log(sum)

// 56 Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
	return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7)

// 57 Stand in Line
function nextInLine(arr, item) {
	// Only change code below this line
	arr.push(item)

	return arr.shift();
	// Only change code above this line
}
console.log(nextInLine([2], 1))

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// 58 Understanding Boolean Values
function welcomeToBooleans() {
	// Only change code below this line
	return true; // Change this line
	// Only change code above this line
}

// 59 Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
	// Only change code below this line
	if (wasThatTrue) {
		return 'Yes, that was true';
	}
	return 'No, that was false';

	// Only change code above this line
}

// 60 Comparison with the Equality Operator
// Setup
function testEqual(val) {
	if (val == 12) { // Change this line
		return "Equal";
	}
	return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual("12"))