var persentage = [88.5, 72, 56, 98, 56.25, 81];
var average = persentage.reduce(function (total, grade) { return total + grade; }, 0) / persentage.length;
console.log(average);
