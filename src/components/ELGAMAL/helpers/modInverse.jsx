import powerMod from "./powerMod";
import gcd from "./gcd";

export default function modInverse(b, m) {
    let g = gcd(b, m)
    if (g !== 1){
        return -1
    }
    else {
        // If b and m are relatively prime,
        // then modulo inverse is b^(m-2) mode m
        return powerMod(b, m-2, m);
    }
}