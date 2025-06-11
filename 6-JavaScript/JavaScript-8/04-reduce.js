let nums = [1,2,3,4];
let finalVal = nums.reduce((res,el) => {
    console.log(res);
    return res+el;
});
console.log(finalVal);

// maximum in an array
let arr = [1,2,3,4,6,2,7,23,7];
let maximum = arr.reduce( (ans, el) => {
    if (ans < el) {
        return el;
    } else {
        return ans;
    }
});
console.log(maximum);