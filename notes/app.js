//################  PART 1: BASICS ##########################################
//
//variables
//first declare a variable then assign a value to that variable
// a variable cannot be a reserved keyword, connot contain space, cannot start with a number

// (reserved keyword) (variable name) (type of value)

// "let" and "var" are mutable(changeable) while "const" is immutable(unchangeable)

// Primitive types---> typeof is a keyword to find the type of a variable

//---------------------------------------------
// Boolean---> true // false

// falsy value:
//--> false
//--> null
//--> undifined
//--> 0 or -0
//--> NaN
//-->'', "", ``, (empty quotes)
//---------------------------------------
//comparison Operators:

// --> Relational operators(>, <, >=, =<)

// --> Equality Operators:
// strict equality operator( === ) (type + value)
// strict non-equality operator( !== ) (type + value)
// lose equality operator( == ) (value)
// lose not equality operator ( != ) (value)

// string methods:

// 1. Concatenation( + or .concat)
// 2. Append ( += )
// 3. Length ( .length )
// 4. Cases ( .toUpeperCase() and .toLowerCase() )
// 5.Slice ( .slice(0, 4))
// 6. Split & Join ( .split(" ") or .join(""))
// 7. Includes ( .includea("s") )
// 8. Trim ( .trim() )  remove the leading and ending white spaces

// Type Conversions:

//--> convert "string" to number:
//   [ string = parseInt("string") ] or [ string = +string ] or [ string = Number(string)]

//--> convert number to "string":
//  [ number.toString() ] or [ string(number) ]

//--> convert "string" to decimal:
//   [ string = parseFloat(string)]

//################ CONTROL FLOW ############################

//---------------if statements:-------------------------

// if (condition) {do something}
//else if (condition) {do some other thing}
//else {do other thing}

// if (a > b) {
//     console.log("a is greater than b");
// } else if (a < b) {
//     console.log("a is less than b");
// } else {
//     console.log("a is equal to b");
// }

//----------------- switch statements:--------------------

// let x = 1;
// let bulb;

// switch (x) {
//     case 0:
//         bulb = "off";
//         console.log(bulb);
//         break;
//     case 1:
//         bulb = "on";
//         console.log(bulb);
//         break;
//     default:
//         bulb = "no valid value found";
//         console.log(bulb);
// }

// let day = "wednesday"

// switch (day) {
//     case "monday":
//         console.log("Today is moday");
//         break;
//     case "tuesday":
//         console.log("Today is tuesday");
//         break;
//     case "wednesday":
//         console.log("Today is wednesday");
//         break;
//     case "saturday":
//         console.log("Today is saturday");
//         break;
//     default:
//         console.log("It's just another day");
// }

//-------- loops in JS ---------------------------
// _________for loops:___________

// for (initialExpression; condition; increamentExpression) {...code block to be executed }

// exampe:

// for (let i = 0; i <= 2; i++) {
//     console.log(`--------OUTER LOOP ${i}--------`);
//     for (let j = 0; j < 3; j++) {
//         console.log("nested loop", j);
//     }
// }

// _________while loops:___________

// while (condition) {...code block to be executed}

// example:

// let i = 1;

// while (i <= 5) {
//   console.log("this is a while loop in JS", i);
//   i++;
// }

// make sure you dont forget to increment or decrement i to avoid infinite loop

// _________do-while loops:___________

// let i = 1;

// do {
//     console.log("this is a do_while loop", i);
//     i++;
// } while (i <= 5);

//-------- logical operators in JS ---------------------------

// 1. logical AND ( && )
//---> TRUE if both the operands/boolens values are true, else evaluates to FALSE.

// 2. logical OR ( || )
//---> TRUE if either of the operands/boolean values is true. Evalutes to false if both are false.

// 3. logical NOT ( ! )
//---> TRUE if the operands is false and vice-versa.

//-------- Arrays (similar to lists in python) in JS ---------------------------

//  accessing items from an array

// array methods:

// 1. push() --> add a new element to the end of the array
// 2. pop() --> remove the last item of the array
// 3. shift() --> remove the first element from the array
// 4. unshift() --> insert a new element at the start of the array
// 5. concat() --> combine 2 or more arrays
// 6. includes() --> returns a boolen true or false if the array contains or not a specified element
// 7. join()--> adds all the elements of an array into a string, separated by the specified separator string.
// 8. reverse() --> reverse the order of the elements in the array
// 9. slice() --> return a copy of a section of the array. example: fruits.slice(index1, index2)
// ...

// const vegies = [
//     "tomato",
//     "carrot"
// ]

// const fruits = [
//     "apples",
//     "banana",
//     "avocado",
//     "orange"
// ]

//const justFruits = fruits.concat(vegies);

// fruits.push("peach")
// fruits.pop()
//fruits.shift()
//fruits.unshift("pineapple", "lemon")

//--------------OBJECTS--- (similar to class in pytthon----(dictionary too)-----

// const person = {
//     firstName: "Pascal",
//     lastName: "Dinho",
//     age: "27",
//     location: ["roodeport", "vaal"],
//     isProgrammer: true
// };

// person.isMarried = "false";

// delete person.location;

//-------------FUNCTIONS---------------------

//syntax:
// function name(paraeter if any) {...code to execute}

