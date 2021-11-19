const arr = [1, 2, [3, 4, [5, 6]]];

// to enable deep level flatten use recursion with reduce and concat
function flatDeep(arr, d = 1) {
   if(d>1) {
    return arr.reduce((acc, val) => {
        if(acc.concat(Array.isArray(val))) {
            return flatDeep(val, d - 1)
        } else {
            return val
        }
    }, [])
   }
};

flatDeep(arr, Infinity);

//    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
//                 : arr.slice();