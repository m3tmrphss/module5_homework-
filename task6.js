let array = [1, 1, 1, '1'];
let arrayValue = ``;
for(let i = 1; i < array.length; i++) {
    if(array[0] ===  array[i]) {
        arrayValue = true;
    } else {
        arrayValue = false;
    }
}
console.log(arrayValue)