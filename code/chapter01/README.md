- [<font color="#00ffff"> TypeScript 基础学习 </font>](#font-color00ffff-typescript-基础学习-font)
  - [<font color="red">TypeScript简介</font>](#font-colorredtypescript简介font)
  - [<font color="red">TypeScript增加了什么?</font>](#font-colorredtypescript增加了什么font)
  - [<font color="red">TypeScript开发环境搭建</font>](#font-colorredtypescript开发环境搭建font)
  - [<font color="red">TypeScript的基本类型</font>](#font-colorredtypescript的基本类型font)
    - [类型声明](#类型声明)
    - [自动类型判断](#自动类型判断)
    - [类型](#类型)
  - [<font color="red">编译选项</font>](#font-colorred编译选项font)
    - [自动编译文件](#自动编译文件)
    - [自动编译整个项目](#自动编译整个项目)
      - [`tsconfig.json`文件中的配置选项](#tsconfigjson文件中的配置选项)
  - [<font color="red">webpack打包ts代码</font>](#font-colorredwebpack打包ts代码font)
    - [webpack打包ts代码步骤](#webpack打包ts代码步骤)
  - [<font color="red">Babel</font>](#font-colorredbabelfont)
  - [<font color="red">学习中遇到的问题</font>](#font-colorred学习中遇到的问题font)
    - [1、同一文件夹下不同文件声明相同变量名会报错](#1同一文件夹下不同文件声明相同变量名会报错)
    - [2、`npm run build`打包报错`The 'mode' option has not been set, webpack will fallback to 'production' for this value.`](#2npm-run-build打包报错the-mode-option-has-not-been-set-webpack-will-fallback-to-production-for-this-value)

---

# <font color="#00ffff"> TypeScript 基础学习 </font>

---
## <font color="red">TypeScript简介</font>
- 🌳**TypeScript**是以**JavaScript**为基础构建的语言。**TypeScript**是**JavaScript**的超集。
- 🌳它对**JS**进行了扩展，向**JS**中引入了类型的概念，并添加了许多新的特性。
- 🌳**TS代码**需要通过编译器编译为**JS**，然后再交由**JS解析器**执行。
	- 即**TS代码**不能在浏览器上运行，想要浏览器认识这份代码，就需要安装一个**TypeScript**的编辑器，该编译器可以将将**TypeScript代码**编译转换成浏览器认识的**JavaScript**。
- 🌳**TS**完全兼容**JS**，换言之，任何的**JS代码**都可以直接当成**TS**使用。
- 🌳相较于**JS**而言，**TS**拥有了静态类型，更加严格的语法，更强大的功能；**TS**可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率；**TS代码**可以编译为任意版本的**JS代码**，可有效解决不同**JS**运行环境的兼容问题；同样的功能，**TS**的代码量要大于**JS**，但由于**TS**的代码结构更加清晰，变量类型更加明确，在后期代码的维护中**TS**却远远胜于**JS**。

---
## <font color="red">TypeScript增加了什么?</font>
- 🌳**TS**中增加了类型定义。
	- **JS**原本有`Number`、`String`、`Array`、`Object`、`Boolean`这些类型。**TS**定义约束变量自身，**JS**仅仅定义具体的值。这也是为什么学**TS**的原因之一。
- 🌳**TS**支持**ES**的新特性
- 🌳**TS**中添加**ES**不具有的新特性
	- 例如：抽象类，接口，装饰类等。
- 🌳**TS**提供了丰富的配置选项
	- 一份**TS代码**可以编译成任意版本的**JS代码**，解决了浏览器的兼容性问题
- 🌳**TS**强大的开发工具
	- 具有更明确的代码报错提示

---
## <font color="red">TypeScript开发环境搭建</font>
1. 下载并安装**Node.js** [官网](https://nodejs.org/en/)👈
2. 使用`npm`全局安装**TypeScript**
	- 进入命令行
	- 输入：`npm i -g typescript`或`npm install -g typescript`
3. 创建一个`.ts`文件
4. 使用`tsc`对`.ts`文件进行编译（`.ts`文件编译产生`.js`文件）
	- 进入命令行
	- 进入`.ts`文件所在目录
	- 执行命令：`tsc xxx.ts`

---
## <font color="red">TypeScript的基本类型</font>
### 类型声明

  - 🌳类型声明是**TS**非常重要的一个特点

  - 🌳通过类型声明可以指定**TS**中变量（参数、形参）的类型

  - 🌳指定类型后，当为变量赋值时，**TS编译器**会自动检查值是否符合类型声明，符合则赋值，否则报错

  - 🌳简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值

<font color="orange">语法</font>
```typescript
      let 变量: 类型;
      
      let 变量: 类型 = 值;
      
      function fn(参数: 类型, 参数: 类型): 类型{
          ...
      }
```

---
### 自动类型判断
- 🌳**TS**拥有自动的类型判断机制
- 🌳当对变量的声明和赋值是同时进行的，**TS编译器**会自动判断变量的类型
- 🌳所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明

<font color="orange">示例</font>
```typescript
let c = false;
c = true;
// c = 123 // 报错
```

---
### 类型
  |  类型   |       例子        |              描述              |
  | :-----: | :---------------: | :----------------------------: |
  | number  |    1, -33, 2.5    |            任意数字            |
  | string  | 'hi', "hi", \`hi\`  |           任意字符串           |
  | boolean |    true、false    |       布尔值true或false        |
  | 字面量  |      其本身       |  限制变量的值就是该字面量的值  |
  |   any   |         *         |            任意类型            |
  | unknown |         *         |         类型安全的any          |
  |  void   | 空值（undefined） |     没有值（或undefined）      |
  |  never  |      没有值       |          不能是任何值          |
  | object  |  {name:'孙悟空'}  |          任意的JS对象          |
  |  array  |      [1,2,3]      |           任意JS数组           |
  |  tuple  |       [4,5]       | 元素，TS新增类型，固定长度数组 |
  |  enum   |    enum{A, B}     |       枚举，TS中新增类型       |
- number
	```typescript
	let decimal: number = 6;
	let hex: number = 0xf00d;
	let binary: number = 0b1010;
	let octal: number = 0o744;
	let big: bigint = 100n;
	```
- boolean
	```typescript
	let isDone: boolean = false;
	```

- string
	```typescript
	let color: string = "blue";
	color = 'red';
	
	let fullName: string = `Bob Bobbington`;
	let age: number = 37;
	let sentence: string = `Hello, my name is ${fullName}.
	
	I'll be ${age + 1} years old next month.`;
	```
- 字面量
  - 也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围
  - 使用`|`来连接多个类型（联合类型）
	```typescript
	let color: 'red' | 'blue' | 'black';
	let num: 1 | 2 | 3 | 4 | 5;
	```
- any
	```typescript
    let d: any = 4;
    d = 'hello';
    d = true;
	```
- unknown
	```typescript
    let notSure: unknown = 4;
    notSure = 'hello';
	```

- void
	```typescript
	let unusable: void = undefined;
	```

- never
	```typescript
	function error(message: string): never {
	  throw new Error(message);
	}
	```
- object（没啥用）
	```typescript
	let obj: object = {};
	```
- array
	```typescript
	let list: number[] = [1, 2, 3];
	let list: Array<number> = [1, 2, 3];
	```

- tuple
	```typescript
	let x: [string, number];
	x = ["hello", 10]; 
	```

- enum
	```typescript
	enum Color {
	  Red,
	  Green,
	  Blue,
	}
	let c: Color = Color.Green;
	
	enum Color {
	  Red = 1,
	  Green,
	  Blue,
	}
	let c: Color = Color.Green;
	
	enum Color {
	  Red = 1,
	  Green = 2,
	  Blue = 4,
	}
	let c: Color = Color.Green;
	```

- 类型断言
  - 有些情况下，变量的类型对于我们来说是很明确，但是**TS**编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：
    - 第一种
		```typescript
		let someValue: unknown = "this is a string";
		let strLength: number = (someValue as string).length;
		```

    - 第二种
		```typescript
		let someValue: unknown = "this is a string";
		let strLength: number = (<string>someValue).length;
		```

---
## <font color="red">编译选项</font>
### 自动编译文件
 - 编译文件时，使用`-w`指令后，**TS**编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。

<font color="orange">示例</font>
```powershell
tsc xxx.ts -w
```

---
### 自动编译整个项目
- 🌳如果直接使用`tsc`指令，则可以自动将当前项目下的所有**ts文件**编译为**js文件**。
- 🌳但是能直接使用`tsc`命令的前提时，要先在项目根目录下创建一个**TS**的配置文件`tsconfig.json`
- 🌳`tsconfig.json`是一个**JSON**文件，添加配置文件后，只需在配置文件所在的目录下执行`tsc`命令即可完成对整个项目的编译

---
#### `tsconfig.json`文件中的配置选项
- `include`
	- 定义希望被编译文件所在的目录
	- 默认值：`["\*\*/\*"]`
	- 下述示例中，所有`src`目录和`tests`目录下的ts文件都会被编译
	```json
	"include":["src/**/*", "tests/**/*"]
	```
- `exclude`
	 - 定义需要排除在外的目录	
	 - 默认值：`["node_modules", "bower_components", "jspm_packages"]`
	 - 下述示例中，`src`下`hello`目录下的文件都不会被编译
	```json
	"exclude": ["./src/hello/**/*"]
	```
- `extends`
	- 定义被继承的配置文件
	- 下述示例中，当前配置文件中会自动包含`config`目录下`base.json`中的所有配置信息
	```json
	"extends": "./configs/base"
	```
- `files`
	- 指定被编译文件的列表，只有需要编译的文件少时才会用到
    - 下述示例中，列表中的文件都会被**TS**编译器所编译
	```json
	"files": [
	  "core.ts",
	  "sys.ts",
	  "types.ts",
	  "scanner.ts",
	  "parser.ts",
	  "utilities.ts",
	  "binder.ts",
	  "checker.ts",
	  "tsc.ts"
	]
	```
- `compilerOptions`
	- 🌳编译选项是配置文件中非常重要也比较复杂的配置选项
	- 🌳在`compilerOptions`中包含多个子选项，用来完成对编译的配置
	- 🌳`compilerOptions`项目子选项
		- `target`
			- 设置**TS**代码编译的目标版本
            - 可选值：`ES3（默认）`、`ES5`、`ES6/ES2015`、`ES7/ES2016`、`ES2017`、`ES2018`、`ES2019`、`ES2020`、`ESNext`。
            - 可选值可以通过报错来查看报错信息获取。
            - 如下示例设置，我们所编写的**ts代码**将会被编译为**ES6**版本的**js代码**
			```json
			 "compilerOptions": {
			     "target": "ES6"
			 }
			```
		- `lib`
			- 指定代码运行时所包含的库（宿主环境）
			- 可选值：`ES5`、`ES6/ES2015`、`ES7/ES2016`、`ES2017`、`ES2018`、`ES2019`、`ES2020`、`ESNext`、`DOM`.......
			- 可选值可以通过报错来查看报错信息获取。
            - 示例：
			```json
			"compilerOptions": {
			    "target": "ES6",
			    "lib": ["ES6", "DOM"],
			    "outDir": "dist",
			    "outFile": "dist/aa.js"
			}
			```
		- `module`
			- 设置编译后代码使用的模块化系统
			- 可选值：`CommonJS`、`UMD`、`AMD`、`System`、`ES2020`、`ESNext`、`None`
			- 示例：
			```typescript
		     "compilerOptions": {
		         "module": "CommonJS"
		     }
			```
		- `outDir`
			- 编译后文件的所在目录
			- 默认情况下，编译后的**js文件**会和**ts文件**位于相同的目录，设置`outDir`后可以改变编译后文件的位置
			- 如下示例，设置后编译后的**js文件**将会生成到`dist`目录
			```json
		     "compilerOptions": {
		         "outDir": "dist"
		     }
			```
		- `outFile`
			- 将所有的文件编译为一个**js文件**。
			- 默认会将所有的编写在全局作用域中的代码合并为一个**js文件**，如果`module`制定了`None`、`System`或`AMD`则会将模块一起合并到文件之中。
			- 示例：
			```json
			"compilerOptions": {
			    "outFile": "dist/app.js"
			}
			```
		- `rootDir`
 			- 指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过`rootDir`可以手动指定根目录
 			- 示例：
			```json
			"compilerOptions": {
			    "rootDir": "./src"
			}
			```
		- `allowJs`
			- 是否对**js文件**进行编译
			- 默认值是`false`
		- `checkJs`
			- 是否对**js文件**进行检查是否符合语法规范
			- 默认值是`false`
		- `removeComments`
			- 是否删除注释
			- 默认值是`false`
		- `noEmit`
			- 不对代码进行编译
			- 默认值是`false`
		- `noEmitOnError`
			- 当有错误时不生成编译文件
			- 默认值是`false`
		- `sourceMap`
			- 是否生成`sourceMap`
			- 默认值是`false`
		```json
		"compilerOptions": {
		    "allowJs": true,
		    "checkJs": true,
		    "removeComments": true,
		    "noEmit": true,
		    "noEmitOnError": true,
		    "sourceMap": true
		}
		```
		- 严格检查
			- `strict`
				- 启用所有的严格检查，默认值为`true`，设置后相当于开启了所有的严格检查
			- `alwaysStrict`
				- 总是以严格模式对代码进行编译
			- `noImplicitAny`
				- 禁止隐式的`any`类型
			- `noImplicitThis`
				- 禁止类型不明确的`this`
			- `strictBindCallApply`
				- 严格检查`bind`、`call`和`apply`的参数列表
			- `strictFunctionTypes`
				- 严格检查函数的类型
			- `strictNullChecks`
				- 严格的空值检查
			- `strictPropertyInitialization`
				- 严格检查属性是否初始化
		- 额外检查
			- `noFallthroughCasesInSwitch`
				- 检查`switch`语句包含正确的`break`
			- `noImplicitReturns`
				- 检查函数没有隐式的返回值
			- `noUnusedLocals`
				- 检查未使用的局部变量
			- `noUnusedParameters`
				- 检查未使用的参数
		- 高级
			- `allowUnreachableCode`
			- `检查不可达代码`
			- 可选值：
				- `true`，忽略不可达代码
				- `false`，不可达代码将引起错误
			- `noEmitOnError`
				 - 有错误的情况下不进行编译
				 - 默认值是`false`

---
## <font color="red">webpack打包ts代码</font>
> 通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，**TS**同样也可以结合构建工具一起使用，下边以**webpack**为例介绍一下如何结合构建工具使用**TS**。

### webpack打包ts代码步骤
1. 初始化项目
	- 进入项目根目录，执行命令 ```npm init -y```
		- 主要作用：创建`package.json`文件
2. 下载构建工具
	- ```npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin html-webpack-plugin	```
    - 共安装了7个包

|包|包介绍|
|--|--|
|webpack|构建工具webpack|
|webpack-cli|webpack的命令行工具|
|webpack-dev-server|webpack的开发服务器|
|typescript|ts编译器|
|ts-loader|ts加载器，用于在webpack中编译ts文件|
|html-webpack-plugin|webpack中html插件，用来自动创建html文件|
|clean-webpack-plugin|webpack中的清除插件，每次构建都会先清除目录|

3. 根目录下创建**webpack**的配置文件`webpack.config.js`
	```javascript
	const path = require("path");
	const HtmlWebpackPlugin = require("html-webpack-plugin");
	const { CleanWebpackPlugin } = require("clean-webpack-plugin");
	
	module.exports = {
	    optimization:{
	        minimize: false // 关闭代码压缩，可选
	    },
	
	    entry: "./src/index.ts",
	    
	    devtool: "inline-source-map",
	    
	    devServer: {
	        contentBase: './dist'
	    },
	
	    output: {
	        path: path.resolve(__dirname, "dist"),
	        filename: "bundle.js",
	        environment: {
	            arrowFunction: false // 关闭webpack的箭头函数，可选
	        }
	    },
	
	    resolve: {
	        extensions: [".ts", ".js"]
	    },
	    
	    module: {
	        rules: [
	            {
	                test: /\.ts$/,
	                use: {
	                   loader: "ts-loader"     
	                },
	                exclude: /node_modules/
	            }
	        ]
	    },
	
	    plugins: [
	        new CleanWebpackPlugin(),
	        new HtmlWebpackPlugin({
	            title:'TS测试'
	        }),
	    ]
	
	}
	```

  4. 根目录下创建`tsconfig.json`，配置可以根据自己需要
		```json
		{
			"compilerOptions": {
			    "target": "ES2015",
			    "module": "ES2015",
			    "strict": true
			}
		}
		```

  5. 修改`package.json`添加如下配置
		```json
		{
		  ...略...
		  "scripts": {
		    "test": "echo \"Error: no test specified\" && exit 1",
		    "build": "webpack --mode production",
		    "start": "webpack serve --open chrome.exe"
		  },
		  ...略...
		}
		```
  6. 在`src`下创建**ts文件**，并在并命令行执行```npm run build```对代码进行编译，或者执行```npm start```来启动开发服务器。

     
---
## <font color="red">Babel</font>
> 经过一系列的配置，使得**TS**和**webpack**已经结合到了一起，除了**webpack**，开发中还经常需要结合**babel**来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将**babel**引入到项目中。

1. 安装依赖包：
	- ```npm i -D @babel/core @babel/preset-env babel-loader core-js```
	- 共安装了4个包

|包|包介绍|
|--|--|
|@babel/core|babel的核心工具|
|@babel/preset-env|babel的预定义环境|
|@babel-loader|babel在webpack中的加载器|
|core-js|core-js用来使老版本的浏览器支持新版ES语法|

2. 修改`webpack.config.js`配置文件
	- 如此一来，使用**ts**编译后的文件将会再次被**babel**处理，使得代码可以在大部分浏览器中直接使用，可以在配置选项的`targets`中指定要兼容的浏览器版本。
```javascript
...略...
module: {
    rules: [
        {
            test: /\.ts$/,
            use: [
                {
                    loader: "babel-loader",
                    options:{
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets":{
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    "corejs":"3",
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                {
                    loader: "ts-loader",

                }
            ],
            exclude: /node_modules/
        }
    ]
}
...略...
```

---
## <font color="red">学习中遇到的问题</font>
### 1、同一文件夹下不同文件声明相同变量名会报错
<font color="orange">问题展示</font>
![在这里插入图片描述](https://img-blog.csdnimg.cn/88e9e661eb61480eb6537937ec2182c3.png)
> 如果不把**.ts**文件当作模块使用的话**TypeScript**会认为所有文件里的代码都是在一个作用域里的，所以即使在不同文件也不能声明同名变量
 
<font color="orange">解决办法</font>
1. 把文件当作一个模块,在每个文件至少有一个导出，比如在末尾加上一下代码
	```ts
	export default void 0
	```
2. 使用`namespace`防止命名冲突，比如把每个文件里的代码包在namespace里
	```ts
	// a.ts文件
	namespace A {
		let a = 1;
	}
	------------------
	// b.ts文件
	namespace B {
		let a = 1;
	}
	```
3. 写一个立即执行函数，将代码放在立即执行函数中，这样就能相当于开了一个单独的作用域
	```ts
	(function () {
	
	})();
	```

---
### 2、`npm run build`打包报错`The 'mode' option has not been set, webpack will fallback to 'production' for this value.`
<font color="orange">问题展示</font>
![在这里插入图片描述](https://img-blog.csdnimg.cn/a9fd8cc5f57845f798402f3d8a78775a.png)
<font color="orange">解决办法</font>
将`package.json`文件的内容改成如下图所示即可。
![在这里插入图片描述](https://img-blog.csdnimg.cn/85d7a5a1e7a74d059605b0424f0eaec7.png)