let a =  +prompt();  
if (typeof +a === 'number' && a % 2 == 1) {
    console.log('a - нечётное')
} else if (typeof +a === 'number' && a % 2 == 0) {
    console.log('a - чётное')
} else if (isNaN(+a)) {
    console.log('NaN')
} else {
    console.log('Упс, кажется, вы ошиблись')
}