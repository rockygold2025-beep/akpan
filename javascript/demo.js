// string

let title = "The Final Run";
let author = "Barry Lee";
let address = "Lagos, ikeja.";
let quotes = "\"I hate people";
let body = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur velit sed odio illo et eligendi tempora amet ab explicabo laboriosam atque, ad expedita perferendis debitis cumque similique repellat quae optio!"
let likes = "500";


// document.getElementById("h1").innerText = title;

// document.getElementById("h2").innertext = "Authored by" + author +"." + address;

// document.getElementById('p').innerHTML = "Glory shouted angrily" + quotes;

// document.getElementById("likes").innerHTML = likes;


let div = document.getElementById("div");

// let display = "The title of the book is " + title +  " written by the author " + author + ", he lives in " + address  + ". Barry lamented, " + quotes + " coming over to beg for money\"" + ". He has over " + likes + " likes";
// console.log(display);

// let display = `The title of the book is ${title} written by the author ${author}, he lives in ${address}. Barry lamented, ${quotes} coming over to beg for money". He has over ${likes} likes. `;


let display = `
   <h1> ${title} </h1>
   <p>Written by <strong>${author}</strong>. Location - ${address}</p>
   <hr>
   <h4>${body}. Barry lamented, ${quotes} coming over to beg for money".</h4>
   <h5 style = "margin-left:200px ;">${likes} <span style="color: blue">likes</span></h5>
`;

div.innerHTML = display;

//string methods
let fullname = "Goodluck Obi";
let char = fullname[0];
console.log(char);
let lenth = fullname.length;
console.log(lenth);
console.log(fullname.toUpperCase())
console.log(fullname.indexOf('b'))
console.log(fullname.slice(8, 12))
console.log(fullname.replace('Obi', 'Ada'));


// function submitData() {
//    const firstname = document.getElementById('firstname').value.trim();
//    const lastname = document.getElementById('lastname').value.trim();
//    const age = document.getElementById('age').value.trim();
//    const course = document.getElementById('course').value.trim();

//    let fullnameD = document.getElementById("fullnameD")
//    let ageD = document.getElementById("ageD")
//    let courseD = document.getElementById("courseD")

//    if (!firstname || !lastname || !age || !course) {
//       response.textContent = "please fill in all fields.";

//       response.style.color = "red";
//       return;
//    }

//    fullnameD.innerHTML = `Full-name: ${firstname}  ${lastname}`;
//    ageD.innerHTML = `Age: ${age}`;
//    courseD.innerHTML = `Course stiudy: ${course}`;

/* const responseMessage =
  `
  
 submitted succesfully!
 Name:${firstname}  ${lastname} 
 Age : ${age}
 course of study:${course}
 `;
 
 
 response.innerHTML = responseMessage; */




let number = 3.126532

console.log(number.toFixed(2))
console.log(parseInt("12.5"))
console.log(parseFloat("12.5"))
console.log(isNaN("50"))
console.log(Number("5"))



console.log(5 == '5')
console.log(5 == 5)
console.log(5 === '5')
console.log()


let score = 20;
let grade = score >= 90 ? "A" :
   score >= 80 ? "B" :
      score >= 70 ? "c" : "F";
console.log(grade);

function submitform() {
   let fullnameF = document.getElementById('fullname');
   // let ageF = document.getElementById('age').value.trim();
   let form = document.getElementById('form');

   console.log(ageF)
   let canvote;

   if (ageF >= 18) {
      canvote = "Yes, " + fullnameF.value + "can vote";
      form.innerHTML = "<h1>" + canvote + "</h1>"
   } else {
      canvote = "No, " + fullnameF.value + " is not eligible to vote";
      form.innerHTML = "<h1>" + canvote + "</h1>"
   }

}

