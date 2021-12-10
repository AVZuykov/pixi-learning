import * as PIXI from 'pixi.js'
import app from '../app'

export class Fireball extends PIXI.Container {
  constructor(x, y, direction) {
    super()
    this.speed = 10
    this.x = x
    this.y = y
    this.direction = direction

    this.fireball = new PIXI.Sprite(app.visual.fireball[0].texture)

    this.addChild(this.fireball)

    app.ticker.add((delta) => {
      //Use the megaman's velocity to make it move
      if ( this.x > app.screen.width || this.x < 0 ) {
        app.stage.removeChild(this)
      }
      this.update(delta)
    })
  }

  update() {
    //Use the megaman's velocity to make it move
    this.x += this.speed * this.direction
  }
}
