// 定义食物类Food
export class Food {
    // 定义一个属性表示事物所对应的元素
    element: HTMLElement;
    score: number;

    constructor(score: number = 1) {
        // 注意前后类型，如果使用getElementsByClassName和querySelectorAll会返回数组，前后类型不对。
        // 需要添加类型断言
        this.element = document.querySelector('.food') as HTMLElement;
        this.score = score;
    }

    // 定义一个获取食物X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 定义一个获取食物Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物的位置
    change() {
        // 修改食物的位置
        // 食物的位置最小是0 最大是290
        // 蛇的移动一次就是一格，一格的大小就是10，所以就是要求食物的坐标必须是整10

        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}