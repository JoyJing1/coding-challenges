
function myFunc() {
  console.log(new Date());
}

function debounceFull(fun, wait, immediate) {
  let prevTime;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) fun.apply(context, args);
    };
    let callNow = immediate && !prevTime;
    clearTimeout(prevTime);
    prevTime = setTimeout(later, wait);
    if (callNow) fun.apply(context, args);
  };
}

function debounce(fun) {
  let prevTime;

  return function() {
    clearTimeout(prevTime);
    prevTime = setTimeout(fun, 1000);
  };
}

let debFunc = debounce(myFunc, 1000);
debFunc();
debFunc();
debFunc();
debFunc();
debFunc();
