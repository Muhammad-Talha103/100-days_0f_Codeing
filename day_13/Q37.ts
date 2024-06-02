
function make_shirt(size:string="large" , message:string="I Love Typescript"){
    return `A shirt has ${size} size and ${message} message printed on it`
}

console.log(make_shirt());

console.log(make_shirt("small","Hello"));