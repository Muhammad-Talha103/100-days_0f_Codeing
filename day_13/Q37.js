function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    return "A shirt has ".concat(size, " size and ").concat(message, " message printed on it");
}
console.log(make_shirt());
console.log(make_shirt("small", "Hello"));