function submitD() {

   let firstname = document.getElementById('firstname').value;
   let lastname = document.getElementById('lastname').value;
   let age = document.getElementById('age').value;
   let course = document.getElementById('course').value;
   let assesment = Number(document.getElementById('assesment').value);
   let project = Number(document.getElementById('project').value);
   let exam = Number(document.getElementById('exam').value);



   let fname = document.getElementById('fname');
   let dage = document.getElementById('dage');
   let dcourse = document.getElementById('dcourse');
   let dproject = document.getElementById('dproject');
   let asses = document.getElementById('asses');
   let dexam = document.getElementById('dexam');
   let dtotal = document.getElementById('dtotal');


   fname.innerHTML = `firstname : ${firstname} ${lastname}`;
   dage.innerHTML = `Age: ${age}`;
   dcourse.innerHTML = `course of study: ${course}`;
   dproject.innerHTML = `project: ${project}`;
   asses.innerHTML = `assesment : ${assesment}`;
   dexam.innerHTML = `exam score ${exam}`;
   let total = assesment + project + exam;



   dtotal.innerHTML = `Total score: ${total}`
   let dgrade = document.getElementById('dgrade');
   let dremark = document.getElementById('dremark');

   let grade = "";
   let remark = "";

   if (total >= 80) {
      grade = "A";
      remark = "Excellent";
   } else if (total >= 70) {
      grade = "B";
      remark = "Very Good";
   } else if (total >= 50) {
      grade = "C";
      remark = "Good";
   } else if (total >= 40) {
      grade = "P";
      remark = "Pass";
   } else {
      grade = "F";
      remark = "Fail";
   }

   dgrade.innerHTML = `Grade: ${grade}`;
   dremark.innerHTML = `Remark: ${remark}`;




}


let btn = document.getElementById('btn')

function btnbna() {
   btn.innerHTML = Date()
}
btn.addEventListener('click', btnbna)


box.addEventListener("click", () => alert("clicked!"));
box.addEventListener("mouseover", () => box.style.background = "green");
box.addEventListener("mouseout", () => box.style.background = "white");

document.getElementById("newinput").addEventListener("keydown", function (event) {
   console.log("keydown:", event.key);
})

const car = {
   name: "benz",
   comp: "GLE",
   weight: "870kg",
   color: "white",
   PRICE: "30000000",
}
car.name = "toyota";
car.make = "bently"

console.log(car)
// Math Object

console.log(Math.random());


let min = 5;
let max = 20;
let randomnumber = Math.floor(Math.random() * (max - min)) + min;
console.log(randomnumber);

//date
const d = Date.parse(new Date())
console.log(d)


//Function

// function Yourself(name, age, state, course) {



//    let details = `My name is ${name} and i am ${age} years old from ${state},
//     ${course} is now my favourite course in university `;
//    console.log(details)
// }
// Yourself("firstborn", 22, "AkwaIbom", "Accounting")

// function createUser(name,age){
// return{
//    name:name,
//    age:age,
//    greet:function () {
//       console.log("hi,my name is", + name + "and i am" + age + "years old.");
//    }
// }

function Person(name, age) {
   this.name = name;
   this.age = age
}
let person1 = new Person("john", 40);
console.log(person1.name + "whose age" + person1.age);


const fruit = ["mango", "pawpaw", "cherry", "pinneaple", "orange", "cucumber", "banana", "bluebery", "grape", 'apple']

// fruit.push("🍔")
fruit.unshift("🎓😂")

fruit.shift()
let pop = fruit.pop();
console.log(pop)


console.log(fruit)

let s = fruit.find((f) => {
   return f.startsWith("p")
})
console.log(s)

let r = fruit.findIndex((f) => {
   return f.length > 6
});
console.log(r)

let p = fruit.sort();
console.log(p);

let t = fruit.reverse();
console.log(t);

let time = document.getElementById('time');

let num = [
   1, 90, 100, 8, 50, 30, 200, 10
]
let sort = num.sort((a, b) => {
   return a - b;
})
console.log(sort)

//splice and slice
let numbers = [
   1, 2, 3, 4, 5
];
numbers.splice(2, 0, 8, 9);
console.log(numbers)

let fruits = ["banana", "mango", "orange", "pawpaw", "guava"];
//  const citrus = fruits.slice(2);
//  console.log(fruits)
//  console.log(citrus)

console.log(fruits.join(" + ")
)

//Array Iteration

let text = "";

// for (let index = 0; index < array.length; index++) {
//    const element = array[index];

// }

document.querySelector("#loop").innerHTML = text;

