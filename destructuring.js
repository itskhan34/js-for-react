// 1. array destructuring
const numbers = [42, 65];
const x1 = numbers.indexOf(42)
const y1 = numbers[1];
//console.log(x1)

//const [x, y] = [42, 65]


const [x, y] = numbers;
//console.log(x, y);

let words = 'My name is muzahid khan'.split(' ');
let [a, b, c, ...d] = words;
//console.log(d);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90, 34]
const [first, second] = boxify(90, 34);

// console.log(boxify(90, 34));
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const [firstMovie, secondMovie] = student.movies;


// object destructuring
const { name, age } = { name: 'alu', age: 14 };
//const { name, age } = { id: 12, name: 'alu', salary: 3400, age: 14 };

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'

        }
    }
}


const { ide, machine, weight, color } = employee.specification.watch;
//console.log(color);
// const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;



function average(paper1, paper2, paper3) {
    const output = paper1 + paper2 + paper3;
    return output;

}
const res = 20;
const res1 = 30;
const res2 = 40;
const total = average(res, res1, res2);
const final = total / 2;
//console.log(final);

//function add(a, b, c) {
//const ver = a + b + c;
//return ver;

//}
const add1 = (a, b, c) => a + b + c;
const o = add1(3, 4, 6)
//console.log(o)

const add = (fnum, lnum) => fnum + lnum;
const adition = add('muzahid khan', '  khan')
//console.log(adition);

const number = [23, 54, 67, 87, 23, 78];
number.forEach(n => {
    // console.log(n);
})
const m = number.map(n => n)
//console.log(m);

function getnum(fnum, snum) {
    return fnum + snum;
    //const get = (fnum + snum);
    //return get;

}
const re = getnum(12, 14);
console.log(re);

const getnu = (fnum, snum) => fnum + snum;
const r = getnu(67, 87);
//console.log(r)
function greet(user) {
    return ` ${user}`;
}
const user = 'muzahid'
const gr = greet(user);
console.log(gr)






