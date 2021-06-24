import modInverse from "./modInverse";

export default function mulMod(a, b, m){
    a = a % m
    let inv = modInverse(b,m)
    if(inv == -1) {
        alert("Division not defined")
        return 0
    }
    else{
        return ((inv*a) % m)
    }
}