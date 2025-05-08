// 1. Array Reference
[1] == [1] // false as address(reference) of these 2 addresses different

let arr = ['a', 'b', 'c'];
let arrCopy = arr; // arrCopy is point to the same address as arr (they are the same)
arr == arrCopy; // true
arr.push('d'); // arr = [a b c d]
console.log(arrCopy); // arrCopy = [a b c d]
arrCopy.pop(); // arrCopy = [a b c]
console.log(arr); // arr = [a b c]

// 2. Constant Arrays
const nums = [1, 2, 3];
// you can mutate constant arrays
nums.push(4); // ✅ nums is now [1, 2, 3, 4]
nums[0] = 99; // ✅ nums is now [99, 2, 3, 4]

// you cannot make a constant array into something new (i.e. assigning address of some other array)
const nums = [1, 2, 3];
nums = [4, 5, 6];    // ❌ TypeError: Assignment to constant variable.

// 3. Nested Arrays / multi-dimensional arrays
let nums2 = [ [2,4], [3,6], [4,8] ];
console.log(nums2);
console.log(nums2[0]);
console.log(nums2[0][1]);
console.log(nums2[2][0]);

// practice q -> create a nested array to show any tic-tac-toe game state
let ticTacToe = [
    ['x', null, 'o'],
    [null, 'x', null],
    ['o', null, 'x']
] 

console.log(ticTacToe); // will give the full array
ticTacToe[0][1] = 'o';
console.log(ticTacToe);
