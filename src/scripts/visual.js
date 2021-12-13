import { app } from './app.js'


class VisualModels {
  constructor() {
    app.stage.on('loaded', () => {
      this.createModels()
    })
  }

  createModels() {
    const resources = app['loader'].resources
    const sprites = resources['src/res/megaman-atlas.json'].textures
    Object.assign(this, {
      stay: [
        {
          texture: sprites['stay_1.png'],
        },
        {
          texture: sprites['stay_2.png'],
        },
      ],
      stayAndFire: [
        {
          texture: sprites['stay-and-fire_1.png'],
        },
      ],
      run: [
        {
          texture: sprites['run_1.png'],
        },
        {
          texture: sprites['run_2.png'],
        },
        {
          texture: sprites['run_1.png'],
        },
        {
          texture: sprites['run_3.png'],
        },
      ],
      runAndFire: [
        {
          texture: sprites['run-and-fire_1.png'],
        },
        {
          texture: sprites['run-and-fire_2.png'],
        },
        {
          texture: sprites['run-and-fire_1.png'],
        },
        {
          texture: sprites['run-and-fire_3.png'],
        },
      ],
      fireball: [
        {
          texture: sprites['fireball_1.png'],
        },
      ],
      enemy: [
        {
          texture: sprites['enemy.png'],
        },
      ],
    })
  }
}

app.visual = new VisualModels()
