var magiciansArr = ["Lance Burton", "Shin Lim", "Juan Tamariz", "Derren Brown", "Criss Angel"];
function make_Great(GreatMagicians) {
    for (var i = 0; i < GreatMagicians.length; i++) {
        magiciansArr[i] = GreatMagicians[i] + " The Great";
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
make_Great(magiciansArr);
show_magicians(magiciansArr);
