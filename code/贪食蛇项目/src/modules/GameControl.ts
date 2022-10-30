// 引入其他类
import { Snake } from "./Snake";
import { Food } from "./Food";
import { ScorePanel } from "./ScorePanel";

// 游戏控制器，控制其他的所有类
export class GameControl {
    // 定义三个属性
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
    direction: string = '';
    // 创建一个属性用来记录游戏是否结束
    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel;

        this.init();
    }

    // 游戏的初始化方法，调用后游戏即开始
    init() {
        // 绑定键盘按键按下的事件
        // document.addEventListener('keydown', this.keydownHandler.bind(this));
        // 两种方法都行
        document.addEventListener('keydown', (e) => this.keydownHandler(e));
        // 调用run方法，使蛇移动
        this.run();
    }

    /**
     * ArrowUp w 上
     * ArrowRight d 右
     * ArrowDown s 下
     * ArrowLeft a 左
     * @param event 
     */
    // 创建一个键盘按下的相应函数
    keydownHandler(event: KeyboardEvent) {
        // 需要验证event.key的值是否合法（用户是否按了正确的按键）
        // 修改direction属性
        this.direction = event.key;
    }

    /**
     * 创建一个控制蛇移动的方法
     * 
     * 根据方向（this.direction）来使蛇的位置改变
     *  向上    top     Y减少
     *  向右    left    X增加
     *  向下    top     Y增加
     *  向左    left    X减少
     */
    run() {
        // 获取蛇的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根据按键方向来修改X值和Y值
        switch (this.direction) {
            case "ArrowUp":
            case "w":
                Y -= Snake.bodySize;
                break;
            case "ArrowRight":
            case "d":
                X += Snake.bodySize;
                break;
            case "ArrowDown":
            case "s":
                Y += Snake.bodySize;
                break;
            case "ArrowLeft":
            case "a":
                X -= Snake.bodySize;
                break;
        }

        // 检查蛇是否吃到食物
        this.checkEat(X, Y)

        try {
            // 修改蛇的X值和Y值
            this.snake.X = X;
            this.snake.Y = Y;
        } catch(e){
            // 进入到catch，说明出现了异常，游戏结束，弹出一个提示信息
            alert((e as Error).message + 'Game OVER!');
            // 将isLive设置为false
            this.isLive = false;
        }

        // 开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    // 定义一个方法，用来检查蛇是否吃到食物
    checkEat(X: number, Y: number): void {
        if (X === this.food.X && Y === this.food.Y) {
            // 食物的位置需要进行重置
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇要增加一节
            for (let i = 1; i <= this.food.score; i ++)
                this.snake.addBody();
        }
    }
}