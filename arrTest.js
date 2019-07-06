let arr = [1, 2, 3, 4];
let sum = arr.reduce((pre, cur) => {
    return pre + cur;
}, 0);
let mul = arr.reduce((pre, cur) => {
    return pre * cur;
}, 1);

console.log(sum, mul);

// 统计数组元素出现次数
let marks = ['Alice', 'Alice', 'Bob', 'Cris', 'Bob', 'Alice'];

let getNum = marks.reduce((pre, cur) => { 
    if(cur in pre) {
        pre[cur]++;
    } else {
        pre[cur] = 1;
    }
    return pre;
}, {});

console.log(getNum);

// 数组去重
let noRepeat = marks.reduce((pre, cur) => {
    if(!pre.includes(cur)) {
        pre.push(cur);
    } 
    return pre;
}, []);
const unique = arr => {
    var map = {};
    for (const key of arr) {
        if(map[key]) {
            map[key]++;
        } else {
            map[key] = 1;
        }
    }
    return Object.keys(keys);
}
console.log(unique(marks))
console.log(noRepeat)

// 合并多维数组
let multiArr = [[1, 2, 3, 4], [[1,2,3], [4, 5]], [6, 7]];
let combin = (arr) => {
    if(!Array.isArray(arr)) return arr;
    return arr.reduce((pre, cur) => {
        return pre.concat(combin(cur));
    }, [])
}

console.log(combin(multiArr))