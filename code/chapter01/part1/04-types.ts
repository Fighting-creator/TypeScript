/**
 * 内容总结：
 * ①object
 * ②array
 * ③tuple
 * ④enum
 * ⑤&的用法
 * ⑥类型的别名
 */

// object 表示一个js对象
let a: object;
a = {};
a = function () {

};

/**
 * {} 用来指定对象中可以包含哪些属性
 * 语法：{属性名: 属性值, 属性名: 属性值}
 * 在属性名后面加上?，表示属性是可选的
 */
let b: {name: string, age?: number};
// b = {}; //类型 "{}" 中缺少属性 "name"
b = {name: '孙悟空', age: 18}; // 结构需要跟声明的对象类型结构一样(多少都不行)

// JS中的属性名类型就是字符串
// [propName: string]: any 表示任意类型的属性
let c: {name: string, [propName: string]: any};
c = {name: '猪八戒', age: 18, gender: '男'};

/**
 * 设置函数结构的类型声明
 * 语法：(形参:类型, 形参:类型, ...) => 返回值
 */
let d: (a: number, b: number)=>number;
d = function(n1: number, n2: number): number {
    return n1 + n2;
}

/**
 * 数组的类型声明
 * 语法：
 * 类型[]
 * Array<类型>
 */
// string[] 表示字符串数组
let e: string[];
e = ['a', 'b', 'c'];
// number[] 表示数值数组
let f: number[];

let g: Array<number>;
g = [1, 2, 3];

/**
 * 元组，元组就是固定长度的数量
 * 语法：[类型, ...]
 */
let h: [string, string];
// h = ['hello']; // 少了不太行
h = ['hello', 'ts'];
// h = ['hello', 'ts', '123']; // 多了也不太行

// 有时候会具有需求:性别表示就两个值或者更多的值时，可以用联合类型。
// 但是这个程序的结果可能交给别人进行判断，别人不知道0是男是女。这时候引入了枚举
let i: {name: string, gender: -1|0|1};
i = {
    name: '孙悟空',
    gender: 1,
};
console.log(i.gender === 1);

/**
 * enum 枚举
 */
enum Gender {
    Male = 0,
    Female = 1,
};
i = {
    name: '孙悟空',
    gender: Gender.Male,
};
// 这时候就不需要关注Gender.Male的值了。
console.log(i.gender === Gender.Male);

// ‘&’表示同时
// let j: string & number; // j不可能即是string又是number，这种写法本身就是错误的
let k: { name: string } & { age: number }; // ‘&’这样用，用来连接两个对象
k = {name: '孙悟空', age: 18};

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5; // 类型名比较长时 方便书写。
let l: myType;
let m: myType;
l = 2;

export default void 0;