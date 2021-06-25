import powerMod from "./powerMod";

function mulMod(g, x, p, m){
    return (powerMod(g, x, p) * powerMod(m, 1, p))%p;
}
    
export default mulMod;  