// function addUp(a, b) {
//     return (a + b);
// };

// const greet = (username) => {
//     console.log(`Hello ${username}`);
// }

// greet("Dinho");

// function salute(name, bc) {
//     console.log(`Hello ${name}`);
//     bc();
// };

// salute("Jay jay", () => {
//     console.log("This is a callback fnction.");
// })

//--------methods---just a function inside an object--(like a function inside a class in python)--------------

// const person = {
//     name: "Pascal",
//     age: 29,
//     isProgrammer: true,
//     details: () => {
//         return `Hello, my name is ${person.name} & I am ${person.age} years old.`
//     }
// }

// console.log(person.details());

//-------JSON---(java script objet notation)----(important)-----(often used for transmitting data between servers and web applications)
// think aboout it as an object in js, but with some few modifications(eg: keys must be inside double quotes, values can be anything)

// const person = {
//   name: "John Doe",
//   age: 20,
//   email: "js@gmail.com",
//   isAvailable: true,
//   hobbies: ["reading", "coding", "cooking", "playing"],
//   address: {
//     city: "Cape Town",
//     province: "East cap",
//   },
// };

// 1. JSON.stringify() --> convert a js object to a JSON string format
// 2. JSON.parse() --> convert a JSON string into a js object

// const jsonResult = JSON.stringify(person);

// const parseObject = JSON.parse(jsonResult);

// console.log(jsonResult);

// console.log(parseObject);

//-------Date & Time in js--------------
//year, month, day, hours, minutes, seconds, milliseconds

// const currentDate = new Date();

// const currentYear = currentDate.getFullYear();
// const currentMonth = currentDate.getMonth();
// const currentDay = currentDate.getDay();
// const currentHours = currentDate.getHours();
// const currentMinutes = currentDate.getMinutes();

// console.log(`Year: ${currentYear}`);
// console.log(`Month: ${currentMonth}`);
// console.log(`Day: ${currentDay}`);
// console.log(`Hours: ${currentHours}`);
// console.log(`Minutes: ${currentMinutes}`);

// currentDate.setDate(currentDate.getDate() + 1);

//---------setInterval-----similar to timer(in python)--the code will be executed everytime after the interval set--------
//---------setTimeout------similar to sleep(in python)--------
//---clearInterval---will stop the setInterval--------

// setInterval (
//     () => {
//         console.log("this function will be executed after every 3 seconds");
//     }, 3000
// );

// setTimeout (
//     () => {
//         console.log("This function will be executed after 3 seconds");
//     }, 3000
// )

// with the combination of setTimeout and clearInterval, we can stop a setInterval automatically

//example.

//set interval to run after every 3 seconds.

// const runningInterval = setInterval (
//     () => {
//         console.log("RUNNING EVERY 2 SECONDS")
//     }, 2000
// );

//set timeOut to stop the above running interval after 9 seconds
// setTimeout (
//     () => {
//         clearInterval(runningInterval)
//         console.log("The current running intervall has been stopped!");
//     }, 9000
// )

//########### PART 2: INTERMEDIATE #################################

//_template strings, also known as teplsate literals___use `` instead of "" or ''.

// console.log(`hello
//         there
//     come here
// world
//         well, this is amasing`);

// setTimeout (() => {
//     console.log("hello there");
//     setTimeout (() => {
//         console.log("jambo");
//         setTimeout(() => {
//             console.log("bonjourno");
//             setTimeout(() => {
//                 console.log("ola");
//                 setTimeout(() => {
//                     console.log("akuna matata");
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)

//___Enhanced object literals__make it more convinient and concise to define object properties and methods

// function user(name, age, work) {
//     return { name, age, work,
//         details: () => `My name is ${name}, i am ${age} years old, and i am a future ${work}`
//     };
// };

// const dinho = user("Dinho", "23", "programmer");

// console.log(dinho.details());

// const lib = {
//     sum: (a, b) => a + b,

//     mult: (a, b) => a * b
// };

// console.log(lib.mult(9, 3));
// console.log(lib.sum(9, 3));

//___Default function parameters__if a parameter is not provided when a function is called, the default value will be provided insted

// function countTo5(count = true) {
//     if (count === true) {
//         for (let i = 0; i <= 5; i++) {
//             console.log(`Count: ${i}`);
//         }
//     }
// }

//  countTo5();

// function ratings(rate = 0) {
//     if (rate < 5) {
//         console.log("Low ratings :)");
//     } else if (rate > 5) {
//         console.log("Average ratings :(");
//     } else {
//         console.log("perfect");
//     }
// };

// ratings(1);

// function multiply(a, b=1) {
//     return a * b
// }

// console.log(multiply(9, 4));

//___Spread Operator (...)___new addition to the set operators,
//it takes in an iterable(eg: array) and expands it into individual elements
// put ... infront of the element to spread

// 1. using a function:

// function giveBack4(a, b, c, d) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     }

// const colors = ["black", "white", "green", "yellow"];

// giveBack4(...colors)

// 2. using arrays

// const list1 = ["one", "two", "three"]
// const list2 = ["four", "five"]

// const listSpread = ["zero", ...list1, ...list2, "six"]

// console.log(listSpread);

//3. using object

