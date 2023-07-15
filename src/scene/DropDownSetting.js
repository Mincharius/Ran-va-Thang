import Phaser from "phaser";
import config from "../config/config";
import WebFontFile from "../game-object/WebFontFile";
import Button from "../game-object/Button";

const { width, height } = config;

export default class DropDownSetting extends Phaser.Scene {
  constructor() {
    super("dropdownsetting");
  }

  create(data) {
    const { text } = data;

    this.createBackground();
    this.createMessageText(text);
    this.createButtons();

    this.applyButtonAnimations();

    this.messageText = this.add.text(width/2 , height / 2, "Pause", {
      fontFamily: "Permanent Marker",
      fontSize: "70px",
      color: "#ffffff",
    });

    this.input.on("gameobjectdown", (pointer, gameObject) => {
      switch (gameObject) {
        case this.settings:
          this.hideButtons();
          this.stopScene();
          break;
        case this.fullscreen:
          this.toggleFullscreen();
          break;
        case this.exit:
          this.showConfirmScene();
          break;
        case this.help:
          this.showHelpScene();
          break;
        case this.butAudio:
          this.toggleAudio();
          break;
      }
    });
  }

  createBackground() {
    this.background = this.add.rectangle(
      width / 2,
      height / 2,
      width,
      height,
      0x000000,
      0.6
    );
  }

  createMessageText(text) {
    this.messageText = this.add.text(width / 2, height / 2, text, {
      fontFamily: "Permanent Marker",
      fontSize: "70px",
      color: "#ffffff",
    });
    this.messageText.setOrigin(0.5, 0.5);
  }

  createButtons() {
    this.help = new Button(this, 1300, 50, "but_help");
    this.fullscreen = new Button(this, 1300, 50, "but_fullscreen");
    this.butAudio = new Button(this, 1300, 50, "audio");
    this.settings = new Button(this, 1300, 50, "but_settings");
    this.bgMusic = this.sound.add("bg_music", { loop: true });
    this.bgMusic.play();
  }

  applyButtonAnimations() {
    this.applyTweenAnimation(this.help, 120);
    this.applyTweenAnimation(this.fullscreen, 190);
    this.applyTweenAnimation(this.butAudio, 260);
  }

  applyTweenAnimation(button, yPosition) {
    this.tweens.add({
      targets: button,
      y: yPosition,
      duration: 500,
      ease: "Power2",
    });
  }

  hideButtons() {
    const buttons = [this.exit, this.help, this.fullscreen, this.butAudio];
    this.applyTweenAnimation(buttons, 50);
    setTimeout(() => {
      this.stopScene();
    }, 200);
  }

  stopScene() {
    this.scene.stop("dropdownsetting");
    this.scene.get("game").dice.setInteractive();
  }

  toggleFullscreen() {
    this.fullscreen.setFrame(this.fullscreen.frame.name == 0 ? 1 : 0);
    this.scale.toggleFullscreen();
  }

  showConfirmScene() {
    this.scene.launch("confirm");
  }

  showHelpScene() {
    this.scene.launch("help");
  }

  toggleAudio() {
    if (this.butAudio.frame.name == 0) {
      this.butAudio.setFrame(1);
      this.bgMusic.stop();
    } else {
      this.butAudio.setFrame(0);
      this.bgMusic.play();
    }
  }

  exitFullScreen() {
    this.fullscreen.setFrame(1);
  }
}
