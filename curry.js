let currying = function (fn) {
  let args = [];
  return function () {
    if (arguments.length === 0) {
      return fn.apply(this, args);
    } else {
      Array.prototype.push.apply(args, arguments);
      console.log(arguments);
      return arguments.callee;
    }
  };
};

console.log(currying());
