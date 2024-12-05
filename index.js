function prime(num) {
    if(num <=1)
        return false;
    for(let i=2; i<num; i++) {
        if(num %i ===0) {
            return false;
        }
    }
    return true;
}
console.log(prime(3));
console.log(prime(9));

function evenOdd(num) {
    for(let i=2; i<num; i++) {
    if (num%2 ==0) {
        return true;
    }else {
        return false;
    }
}
}
console.log(evenOdd(50));
console.log(evenOdd(25));