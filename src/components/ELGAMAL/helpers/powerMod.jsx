function powerMod(g, x, p){
    let b = g
    for(let i = 1; i < x; i++) {
      g = (g*b)%p
    }
    return g%p;
}
    
export default powerMod;  