// const obj1 = {x: 0, y: 1};
// const obj2 = {z: 3};

// const obj3 = {...obj1, ...obj2};

// console.log(obj3);

//____rest parameter__(...):it allows a function to accept an infinite number of arguments

// function user(y, ...x) {
//     console.log(y);
//     console.log(x);
// }

// user("dinho", "lizer", "maestro", 12, "legendado")

//____Destructuring___allows us to "unpack" values from data-structures(arrays, objects) into separate distinct variables.

// const foo = ["one", "two", "three"]

// const [green, yellow, blue] = foo;

// console.log(blue);

// const [a = 2, b= 5, c=7] = ["value1", "value2"]

// console.log(a);

// function f() {
//     return [1, 2, 3, 4]
// };

// const [a, b, , c] = f();  //note how we skipped the hird element here

// console.log(a);
// console.log(b);
// console.log(c);

// const person = {
//     name: "John Doe",
//     age: "39",
//     gender: "male",
//     country: "Zootopia"
// };

// const {name, country, age, gender} = person;

// console.log(name);
// console.log(age);
// console.log(gender);
// console.log(country);

//___object destructuring and rest operator___

// let {a, b, ...others} = {a: 100, b:20, c:240, d: "again", e: "and more"}

// console.log(a);
// console.log(b);
// console.log(others);

//___function destructuring___

// const person = {
//     name: "Dinho",
//     age: "28",
//     country: "Zootopia"
// }

// function personDetails({name, age, country}) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     console.log(`Country: ${country}`);
// }

// personDetails(person)

// let options = {
//     title: "my menu",
//     items: ["python", "js", "sql"],
// };

// function menuDetails({title = "untitled", width: w = 120, height: h = 230, items: [item1, item2, item3]}) {
//     console.log(`${title}, ${w}, ${h}`);
//     console.log(item1);
//     console.log(item2);
//     console.log(item3);
// };

// menuDetails(options);

//  const data = {
//     user: {
//         id: 243,
//         name: "Dinho Lizer",
//         age: 30,
//         email:"dinholizer@gmail.com",
//         address: {
//             city: "far far away",
//             country: "zootopia"
//         },
//         hobbies: ["programming", "footbal", "reading"],
//         scores: {
//             maths: 98,
//             science: 83,
//             history: 75
//         },
//     },
//     products: [
//         {id: 1, name: "Laptop", price: 1000},
//         {id: 2, name: "Phone", price:  850},
//         {id: 3, name: "Table", price: 500}
//     ],
//     settings: {
//         darkMode: true,
//         notifications: {
//             email: true,
//             sms: true,
//             push: false,
//         },
//         language: "English"
//     },
//  };

// const {
//     user: {
//         name,
//         age,
//         address: {city, country},
//         hobbies,
//         scores: {maths, science, history},
//         email,
//     },
//     products: [product1, product2, product3],
//     settings: {
//         darkMode,
//         notifications: {
//             email: emailNotifications,
//             sms: smsNotifications,
//             push: pushNotifications,
//         },
//     language,
//     },
// } = data

// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log(`Email: ${email}`);
// console.log(`Address:
//     city: ${city},
//     country: ${country}`);
// console.log(`Hobbies: ${hobbies}`);
// console.log(`Scores:
//     maths: ${maths}%
//     science: ${science}%
//     history: ${history}%`);
// console.log(`Products:
//     ${product1.name}-$${product1.price},
//     ${product2.name}-$${product2.price},
//     ${product3.name}-$${product3.price}`);
// console.log(`Dark Mode: ${darkMode}`);
// console.log(`Email notification: ${emailNotifications}`);
// console.log(`SMS notification: ${smsNotifications}`);
// console.log(`Push notification: ${pushNotifications}`);
// console.log(`Language: ${language}`);

//____The Ternary operator__is the only javascript operator that takes 3 operands:
// a condition followed by a question mark (?), an expression to be executed if the condition is true,
// followed by a colon (:), and an expression to be executed if the condition is false

// (condition) ? {to be executed if condition id true} : {to be executed if condition is false}

// let password = "123456789";

// function validatePassword(psw) {
//     if ( psw.length < 8) {
//         return "invalid password";
//     } else {
//         return "valid password";
//     };
// };

// function validatePassword(psw) {
//     return (psw.length < 8) ? "invalid password" : "valid password"
// }

// console.log(validatePassword(password));

//____the "for ... in" loop in js is used to iterate over the enumerable properties of an object

// for (let keysin object) {..to be executed keys times}

// const person = {
//     name: "Dinho",
//     age: "23",
//     gender: "male",
//     address: {
//         city: "far far away",
//         country: "zzotopia"
//     }
// };

// for (let key in person) {
//     console.log(key, person[key]);
// };

// let list = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

// for (let i in list) {
//     console.log(`${i}: ${list[i]}`);
// };

//___the "for ...of" loop in js is a modern iteeration that provides a concise and easy way to loop over elements
// it allows you to iterate directly over the values of the elements, rather than dealing with their indices or keys, which makes the code more readable and less error-prone.
// for (variable of iterable) {...to be excuted}

//  let people = ["ben10", "boka2", "jay jay", "mandevu", "dinho"]

//  for (const bro of people) {
//     console.log(bro);
//  }

