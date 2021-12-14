import { app } from '../app'
import { Container, Sprite } from '../utils/pixi'

const { visual } = app

export class Fireball extends Container {
  constructor(x, y, direction, vx, vy) {
    super()
    this.speed = 10
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.direction = direction

    this.fireball = new Sprite(visual.fireball[0].texture)

    this.addChild(this.fireball)

    app.ticker.add((delta) => {
      //Use the megaman's velocity to make it move
      if ( this.x > app.screen.width || this.x < 0 ) {
        app.destroy(this)
      }
      this.update(delta)
    })
  }

  update() {
    this.x += this.speed * this.direction + this.vx
    this.y += this.vy
  }
}
