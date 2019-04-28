;(global=>{
  function double(a,b) {
    return a+b
  }
  global.$p = double
})(this)