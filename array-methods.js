const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

let nums = [];
nums[0] = 5;
nums[99] = 98;
//console.log(nums);
for (let n of nums) {
    //console.log(n);

}

products.forEach(n => {
    // console.log(n.brand);

});
const filter = products.filter(p => p.price < 3000);
const filte = products.filter(p => p.name !== 'laptop');


//console.log(filte);

const f = products.map(x => x.color);
//console.log(f);


for (let i = 0; i < products.length; i++) {
    const p = products[i];
    //console.log(p);

}

const m = products.map(x => x);
//console.log(m);

for (const pr of products) {
    const p = pr;
    //console.log(p);

}

const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(n => {
    //console.log(n);

});


numbers.forEach(num => console.log(num));
const multi = numbers.map(num => num / 2);
numbers.push(5, 7, 9, 4);
numbers.pop();
//console.log(multi);

const fruits = ["Banana", "Orange", "Mango"];
fruits.push('apple')
let index = fruits.indexOf("apple");

const text = fruits.toString();
//console.log(text);
for (let i = 0; i < fruits.length; i++) {
    const output = fruits[i];
    //console.log(output);
}

const tex = fruits.map(a => a)
//console.log(tex);



const b = products.map(x => x.brand);
//console.log(b);
const p = products.map(x => x.price);
//console.log(p);

// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))

products.forEach(product => {

})


// 3. filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
//console.log(specificName);
const ages = [3, 10, 18, 20];
const a = ages.find(p => p)
//console.log(a);


//4. find
const special = products.find(p => p.name.includes('n'));
//console.log(special);

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
//console.log(student.movies[0]);
const str = JSON.stringify(student);
const str1 = JSON.parse(str);
//console.log(str1)

const num = [89, 35, 98, 12];

function getValue(num) {
    const out = [];
    for (number of num) {
        const double = number * 2
        out.push(double)

    }
    return out;
}
const res = getValue(num)
//console.log(res);


function getval(num) {
    const output = [];
    for (const number of num) {
        const double = doit(number);
        output.push(double)

    }
    return output;

}
/*function doit(number) {
    return number * 2;

}*/

const doit = n => n * 2
const re = getval(num);
//console.log(re);









