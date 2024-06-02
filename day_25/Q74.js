// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
function SwapValues() {
    var a = 5;
    var b = 10;
    console.log("Before Swapping : \na = ".concat(a, " \nb = ").concat(b));
    var temp = a;
    a = b;
    b = temp;
    console.log("After Swapping : \na = ".concat(a, "  \nb = ").concat(b));
}
SwapValues();
