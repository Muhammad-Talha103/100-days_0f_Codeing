// Question 145: Create a function that accepts a callback and invokes it with some arguments.

function invokeCallback(callback: Function, ...args: any[]) {
    callback(...args);
}

invokeCallback(console.log, 1, 2, 3);

function executeCallBck(callBack: (arg1: number, arg2: number) => void) {
    const arg1 = 10
    const arg2 = 20

    callBack(arg1 , arg2)
}

function sum(a: number, b: number) {
    console.log(a * b)
}

executeCallBck(sum)

