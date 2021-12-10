import { app, Container } from './app.js'
import Megaman from './entitles/megaman.js'


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
    this.addChild(megaman)
  }
}

app.world = new World()

