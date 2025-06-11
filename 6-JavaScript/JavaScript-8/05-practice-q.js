// check if all numbers in an array are multiples of 10 or not
let nums = [10,20,30,40, 5];

let ans = nums.every((element) => element % 10 == 0);
console.log(ans);

// create the function to find the minimum number in an array
function getMin(nums2) {
    let min = nums2.reduce((ans, el) => {
        if (ans > el) {
            return el;
        } else {
            return ans;
        }
    });
    return min;
}



let nums2 = [2,3,4,1,5,3];
console.log(getMin(nums2));