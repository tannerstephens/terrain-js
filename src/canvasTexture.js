import { Texture } from 'pixi.js';

class CanvasTexture extends Texture {
  constructor(width, height) {
    const canvas = document.createElement('canvas');
    const base = Texture.from(canvas);
    super(base);
    this.base = base;
    this.canvas = canvas;    
    this.canvas.width = width;
    this.canvas.height = height;

    this.context = this.canvas.getContext('2d');
    this.imageData = this.context.getImageData(0,0,width,height);
  }

  setPixel(x, y, color) {
    const index = (y*this.imageData.width + x)*4;

    const r = (color & 0xff0000) >> 16;
    const g = (color & 0x00ff00) >> 8;
    const b = (color & 0x0000ff);

    this.imageData.data[index] = r;
    this.imageData.data[index+1] = g;
    this.imageData.data[index+2] = b;
    this.imageData.data[index+3] = 255;
  }

  update() {
    this.context.putImageData(this.imageData, 0, 0);
    this.base.update();
    super.update();
  }
}

export default CanvasTexture;