function timee() {

   setInterval(() => {
      let date = new Date();

      let hour = date.getHours()
      let minute = date.getMinutes()
      let second = date.getSeconds()
      let ap = "AM";

      h = hour < 10 ? "0" + hour : hour;
      m = minute < 10 ? "0" + minute : minute;
      s = second < 10 ? "0" + second : second;
      ap = hour < 12 ? "AM" : "PM"

      time.innerHTML = `${h}:${m}:${s}<span style = "color: red; font-size : 16px;" >${ap}</span>`

   })
}
timee();


const clock = {
   hour: document.getElementById("hourhand"),
   minute: document.getElementById("minutehand"),
   second: document.getElementById("secondhand"),

   update() {
      const now = new Date();

      const s = now.getSeconds();
      const m = now.getMinutes();
      const h = now.getHours();

      const secDeg = s * 6;
      const minDeg = m * 6 + s * 0.1;
      const hourDeg = (h % 12) * 30 + m * 0.5;

      this.second.style.transform =
         `translate(-50%, -90%) rotate(${secDeg}deg)`;

      this.minute.style.transform =
         `translate(-50%, -90%) rotate(${minDeg}deg)`;

      this.hour.style.transform =
         `translate(-50%, -90%) rotate(${hourDeg}deg)`;
   },

   start() {
      this.update();
      setInterval(() => this.update(), 1000);
   }
};

clock.start();

let loop2 = document.getElementById("loop2");

let loop = ""

for (let n = 1; n < 30; n++) {
   loop += "The number is " + n + "<br>";

}
loop2.innerHTML = loop;


const cars = ["BMW", "Volvo", "Mini"];
let texts = "";
for (let x of cars) {
   texts += x + " ";
}
console.log(texts)


let i = 0;
while (cars[i]) {
   texts += cars[i] + " / ";
   i++;
}
console.log(texts)

// let container = document.getElementById("color-container");

// let colours = ['orange', 'blue', 'red', 'purple', 'green'];


function randomCol() {
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);

   return `rgb(${r}, ${g}, ${b})`;
}

setInterval(() => {
   document.body.style.backgroundColor = randomCol();
}, 500);

// let color = 0;

// function disco() {
//    if (color === colours.length - 1) {
//       color = 0;
//    }
//    if (color < colours.length) {
//       container.style.backgroundColor = colours[Math.floor(Math.random() * color)];
//       color++;
//    }
// }
// setInterval(() => {
//    disco()
// }, 500);
function displays(value, index, array) {
   console.log(value)
}

let fruitss = ["orange", "paw-paw", "lemon", "mango", "cherries"];

fruitss.forEach(toUpperCase)
fruitss.forEach(displays)

// fruitss.forEach = (element, index, array)=> {
//    array[index] = element.charAt(0).toUpperCase()
//       + element.slice(1)
// }
// console.log(fruitss)
// touppercase
function toUpperCase(element, index, array) {

   array[index] = element.charAt(0).toUpperCase()
      + element.slice(1)
}
console.log(fruitss)
function displays(output) {
   console.log(output)
}

const age = ["60", "20", "10", "25", "15"]

const agesmap = age.map((age) => Math.sqrt(age))

console.log(agesmap)


const studentage = [30, 25, 20, 15, 17, 23];

const oldeststudent = studentage.reduce((max, agees) => Math.max(max + agees));
console.log(oldeststudent)



// Array Object
const products = [
   { productName: "Pinot Noir", category: "Red wine", manufacture: 2024, expire: 2026 },
   { productName: "Sauternes", category: "Desert wine", manufacture: 2023, expire: 2026 },
   { productName: "Chardonnay", category: "White wine", manufacture: 2025, expire: 2028 },
   { productName: "Malbec", category: "Red wine", manufacture: 2023, expire: 2026 },
   { productName: "Rosada", category: "Rose wine", manufacture: 2023, expire: 2025 },
   { productName: "Riesling", category: "White wine", manufacture: 2024, expire: 2026 },
   { productName: "Italian Rosata", category: "Rose wine", manufacture: 2023, expire: 2025 },
   { productName: "Syrah/Shiraz", category: "Red wine", manufacture: 2024, expire: 2026 },
];

const pinCodes = ["F", 21, 5, 44, 20, "K", "C", 25, 32, 45, "A", 15, 16, 53];

for (let i = 0; i < products.length; i++) {
   console.log(products[i])
}

// let numberse = [];
// for(let i = 0; i < pinCodes.length; i++){
//    if(typeof pinCodes[i] === "number"){
//       numberse.push(pinCodes[i])
//    }
// } 

//filter
const numberse = pinCodes.filter(pin => typeof pin === "number")
console.log(numberse)

const lunchProduct = products.filter(function (products) {
   if (products.category === "Red wine") {
      return true
   }
});

console.log(lunchProduct)

const producText = products.map(product => `${product.productName} [MF: ${product.manufacture}] - [Ex: ${product.expire}]`);

console.log(producText)
//sort
// const sortProduct = products.sort(function(p1,p2){
//    if (p1.manufacture > p2.manufacture){
//       return 1;
//    }
//    else{
//       return -1
//    }
// });

const sortProduct = products.sort((p1, p2) => (p1.manufacture > p2.manufacture ? 1 : -1))

console.log(sortProduct)




//callback
// A call back is a function passed as an argument to another function

//FUNCTION SEQUENCE 
// javascript function are executed in the sequence they are called.Not in the sequence they are defined 
// example {function  display(some){
//document.getElementbyId("demo") = some;
//}

// function myFirst() {
//    setTimeout(() => {
//       console.log("hello😂")
//    }, 3000)
// }

// function mysecond() {
//    console.log("goodbye👋🏽")
// }
// myFirst()
// mysecond()

//call back hell
// function myFirst(callback) {
//    setTimeout(() => {
//       console.log("hello😂")
//       callback();
//    }, 3000)
// }

// function mysecond() {
//    console.log("goodbye👋🏽")
// }
// myFirst(mysecond)

//Asynchronous

// function method1(callback) {
//    setTimeout(() => {
//       console.log("method 1 complete")
//       callback();
//    }, 2000);
// }
// function method2(callback) {
//    setTimeout(() => {
//       console.log("method 2 complete")
//       callback();
//    }, 1000);
// }
// function method3() {
//    setTimeout(() => {
//       console.log("method 3 complete")
//    }, 3000)
// }
// method1(() => {
//    method2(() => {
//       method3(() => {
//          console.log("All methods complete")
//       })
//    })
// })
//promise
// function method1() {
//    return new Promise((resolve, reject) => {

//       setTimeout(() => {
//          const passTest1 = true;
//          if (passTest1) {
//             resolve("method 1 complete")
//          } else {
//             reject("method 1 fail")
//          }
//       }, 2000)
//    });
// }

// function method2() {
//    return new Promise((resolve, reject) => {

//       setTimeout(() => {
//          const passTest2 = true;
//          if (passTest2) {
//             resolve("method 2 complete")
//          } else {
//             reject("method 2 fail")
//          }
//       }, 1000)
//    });
// }
// function method3() {
//    return new Promise((resolve, reject) => {

//       setTimeout(() => {
//          const passTest3 = true;
//          if (passTest3) {
//             resolve("method 3 complete")
//          } else {
//             reject("method 3 fail")
//          }
//       }), 3000
//    });
// }
// method1()
//    .then(value => {
//       console.log(value);
//       return method2()
//    })
//    .then(value => {
//       console.log(value);
//       return method3()

//    })
//    .then(value => {
//       console.log(value);
//       console.log("All methods complete")
//    })

//    .catch(error => console.log("it an error"))
//Async/Await=================

// function method1() {
//    setTimeout(() => {
//       console.log("method 1 complete")
//    }, 2000);
// }

// function method2() {
//    setTimeout(() => {
//       console.log("method 2 complete")
//    }, 1000);
// }

// function method3() {
//    setTimeout(() => {
//       console.log("method 3 complete")
//    }, 3000)
// // }
// async function runAllMethods() {
//    try {
//       const result1 = await method1()
//       console.log(result1)

//       const result2 = await method2()
//       console.log(result2)

//       const result3 = await method3()
//       console.log(result3)
//       console.log("All results complete")

//    } catch (error) {
//       console.log("An error occured",error)
//    }
// }
// runAllMethods()

const obj = {
   name: "Emeka",
   Age: 25,
   isStudent: true,
   course: ["HTML", "CSS"]
}
const jsonString = JSON.stringify(obj)
console.log(jsonString)

const parsedobj = JSON.parse(jsonString)
console.log(parsedobj);