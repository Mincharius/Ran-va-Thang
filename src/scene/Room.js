import Phaser from "phaser";
import config from "../config/config";
import Button from "../game-object/Button";
import Server from "../server/server";

const { width, height } = config;

export default class Room extends Phaser.Scene {
  constructor() {
    super("room");
    this.server = new Server();
  }

  create() {
    this.add.image(width / 2, height / 2, "bg_menu");

    this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.6);

    this.msgBox = this.add.image(width / 2, height / 2, "bg_help");

    this.exit = new Button(
      this,
      this.msgBox.x + this.msgBox.width / 2 - 70,
      this.msgBox.y - this.msgBox.height / 2 + 70,
      "exit"
    ).setScale(0.5);

    this.btnCreateRoom = new Button(this, width / 2, height / 2 - 60, "Create").setScale(0.8);
    this.btnJoinRoom = new Button(this, width / 2, height / 20 + 350, "Join").setScale(0.8);


    this.input.on("gameobjectdown", async (pointer, gameobject) => {
      switch (gameobject) {
        case this.exit:
          this.scene.stop();
          this.scene.start("start");
          break;
        case this.btnCreateRoom:
          await this.server.create();
          this.scene.stop();
          this.scene.start("wait", {
            server: this.server,
            type:"create"
          });
          break;
        case this.btnJoinRoom:
          this.scene.stop();
          this.scene.start("keyboard", { server: this.server });
          break;
      }
    });
  }
}
