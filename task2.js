let x;
typeof x;
if (typeof x  === 'number') {
    console.log(' x - number')
} else if (typeof x === 'string') {
    console.log('x - string')
} else if (typeof x === 'boolean') {
    console.log(' x - boolean')
} else {
    console.log("Тип x не определён")
}