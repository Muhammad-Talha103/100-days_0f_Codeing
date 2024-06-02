

function average(...score:number[]){
    let per=score.reduce((total,score)=>total+score,0)
    return per/score.length
}

console.log(average(67,63,76,43,67,54,77,32,85,78,));
