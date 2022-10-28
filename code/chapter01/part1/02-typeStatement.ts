/**
 * 类型声明的那些事情
 * ①给变量进行类型声明
 * ②变量的声明和赋值同时进行的，类型声明可以省略，TS会自动判断
 * ③函数的参数和返回值需要类型声明
 */

// 声明一个变量a，并指定它的类型为number
let a: number;

// a 的类型设置为number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a = 'hello'; //此行代码会报错，因为变量a的类型是number，不能赋值字符串
let b: string;
b = 'hello';
// b = 123;

// 声明完变量直接进行赋值
// let c: boolean = false;

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c = false;
c = true;
// c = 123 // 报错

/**
 * 控制台没有报错的看这里  
 * 1.管理员身份运行webstorm 
 * 2.在终端执行：get-ExecutionPolicy，显示Restricted
 */

// JS中函数是不考虑参数的类型和个数
function sumJS(a, b) {
    return a + b;
}

console.log(sumJS(123, 456)); // 379
console.log(sumJS(123, "456")); // "123456"

// TS中函数的参数和返回值需要类型声明
function sumTS(a: number, b: number): number {
    return a + b;
}
let result = sumTS(123, 456);
// sumTS(123, "456"); //报错

// 防止变量名冲突报错
export default void 0;