// for (const bro in people) {
//     console.log(bro);
// }

//notice the difference in output result

//___forEach: when we call this method, we pass in anonymous callback function
// which gets called one time for every element in the array and whatever logic inside the function, will happen

// const colors = ["red", "blue", "green", "teal"]

// colors.forEach(
//     (color) => { console.log(color); }
//     );

// const words = ["hello", "bird", "table", "football","pipe", "code"]

//____capitalize a sentence_____

// function capitalizeFirstLetter(str) {
//     return str.replace(/\b\w/g, function(char) {
//       return char.toUpperCase();
//     });
//   }

// words.forEach((word, index, arr) => {
//     arr[index] = word[0].toUpperCase() + word.substring(1)
// })

//---> my version:--------------------------
// const name  = "pascal dinho lizer";

// const capName = name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

// console.log(capName);
//-------------------------------------------
// console.log(words);

// let nums = [1, 4, 8, 3, 9, 0];

// let sum = 0;

// function adder(number) {
//     sum += number
// }

// nums.forEach(adder)

// console.log(sum);

//___the "map()"__method creates a new array populated with the result of calling
// a provided function on every element in that calling array.

// let nums = [1, 4, 8, 3, 9, 0];

// let doubler = nums.map((x) => x * 2);

// console.log(doubler);

// let people = [
//     {name: "dinho", age: 20, gender:"male"},
//     {name: "lucia", age: 11, gender: "female"},
//     {name: "maite", age: 4, gender: "female"}
// ]

// const details = people.map((person) => {
//     return [person.name, person.gender]
// })

// console.log(details);

// const nums = [65, 73, 92, 27, 88]

// const trippled = nums.map((x) => {
//     return x * 3
// })

// console.log(trippled);

//____the "filter()"__ethod is a built in array method in js that allows you
// to create a new array containing elements that pass a certain condition

// const songs = [
//   { name: "lucky you", duration: 4.34 },
//   { name: "just like you", duration: 3.23 },
//   { name: "the search", duration: 2.33 },
//   { name: "old town road", duration: 1.43 },
//   { name: "the box", duration: 5.23 },
// ];

// console.log(songs.filter((song) => song.duration > 3));

// const words = [
//     "spray",
//     "limit",
//     "elite",
//     "exuberant",
//     "destruction",
//     "present",
// ]

// const validLength = words.filter((word) => word.length > 6)
// console.log(validLength);

//__the "find()"__method allows you to find the 1st element in an array that matches a specific condition

//__the "every()"__method and ___"the some()"__methd in js.

//__the "reduce()"__method in js applies the reducer function to each element of an array, accuulating
// the results into a single value. it is often used to perform calculations or aggrgations on array's elements into a single value.

// const nums = [1, 2, 3, 4, 5]

// const sumUp = nums.reduce((p, c) => {
//   return p + c
// }, 0)

// console.log(sumUp);

// const person = [
//     {
//     name: "dan",
//     age: "4"
//     },
//     {
//     name: "chris",
//     age: "5"
//     },
//     {
//     name: "lion",
//     age: "6"
//     },
//   ]

// const oldest = person.reduce((p, c) => (c.age > p ? c.age : p), 0);

// console.log(oldest);

// const fruits = [
//   "banana",
//   "orange",
//   "banana",
//   "avocado",
//   "apple",
//   "orange",
//   "orange",
// ];

// const fruitFrequency = fruits.reduce((frequency, frt) => {
//   frequency[frt] = frequency[frt] || 0 + 1;
//   return frequency;
// }, {})

// console.log(fruitFrequency);

// const nums = [1, 3, 2, 7, 9]

// const product = nums.reduce((p, c) => p * c)

// console.log(product);

//___Map__is a new built-in structure that allows you to store key-value pairs
// where both can be of any data type.
//maintain insertion order, provides easy iterstion over itd elements.
//...start with the "new" reserved keyword

// const map = new Map()

// const key1 = "some string"
// const key2 = function nothing() { return true}
// const key3 = { name: "dinho", age: 20}
// const key4 = 4

// map.set(key1, "it is a string")
// map.set(key2, true)
// map.set(key3, "it is an object")
// map.set(key4, "it is a number")

// console.log(map.delete(key3));

// for (let [key, value] of map) {
//   console.log(`${key} ---> ${value}`);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

//__"set"__set objects, unlike arrays, are useful when you need to store a list
// of unique elements and quickly check for the existence of a specific value.

//--> also start with the "new" keyword

// const myArray = [2, 4, 2, 4, 4, 7, 2];

// const mySet = new Set(myArray);

// mySet.add("apple")
// mySet.add(7)

// mySet.delete(4);
// // mySet.clear();
// // console.log(mySet);
// // console.log(mySet.has(2));

// for (let v of mySet) {
//   console.log(v);
// }

//___Symbol__is a unique and immutable data type. it is unique and cannot be recreated or changed.
// this uniqueness ensures that symbols will not vollide with other properties name, eeven if they have the same string representation

// const sym1 = Symbol("name");
// const sym2 = Symbol("name");

// console.log(sym1 === sym2);

//########### PART 3: DOM (Document Object Model) #################################
//__when a web page is loaded, the browser creates a
// Document Object Model of the page.

