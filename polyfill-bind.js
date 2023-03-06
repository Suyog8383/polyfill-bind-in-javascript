let obj = { name: "suyog" };
const greeting = function (a, b) {
  return a + this.name + b;
};

Function.prototype.myBind = function (scope, ...args) {
  scope._this = this;
  return function () {
    return scope._this(...args);
  };
};

const test = greeting.bind(obj, "hello ", ", How are you?");
console.log(test());
