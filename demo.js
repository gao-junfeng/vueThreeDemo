function ConstructorFun1(name) {
  this.name = name;
}
// 通过new关键字创建实例
var constructorfun = new ConstructorFun1();

console.log(constructorfun.constructor); // true
console.log(constructorfun instanceof ConstructorFun1);
console.log(constructorfun);
