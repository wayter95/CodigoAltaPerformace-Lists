const a = [1,2,3,4,5];
const b = [6,7,8,9,3];

const union = [];

a.map((item) => {
    union.push(item)
}) 
b.map((item) => {
    union.push(item)
}) 

console.log(union)