import gcd from "./gcd";

function validPair(e, d, r) {
    console.log(e, d, r)
    console.log(gcd(e, r) != 1)
    console.log(e <= 1)
    console.log(e >= r)
    console.log((d*e)%r != 1)
    console.log(gcd(e, r))
    
    
    if(gcd(e, r) != 1 || e <= 1 || e >= r || (d*e)%r != 1) {
        return false;
    }
    else{
        return true;
    }
}

export default validPair;