function encryptRSA(m, e, n){
  let b = m
  for(let i = 1; i < e; i++) {
    m = (m*b)%n
  }
  return m%n;
  }
  
  export default encryptRSA;