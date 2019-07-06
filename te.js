/*
function clone(target) {
    let type = Object.prototype.toString.call(target).slice(8, -1);
    let copy = null;
    switch(type) {
        case 'Undefined': copy = undefined;break;
        case 'Null': copy = null;
        case 'String': copy = target;
        case 'Function': copy = target;
        case 'Boolean': copy = target;
        case 'Object': 
            copy = {};
            for(key in target) {
                copy[key] = clone(target[key])
            }
        case 'Array' :
            copy = [];
            for(var i = 0; i < target.length; i++) {
                copy.push(clone(target[i]))
            }

}
*/

function unique(data) {
    return data.reduce((pre, cur) => {
        if(pre.indexOf(cur) === -1) {
            pre.push(cur)
        }
        return pre;
    }, [])
}

let arr = [1,1,1, 2, 3, 3, 4, 55, 5, ,5, 7];
console.log(unique(arr))