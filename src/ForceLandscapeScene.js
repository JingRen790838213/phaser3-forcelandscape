import Phaser from "phaser";
export default class extends Phaser.Scene {
  constructor(props) {
    super(props);
    // top container of this scene;
    this.SCENE_CONTAINER;
  }
  init() {
    const { width, height } = this.scale.baseSize;
    this.SCENE_CONTAINER = new Phaser.GameObjects.Container(this, 0, 0);
    this.add.displayList.add(this.SCENE_CONTAINER);
    this.add.displayList.addCallback = (gameObj) => {
      this.SCENE_CONTAINER.add(gameObj);
    };
    this.events.on("create", () => {
      if (window.orientation == 90 || window.orientation == -90) {
        return;
      }
      this.SCENE_CONTAINER.setAngle(90);
      this.SCENE_CONTAINER.setX(height);
      this.scale.setGameSize(height,width);
    });
    window.addEventListener("orientationchange", () => {
      const { width, height } = this.scale.baseSize;
      if (window.orientation == 90 || window.orientation == -90) {
        this.SCENE_CONTAINER.setAngle(0);
        this.SCENE_CONTAINER.setX(0);
      } else {
        this.SCENE_CONTAINER.setAngle(90);
        this.SCENE_CONTAINER.setX(height);
      }
      this.scale.setGameSize(height, width);
    });
  }
}
