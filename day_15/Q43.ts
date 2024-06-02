
let magiciansArr:string[]=["Lance Burton","Shin Lim","Juan Tamariz","Derren Brown","Criss Angel"];

function make_great(great:string[]) {
    return great.map(magic=>magic+" The great")
}

function show_magicians(magicians:string[]) {
    magicians.forEach(magicians=>{
        console.log(magicians);
    })
}

let great_magician=make_great(magiciansArr)

console.log("Original magician : ");
show_magicians(magiciansArr)
console.log("Great magician :");
show_magicians(great_magician)