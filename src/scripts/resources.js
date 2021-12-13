import { app } from './app.js'
import { Loader } from './utils/pixi'

app.loader = new Loader()
app.loader.add('src/res/megaman-atlas.json')

app.loader.load(() => {
  app.stage.emit('loaded')
})
