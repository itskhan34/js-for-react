const elements = [32, 56, 68, 90, 23]
elements[4] = 45;
elements.push(12)

function getval(elements) {
    const emptyArr = [];
    for (const ele of elements) {
        const output = done(ele);
        emptyArr.push(output);
    }
    return emptyArr;

}
const done = x => x * 2;
const res = getval(elements);

const ele1 = elements.map(x => x * 2)

elements.forEach(el => {
    console.log(el);
})


const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
products.forEach(p => {
    //console.log(p.brand)
})


elements.forEach(n => console.log(n));
const fil = elements.filter(p => p < 32)
const f = elements.filter(p => p > 68)
console.log(f);

