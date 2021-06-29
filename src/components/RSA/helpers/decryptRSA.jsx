/* global BigInt */
function decryptRSA(c, d, n){
  d = parseInt(d)
  let b = c
  for(let i = 1; i < d; i++) {
    c = (c*b)%n
  }
  return c%n;
  }
  
  export default decryptRSA;