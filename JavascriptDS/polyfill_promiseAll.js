function promiseAll(args) {
    return new Promise((resolve) => {
    let c = 0;
    let n = args.length; let re = []
    
            args.forEach(async (f, i) => {
                let r = await f;
                c++; re.push(r);
                if(c==n-1) resolve(re) // || if(i==n-1) resolve(re)    
            })
    
    });
    
    
    }


//     example ->

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// promiseAll([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });