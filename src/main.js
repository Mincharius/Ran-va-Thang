import Phaser from "phaser";
import StartGame from "./scene/StartGame";
import Game from "./scene/Game";
import baseConfig from "./config/config";
import GameEnd from "./scene/GameEnd";
import DropDownSetting from "./scene/DropDownSetting";
import Confirm from "./scene/Confirm";
import Help from "./scene/Help";
import Room from "./scene/Room";
import Wait from "./scene/Wait";
import Preload from "./scene/Preload";
import Notification from "./scene/Notification";
import Keyboard from "./scene/Keyboard";

const { width, height } = baseConfig;

const config = {
  type: Phaser.AUTO,
  parent: "app",
  width: width,
  height: height,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [
    Preload,
    StartGame,
    Game,
    GameEnd,
    DropDownSetting,
    Confirm,
    Help,
    Room,
    Notification,
    Keyboard,
    Wait,
  ],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  dom: {
    createContainer: true,
  },
};

const game = new Phaser.Game(config);

window.game = game;

export default game;
