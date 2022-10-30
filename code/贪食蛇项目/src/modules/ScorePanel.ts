// 定义表示记分板的类
export class ScorePanel {
    // score和level 用来记录分数和等级
    score: number = 0;
    level: number = 1;

    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreElement: HTMLElement;
    levelElement: HTMLElement;

    // 设置一个变量限制等级
    maxLevel: number;
    // 设置一个变量表示多少分时升级
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 3) {
        this.scoreElement = document.querySelector('.score') as HTMLElement;
        this.levelElement = document.querySelector('.level') as HTMLElement;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 设置一个加分的方法
    addScore() {
        // 使分数自增
        this.scoreElement.innerHTML = ++ this.score + '';
        // 判断分数是多少
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    // 提升等级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelElement.innerHTML = ++ this.level + '';
        }
    }
}