// console.log(document.head);
// console.log(document.title);
// console.log(document.body);
// console.log(document.URL);

//___ Accessing the DOM___from__"document"____

//1. getElementByTagName()
//2. getElementByID()
//3. getElementByClassName()
//4. querySelector()
//5. querySelectorAll()
//...

// const h1 = document.getElementsByTagName("h1");
// const main = document.getElementById("main");
// const cls = document.getElementsByClassName("cls");
// const qr = document.querySelector(".cls-1") //it selects only first element it finds, therefore we can access the innerHTML/innerText of the single element.
// // const qrl = document.querySelectorAll("h1") //it selects all the elements that it finds, therefore we cannot access the innerHTML/innerText directly

// //1. innerText
// //2. textContent
// //3. innerHTML

// const pgf = document.querySelector("p");
// main.innerHTML = "<em>Modified</em>"
// qr.innerHTML = "<del>Hello<del>"

// const first = document.querySelector(".first");
// const second = document.querySelector(".second");
// const third = document.querySelector(".third");

//______Class___________________
//1. classList --> gives you all the classes applied to an element
//2. add() ---> elemet.classList.add("class_name") --> add a new class to an element
//3. remove ---> eleme.classList.remove("class_name")--> remove a class from an element
//4. toggle() ---> element.classList.toggle("class_name")
// ==> if the element has the "class_name", it will remove it, otherwise it will add it.

// const h1 = document.querySelector("h1");

// h1.classList.add("new_class");
// h1.classList.remove("new_class");

// h1.classList.toggle("new_class");
// h1.classList.toggle("new_class");

// console.log(h1.classList);

//____Attributes________gettind and setting attributes.
//1. href
//2. value
//3. type
//4. getAttribute(attrName) --> allows you to get attribute straight from the element
//5. setAttribute(attrName, value)

// const a = document.querySelector("a");
// const inpt = document.querySelector("input");

// a.href = "https://www.youtube.com"
// inpt.value = "keep practicing"

//4. getAttribute(attrName):
// console.log(inpt.getAttribute("type"));
// console.log(`Place holder: ${inpt.getAttribute("placeholder")}`);

//5. setAttribute(attrName, value):
// inpt.setAttribute("value", 20);

// const a1 = document.getElementById("a1");
// const inpt1 = document.querySelector("#inpt-1");

// console.log(a1.getAttribute("href"));

// a1.setAttribute("href", "https://www.facebook.com")

// inpt1.setAttribute("placeholder", "go to facebook")

// console.log(a1.getAttribute("href"));

//_____parent___children____and___siblings__________

// let chld = document.querySelector("li");
// let prnt = document.querySelector("ul")

// //_______find parent_________
// console.log(chld.parentElement);

// //______find children_________
// console.log(prnt.children);

// //___find sibling_____________
// const pvs = chld.nextElementSibling;
// console.log(pvs.previousElementSibling.innerText);
// console.log(pvs.nextElementSibling.innerText);

//_________style__________________________

// let chld = document.querySelector("li");

// chld.style.listStyle = "none";
// chld.style.color = "yellow";
// chld.style.background = "teal";
// chld.style.borderRadius = "25px";

//_____Creating Element_______

// const h1 = document.createElement("h1")
// h1.textContent = "Hello World"
// h1.classList.add("box")
// h1.style.borderRadius = "30px"

// const body = document.body

// body.appendChild(h1)

// const ul = document.querySelector("ul");

// const firstLi = document.querySelector("li");

// const firstP = document.querySelector("p");

// const newLi = document.createElement("li");
// newLi.textContent = "I am the newly created one"
// newLi.classList.add("box")
// newLi.style.color = "skyblue"
// newLi.style.textAlign = "center"

// const itlq = document.createElement("i");
// itlq.innerText = "I'm italic";
// itlq.style.color = "orange";

// ul.insertBefore(newLi, firstLi);

// firstP.insertAdjacentElement("beforebegin", itlq);
//firstP.insertAdjacentElement("afterbegin", itlq);
//firstP.insertAdjacentElement("beforeend", itlq)
//firstP.insertAdjacentElement("afterend", itlq)

//___removeChild__--> will remove a particular element from the selected element
//___remove___--> will remove the whole select element

//_____Events___in the DOM______________

// function createNew() {
//     const h1 = document.createElement("h1")
//     h1.textContent = "Hello World"
//     h1.classList.add("box")
//     h1.style.borderRadius = "30px"

//     const body = document.body

//     body.appendChild(h1)
// }

// function greet () {
//     console.log("Hello world.");
// }

// const good = document.querySelector("#good");

// good.onclick = () => {
//    console.log("good been clicked");
// }

// const great = document.querySelector("#great");

// great.addEventListener("click", createNew)  //pass directly a know function

// great.addEventListener("click", () => {
//     console.log("great been clicked ");
// });                                      //pass in an callback funtion

//_______Event (e) Object___________

// const pgf = document.querySelector(".event");

// pgf.addEventListener("click", (event) => {
//   console.log(event);
// });

// const frm = document.querySelector("form");

// const npt = document.querySelector(".npt");

// frm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(npt.value);
// });

//______Events in Depth_____________
//1. mouse

// const one = document.querySelector(".click");
// const two = document.querySelector(".contextmenu");
// const three = document.querySelector(".dblclick");
// const four = document.querySelector(".mousedown");
// const five = document.querySelector(".mouseenter");
// const six = document.querySelector(".mouseleave");
// const seven= document.querySelector(".mousemove");
// const eight = document.querySelector(".mouseout");
// const nine = document.querySelector(".mouseover");
// const ten = document.querySelector(".mouseup");

// one.addEventListener("click", (e) => {
//     one.classList.toggle("aqua");
// });

// two.addEventListener("contextmenu", (e) => {
//     two.classList.toggle("brown");
// });

// three.addEventListener("dblclick", (e) => {
//     three.classList.toggle("lime");
// });

// four.addEventListener("mousedown", (e) => {
//     four.classList.toggle("gold");
// });

// five.addEventListener("mouseenter", (e) => {
//     five.classList.toggle("gold");
// });

// six.addEventListener("mouseleave", (e) => {
//     six.classList.toggle("aqua");
// });

// seven.addEventListener("mousemove", (e) => {
//     seven.classList.toggle("green");
// });

// eight.addEventListener("mouseout", (e) => {
//     eight.classList.toggle("gold");
// });

// nine.addEventListener("mouseover", (e) => {
//     nine.classList.toggle("teal");
// });

// ten.addEventListener("mouseup", (e) => {
//     ten.classList.toggle("brown");
// });

//2. keyboard
//__"keypress"__"keyup"___"keydown"___

// npt.addEventListener("keypress", (e) => {
//     console.log(e.key);
// })

// npt.addEventListener("keypress", (e) => {
//     console.log(e.charCode);
// })

// npt.addEventListener("keypress", (e) => {
//     console.log(e.code);
// })

// npt.addEventListener("keypress", (e) => {
//     console.log(e.ctrlKey);
// });

// npt.addEventListener("keypress", (e) => {
//     console.log(e.shiftKey);
// });

// #########  ADVANCED  #################

//######## OOP ##### (Object-Oriented Programming) ##################################

// OOP is a programming language model/style organized around objects rather then
// actions and data rather then logic.

//_____"this"_____heyword:
// The JavaScript keyword "this" refers to the object it belongs to.
// it has different values depending on where it is used.
// In a method: "this" refers to the owner object
// Alone: "this" refers to the global object
// In a function: "this" refers to the global object

// const person = {
//   firstName: "Dinho",
//   age: 30,
//   greetRegular: function () {
//     return `Hello, my name is ${this.firstName} and I am ${this.age} years old.`;
//   },
//   greetArrow: () => {
//     return `Hello, my name is ${this.firstName} and I am ${this.age} years old.`;
//   },
// };

// console.log(person.greetRegular()); // "this" refers to owner object(person) beacuse it used in a method, using a regular function.
// console.log("\n");
// console.log(person.greetArrow()); // "this" refers to window object, although it's used in a method, but the arrow function does not know which function it is, so it quickly looks for the window as owner objct

//_____factory function___: a factory function is a type of function
// that is used to create and return objects. it is a design pattern tha provides an alternative way
// to create objects compared to using constructors and the "new" keyword.

// function createUser(firstName, lastName, pl)  {
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         pl: pl,
//         details: function() {
//             return console.log(`Hello, my name is ${firstName} ${lastName}, and I use ${pl}`);
//         }
//     }
// };

// const dinho = createUser("Dinho", "Lizer", "Python")
// const jules = createUser("Jules", "Boka2", "JavaScript")

// dinho.details()
// jules.details()

//___constructor function___: are rugular functions used with the "new"
// keyword to create and initialize objects with shared properties and methods. The act as
// blueprints for creating multiple instances of objects with the same structure and behavior.

// "new" keyword + function combination procedure to create objects:

//__first create empty object with parameters
//__set "this" to point to that object
//__we can omit the retuen statement using "new" keyword

//function CreateUser(firstName, lastName, pl) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.pl = pl
//     this.details = function () {
//         console.log(`Hello, my name is ${firstName} ${lastName}, I use ${pl}.`);
//     }
// }

// const ben = new CreateUser("Benedict", "Cokie", "React")
// ben.details();

// function Book(title, author, year) {
//     this.title = title
//     this.author = author
//     this.year = year
//     this.bookInfo = function() {
//         console.log(`${this.title} by ${this.author}, ${this.year}`);
//     }
// }

// const book1 = new Book("The subtle art of not giving a fuck", "Mark", 2007)

// book1.bookInfo()

//__Built-in constructors____: also known as native constructors, are standard constructors provided
// by JavaScript taht allow  you to create objects of various data types. These constructors are available globally and\
// do notneed to be explicitly defined. They provide a convenient way to create instances of primitives data types and built-in objects.

// The "Object.create()" method creates a new object, using an existing
// object as the prototype of the newly created object.

// let person = {
//     details: function () {
//         console.log(`Hello, my name is ${this.name}, I use ${this.pl}.`);
//     }
// };

// const dinho = Object.create(person)

// dinho.name = "Diho";
// dinho.pl = "React";

// dinho.details()

// let maite = Object.create(person, {
//     name: {value: "Maite"},
//     pl: {value: "Python"},
// });

