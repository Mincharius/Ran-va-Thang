import Phaser from "phaser";
import Server from "../server/server";
import config from "../config/config";
import Button from "../game-object/Button";
import WebFontFile from "../game-object/WebFontFile";

const { width, height } = config;

export default class StartGame extends Phaser.Scene {
  constructor() {
    super("start");
  }
  init() {
    this.server = new Server();
  }

  create(data) {
    this.background = this.add.image(width / 2, height / 2, "bg_menu");
    this.butCredit = new Button(this, 50, 50, "but_credit").setFrame(1);
    this.butFullScreen = new Button(this, 120, 50, "but_fullscreen").setFrame(
      1
    );
    this.butAudio = new Button(this, width - 50, 50, "audio");

    this.logo = this.add.image(width / 2, height / 3, "logo_menu");
    this.butPlay = new Button(this, width / 2, height / 3 + 250, "but_play");

    this.tweens.add({
      targets: this.logo,
      scaleX: 1.2,
      scaleY: 1.2,
      duration: 1000,
      yoyo: true,
      repeat: -1,
    });

    this.tweens.add({
      targets: this.butPlay,
      scaleX: 1.2,
      scaleY: 1.2,
      duration: 700,
      yoyo: true,
      repeat: -1,
    });

    this.input.on("gameobjectdown", (pointer, gameObject) => {
      switch (gameObject) {
        case this.butAudio:
          if (this.butAudio.frame.name == 0) {
            this.butAudio.setFrame(1);
            this.bgMusic.stop();
          } else {
            this.butAudio.setFrame(0);
            this.bgMusic.play();
          }
          break;
        case this.butFullScreen:
          this.butFullScreen.setFrame(
            this.butFullScreen.frame.name == 0 ? 1 : 0
          );
          this.scale.toggleFullscreen();
          break;
        case this.butPlay:
          this.scene.start("room");
          break;
      }
    });

    // Tạo âm thanh nền
    this.bgMusic = this.sound.add("bg_music", { loop: true });
    this.bgMusic.play();
  }

  exitFullScreen() {
    this.butFullScreen.setFrame(1);
  }
}
