add(2)(9)(10)()
function add(x){
    let sum = x;
    return function resultFn(y){
        console.log('arg',arguments);
        if(arguments.length){ //not relying on falsy value
            sum += y;
            return resultFn;
        }
        return sum;
    }
}
