const a = [2, 3, 1, 0, 5];
const b = [1, 2, 3, 4, 5];

const dif = [];

a.map((item) => {
    if(b.indexOf(item) === -1){
        dif.push(item);
    }
});
console.log(dif);