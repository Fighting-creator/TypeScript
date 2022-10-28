import { hi } from './module';
console.log(hi);

let box1 = document.getElementById("box1");
// 两种判断是否为null的写法
// 第一种
if (box1 !== null) {
    box1.addEventListener('click', function() {
        alert('hello');
    });
}
// 第二种
box1?.addEventListener('click', function() {
    alert('hello');
});