// maite.details()

//___Every javascript object has an anonymous property called prototype,
// Remember functions & arrays are also objects!!!
// The prototype will be the parent of that object, prototype property
// is object by itself, which have some special peopertie & methods

//########## CLASSES ############################
//classes are one of the features introduced in ES6 version of javascript.
// A class is a blueorint for the object. You can create an object from the class.
// You can think of the class as a sketch(prototype) of a house. it contains all the
// details about the floors, doors, windows, etc...
// Based on these descriptions, you can build the house
// since many houses can be made from the same description, we can create many objects from the same class.

// class declaration:

// class Person {
//     constructor(firstName, lastName, age) {
//         //Instance Member
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.details = function() {
//             return `Name: ${this.firstName} ${this.lastName}\nAge: ${this.age}`;
//         };
//     };
//     // prototype members
//     greet() {
//         return `Hello, my name is ${this.firstName} ${this.lastName}`
//     }
// };

// class Programmer extends Person {
//     constructor(firstName, lastName, age, pl, experience) {
//         super(firstName, lastName, age);  //--> this just calls the parent construcor (Person's in this case)
//         this.pl = pl;
//         this.experience = experience;
//     }
// }

// const dinho = new Person("Dinho", "Liser", 20);

// const ben = new Programmer("Benedict", "Cokie", 12, "JavaScript", 3);

// console.log(ben.greet());
// console.log(dinho.details());
// console.log(dinho.greet());

// class Hero {
//     constructor(name, level) {
//         this.name = name;
//         this.level = level;
//     };
//     greet() {
//         return `Hello, I am ${this.name}.`
//     }
// }

// class Mega extends Hero {
//     constructor(name, level, spell) {
//         super(name, level);
//         this.spell = spell;
//     }
// }

// const dinho = new Hero("Dino", 27);

// const potter = new Mega("Potter", 30, "Flying")

// console.log(potter.greet());

//_________Modifiers________________
// class modifiers, also known as access modifiers or visibility modifiers,
// are keywords in OOP languages that define the visibility or accessibility of class members
// (fields, methods, and nested classes) from other parts of the program.
// They control the level of encapsulation and help enforce encapsulation principles by
// restricting direct access too ceertain class members.

// In javascript, class modifiers are used in the context of classes and objects, although javascript does not have
// modifiers like some other OOP language (eg. Jave).
// However, you can archieve similar effects using different conventions and techniques.

//#### SYNCHRONOUS & ASYNCHRONOUS ######################

//_1. Synchronous JavaScript refers to the traditional way of executing JS code, where
// each operation is performed in a sequential and blocking manner.
// In other words, each line of code is executed one after the other and the program will
// wait for each operation to finig sh before moving to the next one.
// If an operation takes a long time to complete, it can potentially
// slow down the entire application, making it less responsive.

//_2. Asynchronous JavaScript allows certain operations to be executed independently from the main
// program flow, so they don't block the execution of other tasks.
// This is typically achieved using techniques like callbacks, promises, and async/wait, which
// allows developers to handle asynchronous operations more efficiently.

//___Synchronous Code  Example_____

// function myFunc() {
//     console.log("Inside function");
// }

// console.log("Start");
// myFunc();
// console.log("End");

//___Asynchronous Code  Example_____

// console.log("Start");

// setTimeout(() => {
//     console.log("TimeOut function");
// }, 2000);

// console.log("End");

// function callbackHell(callback) {
//     setTimeout(() => {
//         const data = "Inside (callbackHell) Function.";
//         console.log(data);
//         callback(data);
//     }, 2000)
// }

// function firstFunc(data, callback) {
//     setTimeout(() => {
//         const processedData = `${data} - Processed First.`;
//         console.log(`Inside (firstFunc) Function.`);
//         callback(processedData);
//     }, 1000)
// }

// function secondFunc(data, callback) {
//     setTimeout(() => {
//         const processedData = `${data} - Processed Second.`;
//         console.log("Inside (secondFunc) Funtion.");
//         callback(processedData);
//     }, 1500);
// }

// //___Callback Hell
// callbackHell((data) => {
//     firstFunc(data, (processedData1) => {
//         secondFunc(processedData1, (processedData2) => {
//             console.log(`Final result: ${processedData2}`);
//         })
//     })
// })

//___be carefull: callback function is not always asynchronous___

// console.log("Start");

// const num = [1, 2, 3, 4, 5, 6, 7];
// num.forEach((n) => console.log(n));

// console.log("End");

// console.log("Start");

// function getUserDataFromDB(name, callback) {
//     setTimeout(() => {
//         console.log("Getting User Name...");
//         callback(name)
//     }, 2000)
// };

// function getuserHobbies(name, callback) {
//     setTimeout(() => {
//         console.log("Getting User Hobies...");
//         callback(["football, reading", "coding", "jogging"])
//     }, 2000)
// };

// getUserDataFromDB("Dinho", (data) => {
//     console.log(data);
//     getuserHobbies(data, (hobbies) => {
//         console.log(hobbies);
//     })
// });

//console.log("End");

//?_________Promise___________:
// A promise is an object representing the eventual completion or failure
// of an asynchronous operation.

// A promise has 3 states:
// 1. Pending
// 2. Fulfilled / Resolved
// 3. Rejected

// ____syntax____:

// new Promise( (resolve, reject) => {
//     // Async operations
//     resolve(value);
//     reject(Error);
// })

//____ .then() ___: is a method used to handle the successful outcome of a Promise in JS.
// It takes 2 arguments: (onFulfilled, onRejected)

//____ .catch() ___: the catch() method returns a Promise & deals with rejected case only.

// const promiseObj = new Promise((resolve, reject) => {
//     let req = false;
//     req == true ? resolve("Request Successful") : reject("Request Rejected");
// })
// .then((feedback) => console.log(feedback))
// .catch((feedback) => console.log(feedback));

// function checkNumber(num) {
//     return new Promise((resolve, reject) => {
//         num % 2 == 0 ? resolve(`${num} is an even number`) : reject(`${num} is an odd number`);
//     })
//     .then((feedback) => console.log(feedback))
//     .catch((feedback) => console.log(feedback))
// };

// checkNumber(113);

//  function callbackHell(callback) {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//         const data = "Inside (callbackHell) function.";
//         console.log(data);
//         resolve(data);
//        }, 2000);
//     });
//  };

//  function firstFunc(data) {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//         const processedData = `${data} - Processed data 1`;
//         console.log(`Inside (firstFunc) function 1.`);
//         resolve(processedData);
//        }, 2000);
//     });
//  };

//  function secondFunc(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed data2.`;
//             console.log("Inside (secondFunc) function 2.");
//             resolve(processedData);
//         }, 1500);
//     });
//  }

//  callbackHell()
//     .then((data) => firstFunc(data))
//     .then((processedData1) => secondFunc(processedData1))
//     .then((processedData2) => console.log(`Final result: ${processedData2}`))
//     .catch(error => console.log(`Error: ${error}`));

//_____ Async Function _____:
// Async function is a special function that is designed to operate
// asynchronously, meaning that it can perform tasks in the background while other
// code continues to execute. Async functions are marked with the async keyword.

//____ await ____:
// the await operator is used to wait for a promise. It can only be
// used inside an async function within regular JS code.

// example:

// async function getData() {
//     const response = await fetch("https://api.exapmle.com/endpoint");
//     const data = await response.json();
//     return data;
// }

// async function main() {
//     const data = await getData();
//     console.log(data);
// }

// function fetchDataFromServer() {
//   console.log("still working on it...");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("User data retrieved from the server.");
//       }, 4000)
//     })
// };

// async function getUserData() {
//   try {
//     const data = await fetchDataFromServer();
//     console.log(data);
//     console.log("Remaining task can be executed here.");
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUserData()

// function callbackHell() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = "Inside (callbackHell) function";
//             console.log(data);
//             resolve(data);
//         }, 2000);
//     })
// }

// function firstFunc(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed first.`;
//             console.log("Inside (firstFunc) Function.");
//             resolve(processedData)
//         }, 3000);
//     })
// }

// function secondFunc(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed second.`;
//             console.log("Inside (secondFunc) Function.");
//             resolve(processedData);
//         }, 4000);
//     })
// }

// async function processedDataWithAsyncAwait() {
//     try {
//         const data = await callbackHell();
//         const processedData1 = await firstFunc(data);
//         const processedData2 = await secondFunc(processedData1);
//         console.log(`Final result: ${processedData2}`);

//     } catch (error) {
//        console.log(`Error: ${error}`);
//     }
// };

// processedDataWithAsyncAwait()

// ______ fetch()  (API) _____ method.

// callback
// new promise
// async / await

// ___ .text() ____ method returns promise if resolved will return a text reprentation of the body.
// fetch("sample.txt")
// .then((data) => data.text())
// .then((result) => console.log(result))
// .catch(error => console.log(error))

// fetch API promise only rejects when we have network error (not in other case)
// therefore we can refactor the above code as follows:

// fetch("sample.txt")
// .then((data) => {
//     if (!data.ok) throw Error(data.statusText);
//     return data.text();
// })
// .then((result) => console.log(result))
// .catch((error) => console.log(error));

//___ we can also refactor the above code further by using async / await approach-

// let result = document.querySelector(".result");

// async function renderData() {
//   try {
//     const data = await fetch("sample.txt");

//     if (!data.ok) throw Error(data.statusText);

//     const finalResult = await data.text();
//     result.innerText = finalResult;

//   } catch (error) {
//     console.log(error);
//   }
// }

// renderData();

//___rendering a json file:

// let result = document.querySelector(".result");

// async function renderData() {
//     try {
//         const response = await fetch("data.json");
//         if (!response.ok) throw Error(response.statusText);

//         const finalResult = await response.json()
//         result.innerText = finalResult.name

//     } catch (error) {
//         console.log(error);
//     }
// }

// renderData()

// ####### USING APIs ###############################

const btn = document.querySelector(".btn");

btn.addEventListener("click", makeRequest);

function makeRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((data) => {
      let posts = document.querySelector(".posts");
      data.forEach((post) => {
        posts.innerHTML += `
                    <div>ID: ${post.id}</div>
                    <div>TITLE: ${post.title}</div>
                    <div>BODY: ${post.body}</div>
                    </br>
                `;
      });
    });
}
