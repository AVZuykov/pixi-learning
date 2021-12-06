import * as PIXI from 'pixi.js';
import app from './app.js';

app.loader = new PIXI.Loader;

app.loader.add('src/res/megaman-atlas.json');

app.loader.load(() => {
	app.stage.emit('loaded');
});
