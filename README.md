# Phaser3js forceLandscapeScene实现强制横屏效果
# 原理
根据移动端横竖屏状态来旋转游戏场景（scene）
根据初始化横竖屏状态来旋转角度，进行缩放比例调整

![](https://raw.githubusercontent.com/JingRen790838213/githubreadmeassets/master/7a89bc235b3c3bbaec732b6d6b4e24b.png)

# 使用方法
1.下载模板[phaser3-project-template](https://github.com/photonstorm/phaser3-project-template)
2.安装 npm install phaser-forcelandscape


## BootScene.js    
    class BootScene extends ForceLandscapeScene {
      constructor(props) {
    	super();
      }
      preload() {
    	this.load.image("logo", logoImg);
      }
      renderStartText() {
	    const { width, height } = this.scale.baseSize;
	    const startText = this.add.text(
	      width / 2,
	      height / 1.2,
	      "PUSH ENTER TO START"
	    );
	    
	    startText.setOrigin(0.5, 0.5);
	    startText.alpha = 1;
	    startText.setInteractive();
	    startText.on("pointerup", function () {
	      console.log("start game");
	      window.game.scene.sleep("boot");
	    });
	    this.tweens.add({
	      targets: [startText],
	      props: {
	    	alpha: 0,
	      },
	      loop: -1,
	      duration: 1000,
	    });
      }
      create() {
	    const { width, height } = this.scale.baseSize;
	    this.add.image(width / 2, height / 2.4, "logo");
	    this.renderStartText();
	  }
    }

## index.html
	<!DOCTYPE html>
	<html>
	
	<head>
	  <meta charset="utf-8">
	  <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
	    name="viewport">
	  <style>
	    * {
	      margin: 0;
	      padding: 0;
	      box-sizing: border-box;
	      -webkit-text-size-adjust: none;
	      -moz-text-size-adjust: none;
	      -ms-text-size-adjust: none;
	      text-size-adjust: none
	    }
	
	    html,
	    body {
	      width: 100%;
	      height: 100%;
	    }
	
	    body {
	      display: flex;
	      align-items: center;
	      justify-content: center;
	    }
	
	    canvas {
	      margin: 0 auto;
	      display: block;
	    }
	  </style>
	</head>
	
	<body>
	  <div id="root"></div>
	</body>
	
	</html>



## index.js

	// 判断初始化时候是否屏幕横竖状态
	const isLandscape = window.orientation == 90 || window.orientation == -90;
	// 移动端高宽比例
	let windowRatio =
	  document.documentElement.clientWidth / document.documentElement.clientHeight;
	windowRatio = isLandscape ? 1 / windowRatio : windowRatio;
	
	// 根据移动端实际高度选择横屏时候合适的canvas宽度
	//const width =document.documentElement.clientWidth-100
	const width = 650;//相对750
	const height = width * windowRatio;
	
	const config = {
	  type: Phaser.AUTO,
	  physics: {
	    default: "arcade",
	  },
	  scale: {
	    model: Phaser.Scale.FIT,
	    width,
	    height,
	    parent: "root",
	  },
	};
	const game = new Phaser.Game(config);
	game.scene.add("boot", BootScene, true);

#效果
横竖屏切换保持横屏状态


1.竖屏

![](https://raw.githubusercontent.com/JingRen790838213/githubreadmeassets/master/7a89bc235b3c3bbaec732b6d6b4e24b.png)
2.横屏
![](https://raw.githubusercontent.com/JingRen790838213/githubreadmeassets/master/e56e36056a86af75f43d072d7626916.png)
