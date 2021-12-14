import { app } from './app.js'
import { Container } from './utils/pixi'
import Megaman from './entitles/Megaman.js'
import { Enemy } from './entitles/Enemy'


class World extends Container {
  constructor() {
    super()
    app.stage.on('loaded', () => {
      this.createWorld()
      app.stage.addChild(this)
    })
  }

  createWorld() {
    let megaman = new Megaman()
    megaman.x = app.screen.width / 2
    megaman.y = app.screen.height / 2
    let enemyCounter = 0
    setTimeout(()=>{
      setInterval(() => {
        if ( enemyCounter < 10 ) {
          enemyCounter++
          const enemy = new Enemy(megaman)
          enemy.x = app.screen.width * Math.random()
          enemy.y = app.screen.height * Math.random()
          this.addChild(enemy)
        }
      }, 800)
    }, 8000)

    this.addChild(megaman)
  }


}

app.world = new World()

