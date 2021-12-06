import * as PIXI from 'pixi.js';

//Create a Pixi Application
class Application {
  constructor() {
    this.renderer = new PIXI.Renderer({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundAlpha: 0,
      resolution: 1
    });

    document.body.appendChild(this.renderer.view);

    this.renderer.view.style.position = 'absolute';
    this.renderer.view.style.display = 'block';
    this.resizeTo = window;


    this.ticker = new PIXI.Ticker();
    this.stage = new PIXI.Container();

    this.ticker.add(this.render.bind(this), PIXI.UPDATE_PRIORITY.LOW);
    this.ticker.start();
  }

  get screen() {
    return this.renderer.screen;
  }

  render() {
    this.renderer.render(this.stage);
  }
}

const app = (Window.app = new Application());

export default app;