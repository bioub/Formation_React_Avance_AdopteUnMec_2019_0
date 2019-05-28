// style callback
// callback hell / pyramid of doom
// http://callbackhell.com/
setTimeout(() => {
  console.log('100ms');
  setTimeout(() => {
    console.log('100ms');
    setTimeout(() => {
      console.log('100ms');
      setTimeout(() => {
        console.log('100ms');
      }, 100);
    }, 100);
  }, 100);
}, 100);

function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // 1 param max
    }, delay);
  });
}

timeout(100)
  .then(() => {
    console.log('100ms');
    return timeout(100);
  })
  .then(() => {
    console.log('100ms');
    return timeout(100);
  })
  .then(() => {
    console.log('100ms');
    return timeout(100);
  })
  .then(() => {
    console.log('100ms');
  });

// ES8 / ES2017 async function
async function timeouts() {
  await timeout(100);
  console.log('100ms');
  await timeout(100);
  console.log('100ms');
  await timeout(100);
  console.log('100ms');
  await timeout(100);
  console.log('100ms');
}

timeouts();

// https://github.com/bioub/Formation_JavaScript_STMicro_2019_01/tree/master/Async
// https://github.com/bioub/Formation_Node.js_HomeServe_2018_06/blob/master/Async/
