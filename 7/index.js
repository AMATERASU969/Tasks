const arr = [1,2,3,4,5,6,7,8,9,0,null,"null"];
let a = 0, b = 0, c = 0;
for ( i = 0; i < 10; i++) {
    if (i % 2 === 0 && i !== 0) {
        a++;
    } 
    else if (i % 2 >= 1 && i !== 0) {
        b++;
    } 
    else {
        c++;
    }
}

console.log("Четное: ", a); 
console.log("Нечетное:", b); 
console.log("Нули:", c);