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

// let 부모 = { name: "Kim", age: 50 };

// let 자식 = Object.create(부모);
// 자식.age = 20;

// let 손자 = Object.create(자식);

// class 부모 {
//   constructor(a) {
//     this.name = a;
//   }
// }

// let 자식 = new 부모("김");

// class 할아버지 {
//   constructor(name) {
//     this.성 = "김";
//     this.이름 = name;
//   }
// }

// let 할아버지1 = new 할아버지("만덕");

// class 아버지 extends 할아버지 {
//   constructor(name) {
//     super(name);
//     this.나이 = 50;
//   }
// }

// let 아버지1 = new 아버지("만수");

// let 사람 = {
//   name: "Park",
//   age: 30,
//   get nextAge() {   //return  필수
//     return this.age + 1;
//   },
//   set setAge(a) {  //파라미터 1개가 있어야 가능 ,2개는 불가능
//     this.age = parseInt(a);
//   },
// };

// class 강아지 {
//   constructor(종류, 색) {
//     this.type = 종류;
//     this.color = 색;
//   }
//   한살먹기() {
//     if (this.age != undefined) {
//       this.age += 1;
//     } else {
//       console.log("에러");
//     }
//   }
// }

// let 강아지1 = new 강아지("말티즈", "white");
// let 강아지2 = new 강아지("진돗개", "brown");

// class 고양이 extends 강아지 {
//   constructor(종류, 색, 나이) {
//     super(종류, 색);
//     this.age = 나이;
//   }
// }

// let 고양이1 = new 고양이("코숏", "white", 5);
// let 고양이2 = new 고양이("러시안블루", "brown", 2);

// class Unit {
//   constructor() {
//     this.str = 5;
//     this.hp = 100;
//   }
//   get battlePoint() {
//     return this.str + this.hp;
//   }
//   set heal(힐) {
//     this.hp = this.hp + 힐;
//   }
// }

// let 인스턴스 = new Unit();

// console.log(인스턴스.battlePoint);

// let data = {
//   odd: [],
//   even: [],

//   get getter함수() {
//     return console.log([...this.odd, ...this.even].sort());
//   },

//   setter함수(...rest) {
//     for (let i = 0; i < rest.length; i++) {
//       if (rest[i] % 2 != 0) {
//         this.odd.push(rest[i]);
//       } else {
//         this.even.push(rest[i]);
//       }
//     }
//   },
// };

// data.setter함수(1, 2, 3, 4, 5);
// data.getter함수;

// let arr = [2, 3, 4];
// let [a, b, c = 10] = [2, 3];

//  let obj = { name: "Kim", age: 24 };
// let { name: 이름 = 'lee', age } = { name: "Kim", age: 24 };

// let name = "Lee";
// let age = 30;

// let obj = { name: "Kim", age: 24 };

// function 함수([name, age]) {
//   console.log(name, age);
// }

// 함수([1, 2]);

// let 신체정보 = {
//   body: {
//     height: 190,
//     weight: 70,
//   },
//   size: ["상의 Large", "바지 30인치"],
// };

// let {
//   body: { height: 키, weight: 몸무게 },
//   size: [상의사이즈, 하의사이즈],
// } = 신체정보;

// let a = 10;
// let b = 20;
// let c = 30;
// export { a, b };
// export default c;

// function 첫째함수(a) {
//   console.log(1);
//   a();
// }

// function 둘째함수() {
//   console.log(2);
// }

// 첫째함수(둘째함수);

// let 프로미스 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve();
//   }, 5000);
// });

// 프로미스
//   .then(function () {
//     console.log("성공");
//   })
//   .catch(function () {
//     console.log("실패");
//   });

// let 프로미스 = new Promise(function (resolve, reject) {
//   document.querySelector("#test").addEventListener("load", function () {
//     resolve();
//   });
//   document.querySelector("#test").addEventListener("error", function () {
//     reject();
//   });
// });

// 프로미스
//   .then(function () {
//     console.log("성공");
//   })
//   .catch(function () {
//     console.log("ERROR");
//   });

// let Ajax = new Promise(function (resolve, reject) {
//   $.ajax({
//     type: "GET",
//     url: "https://codingapple1.github.io/hello.txt",
//   }).done(function (결과) {
//     resolve(결과);
//   });
// });

// Ajax.then(function (a) {
//   console.log(a);
//   let Ajax2 = new Promise(function (resolve, reject) {
//     $.ajax({
//       type: "GET",
//       url: "https://codingapple1.github.io/hello2.txt",
//     }).done(function (결과) {
//       resolve(결과);
//     });
//   });
//   return Ajax2;
// }).then(function (a) {
//   console.log(a);
// });

// async function 더하기() {
//   let 프로미스 = new Promise(function (성공, 실패) {
//     let 연산 = 1 + 1;
//     실패();
//   });
//   try {
//     let 결과 = await 프로미스;
//     console.log(결과);
//   } catch {
//     console.log("실패1");
//   }
// }

// 더하기();

// 더하기().then(function (a) {
//   console.log(a);
// });

// async function 더하기() {
//   let 프로미스 = new Promise(function (resolve, reject) {
//     document.querySelector("#test1").addEventListener("click", () => {
//       resolve("성공했어요");
//     });
//   });

//   try {
//     let 클릭 = await 프로미스;
//     console.log(클릭);
//   } catch {
//     console.log("실패입니다.");
//   }
// }

// 더하기();

// let obj = { name: "Kim", age: 30 };

// class 부모 {}
// 부모.prototype.name = "Park";

// let obj = new 부모();

// for (let key in obj) {
//   console.log(obj[key]);
// }

// let arr = [2, 3, 4, 5];

// for (let key of arr) {
//   console.log(key);
// }

// let person = new Map();
// person.set("name", "Lee");
// person.set("age", 20);

// person.get("name");
// person.size;

// class 클래스 extends HTMLElement {
//   connectedCallback() {
//     let 변수 = document.createElement("label");
//     this.appendChild(변수);
//     this.innerHTML = `<lable>이메일인풋입니다.</label><input>`;
//   }
// }

// customElements.define("custom-input", 클래스);

document.querySelector("#mordor").attachShadow({ mode: "open" });
document.querySelector("#mordor").shadowRoot.innerHTML = `<p>심연</p>`;
