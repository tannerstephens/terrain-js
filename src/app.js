import * as PIXI from 'pixi.js';
import Generator from './generator';

const scale = 6;
const terrainColors = [
  0xe5d9c2,
  0xb5ba61,
  0x7c8d4c,
  0x95a170,
  0xced6b6,
  0xfffafa
];
const waterLevel = 0.1;
const waterColor = 0xb6d0e3;

class App {
  constructor() {
    this.app = new PIXI.Application({
      backgroundColor: 0xffffff,
    });

    this.app.renderer.view.style.position = "absolute";
    this.app.renderer.view.style.display = "block";
    this.app.renderer.autoResize = true;
    this.app.renderer.resize(window.innerWidth, window.innerHeight);

    this.setup();

    this.app.ticker.add((delta) => this.gameLoop(delta));
  }

  display() {
    document.body.appendChild(this.app.view);
    document.body.style.margin = 0;
  }

  setup() {
    const gr = new PIXI.Graphics();
    gr.beginFill(0xffffff);
    gr.drawRect(0,0,scale,scale);
    gr.endFill();

    this.texture = this.app.renderer.generateTexture(gr);

    this.generator = new Generator();

    this.x = 0;
    this.y = 0;

    this.step = 0;

  }

  gameLoop(delta) {
    if(this.step == 0) {
      this.genRow();
    }
    if(this.y*scale > innerHeight) {
      this.y = 0;
      this.step = 1;
    }
  }

  genRow() {
    const pixels = [];
    while(this.x*scale < innerWidth) {
      let value = this.generator.getValue(this.x, this.y);
      let color = value < waterLevel ? waterColor : terrainColors[Math.floor(value*terrainColors.length)];
      let pixel = this.createPixel(this.x, this.y, color);
      pixels.push(pixel);
      this.x += 1;
    }
    this.app.stage.addChild(...pixels);
    this.x = 0;
    this.y += 1;
  }

  createPixel(x,y,color) {
    const pixel = new PIXI.Sprite(this.texture);
    pixel.position.x = x*scale;
    pixel.position.y = y*scale;
    pixel.tint = color;
    return pixel
  } 

}

export default App;
