import { app, Loader } from './app.js'

app.loader = new Loader()
app.loader.add('src/res/megaman-atlas.json')

app.loader.load(() => {
  app.stage.emit('loaded')
})
