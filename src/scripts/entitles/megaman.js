import * as PIXI from "pixi.js";
import app from "../app.js";
import { keyboard } from "../utils/controls.js";

export default class Megaman extends PIXI.Container {
  constructor() {
    super();

    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.animationSpeed = 0.12;
    this.lastFrame = 0;

    //Стой и моргай
    this.stayedSprite = new PIXI.AnimatedSprite([
      {
        texture: app.visual.stay[0].texture,
        time: 2000,
      },
      {
        texture: app.visual.stay[1].texture,
        time: 150,
      },
    ]);

    // this.stayedSprite.visible = false;

    //Стой и стреляй
    this.stayAndFireSprite = new PIXI.Sprite(app.visual.stayAndFire[0].texture);

    this.stayAndFireSprite.visible = false;

    //Беги
    this.runningSprite = new PIXI.AnimatedSprite(
      app.visual.run.map((img) => img.texture)
    );
    this.runningSprite.visible = false;

    //Беги и стреляй
    this.runAndFireSprite = new PIXI.AnimatedSprite(
      app.visual.runAndFire.map((img) => img.texture)
    );
    // this.runAndFireSprite.play();
    this.runAndFireSprite.visible = false;

    this.runningSprite.animationSpeed = this.animationSpeed;
    this.runAndFireSprite.animationSpeed = this.animationSpeed;

    this.addChild(this.stayedSprite);
    this.addChild(this.stayAndFireSprite);
    this.addChild(this.runningSprite);
    this.addChild(this.runAndFireSprite);

    app.ticker.add((delta) => {
      //Use the megaman's velocity to make it move
      this.update(delta);
    });

    //Capture the keyboard arrow keys
    const left = keyboard(["ArrowLeft", "a"]),
      up = keyboard(["ArrowUp", "w"]),
      right = keyboard(["ArrowRight", "d"]),
      down = keyboard(["ArrowDown", "s"]),
      space = keyboard([" "]);

    //Left arrow key `press` method
    space.press = () => {
      if (this.vx === 0 && this.vy === 0) {
        this.stayAndFire();
      } else {
        this.runAndFire();
      }
    };

    //Left arrow key `release` method
    space.release = () => {
      //If the left arrow has been released, and the right arrow isn't down,
      //and the megaman isn't moving vertically:
      //Stop the megaman
      if (this.vx !== 0 || this.vy !== 0) {
        this.run();
      } else {
        this.stay();
      }
    };

    //Left arrow key `press` method
    left.press = () => {
      //Change the megaman's velocity when the key is pressed
      this.vx += -this.speed;

      this.isRun(space.isDown);
    };

    //Left arrow key `release` method
    left.release = () => {
      //If the left arrow has been released, and the right arrow isn't down,
      //and the megaman isn't moving vertically:
      //Stop the megaman
      this.vx += this.speed;
      this.isRun(space.isDown);
    };

    //Up
    up.press = () => {
      this.vy += -this.speed;
      this.isRun(space.isDown);
    };
    up.release = () => {
      this.vy += this.speed;
      this.isRun(space.isDown);
    };

    //Right
    right.press = () => {
      this.vx += this.speed;
      this.isRun(space.isDown);
    };
    right.release = () => {
      this.vx += -this.speed;
      this.isRun(space.isDown);
    };

    //Down
    down.press = () => {
      this.vy += this.speed;
      this.isRun(space.isDown);
    };
    down.release = () => {
      this.vy += -this.speed;
      this.isRun(space.isDown);
    };
  }

  isRun(space) {
    if (this.vy !== 0 || this.vx !== 0) {
      //Направление движения
      this.vx > 0 ? (this.scale.x = 1) : (this.scale.x = -1);
      //И стреляет?
      space ? this.runAndFire() : this.run();
    } else {
      space ? this.stayAndFire() : this.stay();
    }
  }

  runAndFire() {
    this.stayedSprite.visible = false;
    this.runAndFireSprite.visible = true;
    this.stayAndFireSprite.visible = false;
    this.runningSprite.visible = false;
    this.runAndFireSprite.gotoAndPlay(0);
    this.lastFrame = this.runAndFireSprite.currentFrame;
    this.runningSprite.stop();
  }

  stayAndFire() {
    this.stayedSprite.visible = false;
    this.stayAndFireSprite.visible = true;
    this.runAndFireSprite.visible = false;
    this.runningSprite.visible = false;
    this.runAndFireSprite.gotoAndPlay(this.lastFrame);
    this.lastFrame = 0;
    this.runningSprite.stop();
  }

  run() {
    this.stayedSprite.visible = false;
    this.runAndFireSprite.visible = false;
    this.runningSprite.visible = true;
    this.stayAndFireSprite.visible = false;
    this.runningSprite.gotoAndPlay(this.lastFrame);
    this.lastFrame = this.runAndFireSprite.currentFrame;
    this.runAndFireSprite.stop();
  }

  stay() {
    this.stayedSprite.visible = true;
    this.runningSprite.visible = false;
    this.stayAndFireSprite.visible = false;
    this.runAndFireSprite.visible = false;
    this.runningSprite.stop();
    this.lastFrame = 0;
    this.runAndFireSprite.stop();
  }

  update() {
    //Use the megaman's velocity to make it move
    this.x += this.vx;
    this.y += this.vy;
  }
}
