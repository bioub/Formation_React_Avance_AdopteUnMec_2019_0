function externe(msg) {
  function interne() {
    console.log(msg);
  }
  interne();
}

externe('Hello');
// interne -> undefined

// ^
// |interne
// |externe
// +----------->

function externeSav(msg) {
  function interne() {
    console.log(msg);
  }
  return interne;
}


const interneFrom = externeSav('Hello');
interneFrom();

// ^
// |
// |externe - interneFrom
// +----------->


for (var i = 0; i < 3; i++) {
  setTimeout(function cb() {
    console.log(i);
  }, 10);
}

for (var i = 0; i < 3; i++) {
  setTimeout(externeSav(i), 10);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function cb() {
    console.log(i);
  }, 10);
}

// ^
// |
// |st - st - st ...ev... cb cb cb
// +0----1----2-----------10----------->
