import { AnimatedSprite, Container, Sprite } from '../utils/pixi'
import { app } from '../app.js'
import { Fireball } from './Fireball'
import { BFG } from './BFG'
import { Keyboard } from '../utils/controls.js'

const { visual } = app

export default class Megaman extends Container {
  constructor() {
    super()
    this.vx = 0
    this.vy = 0
    this.speed = 5
    this.firespeed = 300
    this.animationSpeed = 0.12
    this.lastFrame = 0
    this.charge = undefined
    this.direction = 1

    //Стой и моргай
    this.stayedSprite = new AnimatedSprite([
      {
        texture: visual.stay[0].texture,
        time: 2000,
      },
      {
        texture: visual.stay[1].texture,
        time: 150,
      },
    ])

    // this.stayedSprite.visible = false;

    //Стой и стреляй
    this.stayAndFireSprite = new Sprite(visual.stayAndFire[0].texture)

    this.stayAndFireSprite.visible = false

    //Беги
    this.runningSprite = new AnimatedSprite(
        visual.run.map((img) => img.texture),
    )
    this.runningSprite.visible = false

    //Беги и стреляй
    this.runAndFireSprite = new AnimatedSprite(
        visual.runAndFire.map((img) => img.texture),
    )
    // this.runAndFireSprite.play();
    this.runAndFireSprite.visible = false

    this.runningSprite.animationSpeed = this.animationSpeed
    this.runAndFireSprite.animationSpeed = this.animationSpeed

    this.centered([this.runAndFireSprite, this.runningSprite, this.stayAndFireSprite, this.stayedSprite])

    this.addChild(this.stayedSprite)
    this.addChild(this.stayAndFireSprite)
    this.addChild(this.runningSprite)
    this.addChild(this.runAndFireSprite)

    app.ticker.add((delta) => {
      //Use the megaman's velocity to make it move
      this.update(delta)
    })

    //Capture the keyboard arrow keys
    const left = new Keyboard([ 'Ф', 'A', 'ф', 'a', 'ArrowLeft' ]),
        up = new Keyboard([ 'Ц', 'W', 'ц', 'w', 'ArrowUp' ]),
        right = new Keyboard([ 'В', 'D', 'в', 'd', 'ArrowRight' ]),
        down = new Keyboard([ 'Ы', 'S', 'ы', 's', 'ArrowDown' ]),
        space = new Keyboard([ ' ' ]),
        shift = new Keyboard([ 'Shift' ], true),
        shiftBlock = [ left, up, right, down, space ]

    space.press = () => {
      this.fire()
      this.fireInterval = setInterval(() => this.fire(), this.firespeed)


      if ( this.vx === 0 && this.vy === 0 ) {
        this.stayAndFire()
      } else {
        this.runAndFire()
      }
    }

    space.release = () => {
      clearInterval(this.fireInterval)
      if ( this.vx !== 0 || this.vy !== 0 ) {
        this.run()
      } else {
        this.stay()
      }
    }

    shift.press = () => {
      shiftBlock.forEach(button => {
        button.disable()
      })
      clearInterval(this.fireInterval)
      this.stayAndFire()
      this.charge = this.crhargeFire()
    }

    shift.release = () => {
      this.cancelCharge(this.charge)
      this.stay()
    }


    //Left arrow key `press` method
    left.press = () => {
      //Change the megaman's velocity when the key is pressed
      this.vx += -this.speed
      this.direction = -1
      this.isRun(space.isDown)
    }

    //Left arrow key `release` method
    left.release = () => {
      this.vx += this.speed
      this.isRun(space.isDown)
    }

    //Up
    up.press = () => {
      this.vy += -this.speed
      this.isRun(space.isDown)
    }
    up.release = () => {
      this.vy += this.speed
      this.isRun(space.isDown)
    }

    //Right
    right.press = () => {
      this.vx += this.speed
      this.direction = 1
      this.isRun(space.isDown)
    }
    right.release = () => {
      this.vx += -this.speed
      this.isRun(space.isDown)
    }

    //Down
    down.press = () => {
      this.vy += this.speed
      this.isRun(space.isDown)
    }
    down.release = () => {
      this.vy += -this.speed
      this.isRun(space.isDown)
    }
  }

  isRun(space) {
    if ( this.vy !== 0 || this.vx !== 0 ) {
      //Направление движения
      if ( this.vx !== 0 ) {
        this.scale.x = this.direction
      }
      //И стреляет?
      space ? this.runAndFire() : this.run()
    } else {
      space ? this.stayAndFire() : this.stay()
    }
    this.cancelCharge(this.charge)
  }

  centered(sprites) {
    sprites.forEach(sprite => {
      sprite.anchor.set(.5, .5)
    })
  }

  fire() {
    this.cancelCharge(this.charge)
    app.stage.addChild(new Fireball(this.x + this.direction * 88, this.y, this.direction, this.vx, this.vy))
  }

  crhargeFire() {
    const ChargedShoot = new BFG(this.x + this.direction * 88, this.y, this.direction)
    app.stage.addChild(ChargedShoot)
    return ChargedShoot
  }

  cancelCharge(charge) {
    app.stage.removeChild(charge)
  }

  runAndFire() {
    this.stayedSprite.visible = false
    this.runAndFireSprite.visible = true
    this.stayAndFireSprite.visible = false
    this.runningSprite.visible = false
    this.runAndFireSprite.gotoAndPlay(0)
    this.lastFrame = this.runAndFireSprite.currentFrame
    this.runningSprite.stop()
  }

  stayAndFire() {
    this.stayedSprite.visible = false
    this.stayAndFireSprite.visible = true
    this.runAndFireSprite.visible = false
    this.runningSprite.visible = false
    this.runAndFireSprite.gotoAndPlay(this.lastFrame)
    this.lastFrame = 0
    this.runningSprite.stop()
  }

  run() {
    this.stayedSprite.visible = false
    this.runAndFireSprite.visible = false
    this.runningSprite.visible = true
    this.stayAndFireSprite.visible = false
    this.runningSprite.gotoAndPlay(this.lastFrame)
    this.lastFrame = this.runAndFireSprite.currentFrame
    this.runAndFireSprite.stop()
  }

  stay() {
    this.stayedSprite.visible = true
    this.runningSprite.visible = false
    this.stayAndFireSprite.visible = false
    this.runAndFireSprite.visible = false
    this.runningSprite.stop()
    this.lastFrame = 0
    this.runAndFireSprite.stop()
  }

  update() {
    //Use the megaman's velocity to make it move
    this.x += this.vx
    this.y += this.vy
  }
}
