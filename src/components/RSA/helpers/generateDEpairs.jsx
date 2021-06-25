import gcd from './gcd'

function generateDEpairs(r) {
    let possibleDEpairs = []
    for(let e = 2; e < r; e++) {
        if(gcd(e, r) == 1) {
            for(let de = 1; de < 20*r; de += r) {
                if(de%e == 0) {
                    possibleDEpairs.push({E: e, D: de/e})
                }
            }
        }
    }
    return possibleDEpairs;
}
  
  export default generateDEpairs;