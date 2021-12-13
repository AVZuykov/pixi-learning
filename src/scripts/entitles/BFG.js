import { Container, Sprite } from '../utils/pixi'
import { app } from '../app'

const { visual } = app

export class BFG extends Container {
  constructor(x, y, direction) {
    super()
    this.speed = 10
    this.x = x
    this.y = y
    this.direction = direction

    this.fireball = new Sprite(visual.fireball[0].texture)
    this.fireball.anchor.set(0, 0.5)
    this.fireball.scale.set(direction, direction)
    this.fireball.x = -15 * direction
    this.addChild(this.fireball)


    app.ticker.add(() => {
      this.update()
    })
  }

  update() {
    //Use the megaman's velocity to make it move

    if ( this.height < 500 ) {

      this.x += this.direction * 1.1
      this.scale.x += 0.08
      this.scale.y += 0.08
      // this.rotation += .05
    } else {
      this.fireball.width += 12

    }
    // this.x += this.speed * this.direction + this.vx
    // this.y += this.vy
  }
}
