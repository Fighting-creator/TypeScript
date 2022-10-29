import './style/index.less';

// 定义食物类Food
class Food {
    // 定义一个属性表示事物所对应的元素
    element: HTMLElement;

    constructor() {
        // 注意前后类型，如果使用getElementsByClassName和querySelectorAll会返回数组，前后类型不对。
        this.element = document.querySelector('.food')!;
    }
}