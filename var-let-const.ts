/**
 * var is function scoped
 * let & const is blocked scoped
 * var variables can be redefined or updated
 * var can be accessed before they are declared (Hoisting)
 * const cannot be reassigned
 */

var value = 100;

function func() {
  if (true) {
    let value = 200;
    console.log(value);
  }
  console.log(value);
  function innerFunc() {
    console.log(value);
  }
}

func();
console.log(value);
