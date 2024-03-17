let array = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null,   ];
let oddNumbers = [];
let evenNumbers = [] ;
let nullNumbers = [];
for( let i = 0; i < array.length; i++) {
    if (array[i] == 0 || array[i] == null) {
        nullNumbers.push(array[i])
    } else if (array[i] % 2 == 0 ) {
        evenNumbers.push(array[i]);
    } else if (array[i] % 2 == 1 || array[i] % 2 == -1) { 
        oddNumbers.push(array[i])
    } 
   
}
console.log (` чётных - ${evenNumbers.length}, нечётных - ${oddNumbers.length}, нулевых - ${nullNumbers.length}`)
 