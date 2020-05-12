import * as PIXI from 'pixi.js';
import * as SimplexNoise from 'simplex-noise';
import CanvasTexture from './canvasTexture';
import controlsHTML from './controls.html';

const terrainColors = [
  0xe5d9c2,
  0xb5ba61,
  0x7c8d4c,
  0x95a170,
  0xced6b6,
  0xfffafa
];
const waterColor = 0xb6d0e3;

class App {
  constructor() {
    this.app = new PIXI.Application({
      backgroundColor: 0x000000,
    });

    this.app.renderer.view.style.position = "absolute";
    this.app.renderer.view.style.display = "block";
    this.app.renderer.view.style.zIndex = -1;
    this.app.renderer.autoResize = true;
    this.app.renderer.resize(window.innerWidth, window.innerHeight);

    this.setup();
  }

  display() {
    document.body.appendChild(this.app.view);
    document.body.style.margin = 0;
  }

  setup() {
    this.texture = new CanvasTexture(innerWidth, innerHeight);
    this.background = PIXI.Sprite.from(this.texture);

    this.controls = null;
    this.noise1frequency = {};
    this.noise1Amplitude = {};

    this.noise2frequency = {};
    this.noise2Amplitude = {};

    this.noise3frequency = {};
    this.noise3Amplitude = {};

    this.background.interactive = true;
    this.background.on('pointertap', () => {
      this.setupControls();
    });

    this.app.stage.addChild(this.background);

    this.seed();
    this.render();
  }

  setupControls() {
    if(this.controls === null || this.controls.closed) {
      this.controls = window.open('', '', 'scrollbars=0,toolbar=0,height=270,width=600');

      this.controls.document.write(controlsHTML);

      this.noise1frequency = this.controls.document.getElementById('noise1freq');
      this.noise1Amplitude = this.controls.document.getElementById('noise1amp');

      this.noise2frequency = this.controls.document.getElementById('noise2freq');
      this.noise2Amplitude = this.controls.document.getElementById('noise2amp');

      this.noise3frequency = this.controls.document.getElementById('noise3freq');
      this.noise3Amplitude = this.controls.document.getElementById('noise3amp');

      const renderButton = this.controls.document.getElementById('render');
      const seedButton = this.controls.document.getElementById('seed');

      renderButton.addEventListener('click', () => {
        this.render();
      });

      seedButton.addEventListener('click', () => {
        this.seed();
        this.render();
      });

      window.addEventListener('beforeunload', () => {
        this.controls.close();
      });
    }
  }

  render() {
    const n1f = this.noise1frequency.value || 1024;
    const n1a = this.noise1Amplitude.value || 1;

    const n2f = this.noise2frequency.value || 256;
    const n2a = this.noise2Amplitude.value || 0.25;

    const n3f = this.noise3frequency.value || 64;
    const n3a = this.noise3Amplitude.value || 0.0625;

    const setNoise = (x, y) => {
      const noise1Value = (this.noise1.noise2D(x/n1f, y/n1f))*n1a;
      const noise2Value = (this.noise1.noise2D(x/n2f, y/n2f))*n2a;
      const noise3Value = (this.noise1.noise2D(x/n3f, y/n3f))*n3a;

      const value = noise1Value + noise2Value + noise3Value;

      const color = value < 0.1 ? waterColor : terrainColors[Math.min(Math.floor(value*terrainColors.length), terrainColors.length-1)];

      this.texture.setPixel(x, y, color);
    }

    for(let y = 0; y < innerHeight; y++) {
      for(let x = 0; x < innerWidth; x++) {
        setNoise(x, y);
      }
    }
    this.texture.update();
  }

  seed() {
    this.noise1 = new SimplexNoise(Math.random());
  }
}

export default App;
