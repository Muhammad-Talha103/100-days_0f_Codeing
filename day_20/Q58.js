function average() {
    var score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score[_i] = arguments[_i];
    }
    var per = score.reduce(function (total, score) { return total + score; }, 0);
    return per / score.length;
}
console.log(average(67, 63, 76, 43, 67, 54, 77, 32, 85, 78));
