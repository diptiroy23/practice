const arr = [];

arr.forEach((ar, idx, arr) => {

}, thisArg);

arr.map((ar, idx, arr)=>{
    return ar;
}, thisArg);

arr.filter((ar, idx, arr) => ar==1, thisArg);

arr.reduce((prev, cur, idx, arr) => {
    return prev+cur;
}, initialVal)

arr.splice(start, deleteCount, insertValue1, insertValue2, insertValueN);