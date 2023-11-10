// function 기계() {
//   this.이름 = "Kim";
// }

// let 오브젝트 = new 기계();

// document.getElementById("btn").addEventListener("click", (e) => {
//   var arr = [1, 2, 3];
//   arr.forEach((a) => {
//     console.log(this);
//   });
// });

// var obj = {
//   names: ["김", "이", "박"],
//   function: function () {
//     obj.names.forEach(() => {
//       console.log(this);
//     });
//   },
// };

// obj.function();

// let arr = [3, 4, 5];

// arr.forEach((a, i) => {
//   console.log(arr[i]);
// });

// let 함수 = {
//   함수: () => {
//     console.log(this);
//   },
// };
// 함수.함수();

// var 사람 = {
//   name: "손흥민",
//   sayHi: () => {
//     console.log("안녕 나는" + 사람.name);
//   },
// };

// 사람.sayHi();

// var 자료 = {
//   data: [1, 2, 3, 4, 5],
// };

// function plus() {
// let b = 0;
//   자료.data.forEach((a) => {
//     b = b + a;
//   });
//   console.log(b);
// }

// plus();

// document.getElementById("btn").addEventListener("click", function () {
//   setTimeout(() => {
//     console.log(this.innerHTML);
//   }, 1000);
// });

// for (let i = 1; i < 6; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// let btns = document.querySelectorAll("button");
// let modals = document.querySelectorAll("div");

// for (let i = 0; i < 3; i++) {
//   btns[i].addEventListener("click", () => {
//     modals[i].style.display = "block";
//   });
// }

// let pants = 0;
// let socks = 100;

// function 해체(a, b, c) {
//   if (b == 0) {
//     console.log(`바지다팔렸어요 ` + a[1] + c);
//   } else {
//     console.log(a[0] + b + a[1] + c);
//   }
// }

// 해체`바지:${pants} 양말:${socks}`;

// let o1 = { a: 1, b: 2 };
// let o2 = { ...o1, c: 3 };

// console.log(o2);

// function plus(a, b, c) {
//   console.log(a + b + c);
// }
// let arr = [10, 20, 30];
// plus(...arr);

// function puls(a, b = 2 * a) {
//   console.log(a + b);
// }

// puls(1);

// function 함수(...rest) {
//   for (let i = 0; i < rest.length; i++) {
//     console.log(rest[i]);
//   }
// }

// 함수(1, 2, 3, 4, 5, 6);

// let a = [1, 2, 3];
// let b = "김밥";
// let c = [...b, ...a];

// console.log(c);

// let a = [1, 2, 3];
// let b = ["you", "are"];
// let c = function (a, b) {
//   console.log([[...a], ...[...b]][1]);
// };

// c(a, b);

// function 함수(a = 5, b = a * 2) {
//   console.log(a + b);
// }

// 함수(undefined, undefined);

// function arr(...rest) {
//   return rest;
// }

// let newArr = arr(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(newArr);

// let numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];

// console.log(Math.max(...numbers));

// console.log(["b", "c", "a"].sort());

// function 정렬(a) {
//   console.log(...[...a].sort());
// }
// 정렬("bear");

// function count(a) {
//   // a를 분해해서 if 문 으로 거르고 오브젝트 안에 넣기
//   let total = {};
//   [...a].forEach((a) => {
//     if (total[a] > 0) {
//       total[a] = total[a] + 1;
//     } else {
//       total[a] = 1;
//     }
//   });
//   console.log(total);
// }
// count("aaaacbbbddddd");

// let 이름1 = { name: "김" };
// let 이름2 = { name: "김" };

// function Change(obj) {
//   obj = { name: "Park" };
// }

// Change(이름1);

// var 학생1 = {
//   name: "Kim",
//   age: 15,
//   sayHi() {
//     console.log(`안녕하세요 ${this.name} 입니다.`);
//   },
// };

// 학생1.sayHi();

// function Student(a) {
//   this.name = a;
//   this.age = 15;
//   this.sayHi = function () {
//     console.log(`안녕 나는 ${this.name} 이야`);
//   };
// }

// Student.prototype.gender = "남";

// var 학생1 = new Student("Kim");
// var 학생2 = new Student("Park");
// var 학생3 = new Student("Lee");

// 학생1.sayHi();
// 학생2.sayHi();
// 학생3.sayHi();

// function Product(a, b) {
//   this.name = a;
//   this.price = b;
//   this.부가세 = function () {
//     console.log(this.price * 0.1);
//   };
// }

// let product1 = new Product("shirts", 50000);
// let product2 = new Product("pants", 60000);
// product1.부가세();
// product2.부가세();

// Array.prototype.remove3 = function () {
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === 3) {
//       this.splice(i, 1);
//     }
//   }
// };
// let arr = [1, 2, 3];
// arr.remove3();
// console.log(arr);
