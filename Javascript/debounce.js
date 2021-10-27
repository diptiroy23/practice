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
  

// Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds
var  throttleFunction  =  function (func, delay) {
	// If setTimeout is already scheduled, no need to do anything
	if (timerId) {
		return
	}

	// Schedule a setTimeout after delay seconds
	timerId  =  setTimeout(function () {
		func()
		
		// Once setTimeout function execution is finished, timerId = undefined so that in <br>
		// the next scroll event function execution can be scheduled by the setTimeout
		timerId  =  undefined;
	}, delay)
}


