function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(context, args), wait)
    }
  }



  

  function sayHello() {
    console.log('My name is', this.name)
  }
  const amy = {
    name: 'amy',
    speak: debounce(sayHello),
  }
  amy.speak()




  //https://medium.com/@griffinmichl/implementing-debounce-in-javascript-eab51a12311e
  
//  https://medium.com/@happymishra66/virtual-dom-in-reactjs-43a3fdb1d130
  

