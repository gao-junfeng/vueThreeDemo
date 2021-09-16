class Example {
  constructor(a, b) {
    this.a = a; // 实例化时调用 set 方法
    this.b = b;
  }
  get a() {
    console.log('getter');
    return this.a;
  }
  set a(a) {
    console.log('setter');
    this.a = a; // 自身递归调用
  }
}
// let exam = new Example(1, 2); // 不断输出 setter ，最终导致 RangeError
class Example1 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  get a() {
    console.log('getter');
    return this._a;
  }
  set a(a) {
    console.log('setter');
    this._a = a;
  }
}
let exam1 = new Example1(1, 2); // 只输出 setter , 不会调用 getter 方法
console.log(exam1._a); // 1, 可以直接访问
export { exam1 as ni };
