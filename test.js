let ob = {
    name: 'ob',
    age: 18
}

console.log('name' in ob); // true
console.log('sex' in ob); // false
console.log(this)

(function(){
    console.log(this)
})();