# Phaser3js forceLandscapeScene实现强制横屏效果
# 原理
根据移动端横竖屏状态来旋转游戏场景（scene）
根据初始化横竖屏状态来旋转角度，进行缩放比例调整

# 使用方法
1.npm install phaser3-landscapeScene


## BootScene.js    
	import ForceLandscapeScene from 'phaser3-landscapeScene';
	
	export default class BootScene extends ForceLandscapeScene{
		····
		
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

![](https://xncake-1257311440.cos.ap-guangzhou.myqcloud.com/img/3bbcbb40-f598-11ea-b224-a7ba00f99d7e.png)
2.横屏
![](https://xncake-1257311440.cos.ap-guangzhou.myqcloud.com/img/5b091f20-f598-11ea-8e28-7f8b1880c479.png)