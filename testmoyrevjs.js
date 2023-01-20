let noteA = 10;
let noteB = 50;
let noteC = 90;
let noteD = 40;


function moyenne(A,B){
    let moyenne = (A+B)/2;
    return moyenne;
}

console.log(moyenne(noteA,noteB))


function moyenne2(...number){
    let moyenne2 = 0;
    for(value of number){
        moyenne2 += value
    }
    return moyenne2/number.length
}

console.log(moyenne2(noteA,noteB,noteC,noteD))
