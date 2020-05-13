import constants from './constants';
import ControlPanel from './controlPanel/controlPanel';
import NoiseGenerator from './noiseGenerator';


class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;

    this.canvas.style.position = "absolute";
    this.canvas.style.display = "block";
    this.canvas.style.zIndex = -1;

    this.setup();
  }

  display() {
    document.body.appendChild(this.canvas);
    document.body.style.margin = 0;
  }

  setup() {
    this.context = this.canvas.getContext('2d');
    this.noiseGenerator = new NoiseGenerator();
    this.controlPanel = new ControlPanel([
      {
        tag: 'button',
        text: 'New Seed',
        attrs: {
          class: 'button is-warning'
        },
        listeners: {
          click: (element) => {
            return () => {
              if(element.disabled == false) {
                element.disabled = true;
                this.noiseGenerator.seed();
                setTimeout(() => {
                  this.renderMap();
                  element.disabled = false;
                }, 100);
              }
            }
          },
        }
      }
    ]);


    this.renderMap();
  }

  renderMap() {
    const imageData = this.context.createImageData(innerWidth, innerHeight);

    const setPixel = (x, y, color) => {
      const index = (y*imageData.width + x)*4;

      const r = (color & 0xff0000) >> 16;
      const g = (color & 0x00ff00) >> 8;
      const b = (color & 0x0000ff);

      imageData.data[index] = r;
      imageData.data[index+1] = g;
      imageData.data[index+2] = b;
      imageData.data[index+3] = 255;
    }

    const oct1 = this.noiseGenerator.generate(0, 0, innerWidth, innerHeight, 1024);
    const oct2 = this.noiseGenerator.generate(0, 0, innerWidth, innerHeight, 256, 0.25);
    const oct3 = this.noiseGenerator.generate(0, 0, innerWidth, innerHeight, 64, 0.0625);

    oct1.forEach((column, x) => column.forEach((value, y) => {
      const totalValue = value + oct2[x][y] + oct3[x][y];
      const color = totalValue < 0.1 ? constants.waterColor : constants.terrainColors[Math.min(Math.floor(totalValue*constants.terrainColors.length), constants.terrainColors.length-1)]
      setPixel(x, y, color);
    }));

    this.context.putImageData(imageData, 0, 0);
  }
}

export default App;