// generating random integers from 1->10
let step1 = Math.random();
let step2 = step1*10; // because we want numbers from 1->10
let step3 = Math.floor.step2; // till this step, we will always get numbers from 1->9
let step4 = step3 + 1;

// bringing it al together
console.log(Math.floor(Math.random() * 10) + 1);
