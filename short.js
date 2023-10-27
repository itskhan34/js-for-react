const money = 800;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit';
}
let myVar = 100;
let food1 = money > 100 ? 'birani' : 'chaa';
let foodi = (money > 100 && myVar > 100) ? 'brani' : 'chaa';
//console.log(foodi);

//Number to String
const number = 79;
const n = 9 + ''
const x = number + ''
const z = +number
//console.log(z);

//let isActive = true;

//let speak = () => console.log('speak up');;
//let doNot = () => console.log('do not speak');;

//isActive ? speak() : doNot();

//console.log(isActive);

const nums = [34, 47, 1, 1, 98, 98, 34, 34,];
const uni = [...new Set(nums)];
console.log(uni);
//console.log(Math.min(...nums));


/*function maxValue() {
    let max = [0];

    for (let val of nums) {
        if (val > max) {
            max = val;
        }
    }
    return max;
}
const res = maxValue(nums);
console.log(res);

function bigval() {

    let bigNum = [0];
    for (let number of nums) {
        if (number > bigNum) {
            bigNum = number;

        }


    }
    return bigNum;

}



console.log(bigval(nums));*/

/*let minval = Infinity;
let maxval = -Infinity;
for (const item of nums) {
    if (item > maxval) {
        maxval = item;

    }
}
console.log(maxval);*/

let arr = [0];
for (const item of nums) {
    if (item > arr) {
        arr = item;

    }

}
//console.log(arr);




