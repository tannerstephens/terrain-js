import * as PIXI from 'pixi.js';
import * as SimplexNoise from 'simplex-noise';

const frequency = 1024;


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
      backgroundColor: 0x000000,
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
    const mainNoise = new SimplexNoise(Math.random());
    const extraNoise = new SimplexNoise(Math.random());
    const canvas = document.createElement("canvas");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const context = canvas.getContext('2d');
    let imgData = context.createImageData(innerWidth, innerHeight);

    const setPixel = (x,y,color) => {
      const index = (y*imgData.width + x)*4;

      const r = (color & 0xff0000) >> 16;
      const g = (color & 0x00ff00) >> 8;
      const b = (color & 0x0000ff);

      imgData.data[index] = r;
      imgData.data[index+1] = g;
      imgData.data[index+2] = b;
      imgData.data[index+3] = 255;
    };

    for(let y = 0; y < innerHeight; y++) {
      for(let x = 0; x < innerWidth; x++) {
        let mainValue = (mainNoise.noise2D(x/1024, y/1024)+1)/2;
        let extraValue = (extraNoise.noise2D(x/256, y/256)) * 0.25;
        let value = mainValue+extraValue;
        let color = value < waterLevel ? waterColor : terrainColors[Math.min(Math.floor(value*terrainColors.length), terrainColors.length-1)];

        setPixel(x,y,color);
      }
    }

    context.putImageData(imgData, 0, 0);
    
    const texture = PIXI.Texture.from(canvas);
    const background = PIXI.Sprite.from(texture);

    this.app.stage.addChild(background);
  }

  gameLoop(delta) {

  }
}

export default App;
