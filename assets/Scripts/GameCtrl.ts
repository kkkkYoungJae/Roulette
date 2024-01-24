import { _decorator, Component, EventMouse, Input, input } from "cc";
import { Roulette } from "./Roulette";
const { ccclass, property } = _decorator;

@ccclass("GameCtrl")
export class GameCtrl extends Component {
  @property({ type: Roulette })
  public roulette: Roulette;

  start() {
    input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
  }

  onMouseUp(event: EventMouse) {
    this.roulette.onClickRoulette();
  }
}
