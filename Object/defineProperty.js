let person = {};
let person1 = {};

Object.defineProperty(person, "name", {
  configurable: true || false, //是否可以修改
  enumerable: true || false, //是否可以枚举
  value: "", //undefined
  writable: true || false, //是否可以修改value
  get: function () {}, //获取
  set: function () {}, //设置
});

//用defineProperty设置的属性，是不能不可配置的！！！，用.运算符配置的属性默认可以配置！！！

Object.defineProperty(person, "name", {
  value: "tom",
});
person1.name = "pony";

Object.defineProperty(person1, "name", {
  configurable: false,
});
delete person1.name;
person1.name = "john";
console.log(Object.getOwnPropertyDescriptor(person, "name")); //false false false
console.log(Object.getOwnPropertyDescriptor(person1, "name")); // true true true

person1._age = 20;
Object.defineProperty(person1, "age", {
  configurable: true,
  get() {
    return this._age;
  },
  set(newAge) {
    this._age = newAge;
  },
});
person1.age = 40;
console.log(person1.age);
