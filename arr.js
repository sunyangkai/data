let arr = ['Alice', 'Bob'];
arr.push(12, 13); // 尾部添加元素
console.log(arr);

arr.unshift('Allen', 'Aileen') // 首部添加元素
console.log(arr);

let Alice = arr.indexOf('Alice'); // 返回索引，没找到返回-1
console.log(Alice)

arr.shift(); // 尾部删除一个元素
console.log(arr);

arr.splice(1, 2); // 原数组上删除指定下标处开始的n个项，如果slice(8, -1)则-1代表从尾部开始算起的第一个数
console.log(arr);

let slice = arr.slice(0, 2); // 截取一段，返回新数组
console.log(slice);

let num = [1, 2, 3, 4, 5];
let doubleNum = num.map((n) => { // 逐项计算后 返回新数组
    return n*2;
});
console.log(doubleNum);

let double = num.filter((n) => { return n % 2 === 0}); // 返回为ture的项
console.log(double);

let disorder = [2 ,5, 1, 4, 8];
disorder.sort((a, b) => { return a - b }); // 原数组上排序
console.log(disorder)

disorder.reduce((pre, cur) => { // reduce返回累计的值， 不仅仅限制于加减乘除，任何累计计算都可以
    console.log(pre, cur);
    return pre + cur;
}, 0)
