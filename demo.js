require('colors');

function mySetInterVal(fn, a, b) {
  this.a = a;
  this.b = b;
  this.time = 0;
  this.handle = -1;
  this.start = () => {
    this.handle = setTimeout(() => {
      fn();
      this.time++;
      this.start();
      console.log(this.a + this.time * this.b);
      console.log(true, false, 'null'.bgBlue.bgRed, null, 'undefined'.red, undefined);
    }, this.a + this.time * this.b);
  };

  this.stop = () => {
    clearTimeout(this.handle);
    this.time = 0;
  };
}

var a = new mySetInterVal(
  () => {
    console.error('123'.green);
  },
  100,
  200,
);
a.start();
