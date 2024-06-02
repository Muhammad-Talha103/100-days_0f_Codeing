
let magiciansArr : string[] = ["Lance Burton","Shin Lim","Juan Tamariz","Derren Brown","Criss Angel"];

function make_Great (GreatMagicians : string[]) {
    for(let i = 0; i< GreatMagicians.length;i++){
        magiciansArr[i] = GreatMagicians[i] + " The Great"
    }
}

function show_magicians(magicians:string[]) {
    magicians.forEach(magicians=>{
        console.log(magicians);
    })
 }

make_Great(magiciansArr)
show_magicians(magiciansArr)