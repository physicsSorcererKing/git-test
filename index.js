;(global=>{
  console.log('No time to explan!')
  function double(a,b) {
    return a+b
  }
  global.$p = double
})(this)