import * as PIXI from 'pixi.js'


export const { Container, Sprite, Renderer, Ticker, UPDATE_PRIORITY, AnimatedSprite, Loader } = PIXI

//Create a Pixi Application
class Application {
  constructor() {
    this.renderer = new Renderer({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundAlpha: 0,
      resolution: 1,
    })

    document.body.appendChild(this.renderer.view)

    this.renderer.view.style.position = 'absolute'
    this.renderer.view.style.display = 'block'
    this.resizeTo = window


    this.ticker = new Ticker()
    this.stage = new Container()

    this.ticker.add(this.render.bind(this), UPDATE_PRIORITY.LOW)
    this.ticker.start()

  }

  get screen() {
    return this.renderer.screen
  }

  render() {
    this.renderer.render(this.stage)
  }
  destroy(el) {
    this.stage.removeChild(el)
  }
}

export const app = new Application()
