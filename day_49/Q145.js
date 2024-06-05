// Question 145: Create a function that accepts a callback and invokes it with some arguments.
function invokeCallback(callback) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    callback.apply(void 0, args);
}
invokeCallback(console.log, 1, 2, 3);
function executeCallBck(callBack) {
    var arg1 = 10;
    var arg2 = 20;
    callBack(arg1, arg2);
}
function sum(a, b) {
    console.log(a * b);
}
executeCallBck(sum);
