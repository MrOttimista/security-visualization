function gcd(x, y) {
    if (isNaN(x) || isNaN(y)) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

  export default gcd;