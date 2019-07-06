// typeof 返回七种类型值 number, boolean, string, undefined, object, function,symbol.
console.log(typeof a);    //'undefined' 
console.log(typeof(true));  //'boolean'    
console.log(typeof '123');  //'string'    
console.log(typeof 123);   //'number'    
console.log(typeof NaN);   //'number'    
console.log(typeof null);  //'object'        
var obj = new String();    
console.log(typeof(obj));    //'object'    
var  fn = function(){};    
console.log(typeof(fn));  //'function'    
console.log(typeof(class c{}));  //'function'
console.log(typeof (Symbol())) // symbol


// instanceof用于判断一个变量是否某个对象的实例

let arr = [1 ,2 , 3];
console.log(arr instanceof Array);
console.log(arr instanceof Object)
let get = function get() {}
console.log(get instanceof Function);
function Girl(name) {
    this.name = name;
}
let Amelia = new Girl('Amelia');
console.log(Amelia instanceof Girl);
console.log(Amelia instanceof Object);