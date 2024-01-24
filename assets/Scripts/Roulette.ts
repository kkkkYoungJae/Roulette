import { Component, Vec3, _decorator } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Roulette")
export class Roulette extends Component {
  public isPlay: boolean;
  public rouletteLocation: Vec3;
  public rotateRadius: number;
  public currentRotate: number;
  public radius: number;

  onLoad() {
    this.initializeRoulette();
  }

  initializeRoulette() {
    this.isPlay = false;
    this.rotateRadius = 0;
    this.currentRotate = 0;
    this.radius = 0;
  }

  onClickRoulette() {
    this.isPlay ? this.stopRouletteAnimation() : this.startRouletteAnimation();
  }

  stopRouletteAnimation() {
    this.isPlay = false;
  }

  startRouletteAnimation() {
    if (this.rotateRadius === 0) {
      this.isPlay = true;
      this.rotateRadius = 50;
      this.radius = Math.random() * (0.985 - 0.945) + 0.945;
    }
  }

  gameOver() {
    console.log("end", this.currentRotate % 360);
  }

  update() {
    if (!this.isPlay) {
      this.rotateRadius = this.rotateRadius * this.radius;
      if (this.rotateRadius > 0 && this.rotateRadius < 0.1) {
        this.rotateRadius = 0;

        this.gameOver();
      }
    }

    this.currentRotate = this.currentRotate + this.rotateRadius;
    this.node.setRotationFromEuler(new Vec3(0, 0, this.currentRotate));
  }
}
