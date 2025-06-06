// 'this' keyword refers to an object that is executing the current piece of code
const student = {
    name: "Anudeep",
    age: 27,
    eng: 95,
    math: 97,
    phy: 93,
    getAvg() {
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(avg);
        console.log(`${this.name} has an average marks = ${avg}`);
    }
}

function func() {
    console.log(this); // window object will be printed
}