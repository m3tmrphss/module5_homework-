let keys = [];
let values = [];
let map = new Map([
    ["brand", "apple"],
    ["name", "iPhone"],
    ["type", "smartphone"],
    ["color", "gradient"]
]);
for (let category of map.keys()) {
    keys.push(category)
}
for ( let value of map.values()) {
    values.push(value)
}
for(let i = 0; i < keys.length; i++) {
    console.log(`Ключ — ${keys[i]}, значение —  ${values[i]}`)
}