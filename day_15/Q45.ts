
function make_car(manufacture:string , model:string , ...otherfeatures:[string,any][]){
    let car ={manufacture , model}
    otherfeatures.forEach(([key , value])=>(car[key]=value))
    return car
}

console.log(make_car("Toyota","grande",["sunroof",true],["max_speed",240],["colour","white"]));