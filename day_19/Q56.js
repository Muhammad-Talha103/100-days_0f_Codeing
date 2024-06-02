var mix_arr = ["saim", 1, 2, 3, 4, 5, true, "talha", 9, 8, 7, 6, "faiz", false];
var str = mix_arr.filter(function (item) { return typeof item === "string"; });
console.log(str);
