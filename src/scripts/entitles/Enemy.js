import { Container, Sprite } from '../utils/pixi'
import { app } from '../app'


const { visual } = app

export class Enemy extends Container {
  constructor(megaman) {
    super()
    this.aim = megaman
    this.enemy = new Sprite(visual.enemy[0].texture)
    this.speed = 1
    // this.enemy.scale.set(-1, 1)
    this.enemy.anchor.set(0.5, 0.5)
    this.xDirection = megaman.x - this.x > 0 ? 1 : -1
    this.yDirection = megaman.y - this.x > 0 ? 1 : -1
    this.enemyScale = Math.random() * 1.5 + 0.5
    this.enemy.scale.set(this.enemyScale)
    this.addChild(this.enemy)

    setInterval(() => {
      if ( Math.sqrt(Math.pow(this.aim.x - this.x, 2) + Math.pow(this.aim.y - this.y, 2)) < 100 ) {
        this.speed = 0
      } else {
        this.speed = .5
      }
    }, 1000)

    app.ticker.add((delta) => {
      //Use the megaman's velocity to make it move
      this.update(delta)
    })
  }

  setDirection() {
    const xDifferent = this.aim.x - this.x
    const yDifferent = this.aim.y - this.y
    if ( xDifferent > 10 || xDifferent < -10 ) {
      this.xDirection = xDifferent > 0 ? 1 : -1
    } else {
      this.xDirection = 0

    }
    this.enemy.scale.set(-this.xDirection * this.enemyScale || this.enemyScale, this.enemyScale)
    if ( yDifferent !== 0 ) {
      this.yDirection = yDifferent > 0 ? 1 : -1
    } else {
      this.yDirection = 0
    }
  }

  update() {
    // Use the megaman's velocity to make it move
    this.x += this.speed * this.xDirection
    this.y += this.speed * this.yDirection
    this.setDirection()
  }
}