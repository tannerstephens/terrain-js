import NoiseGenerator from './noiseGenerator';
import constants from './constants';
import { expose } from 'threads/worker';

expose(function(imageData, seed) {
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

  const noiseGenerator = new NoiseGenerator(seed);

  const oct1 = noiseGenerator.generate(0, 0, imageData.width, imageData.height, 1024);
  const oct2 = noiseGenerator.generate(0, 0, imageData.width, imageData.height, 256, 0.25);
  const oct3 = noiseGenerator.generate(0, 0, imageData.width, imageData.height, 64, 0.0625);

  oct1.forEach((column, x) => column.forEach((value, y) => {
    const totalValue = value + oct2[x][y] + oct3[x][y];
    const color = totalValue < 0.1 ? constants.waterColor : constants.terrainColors[Math.min(Math.floor(totalValue*constants.terrainColors.length), constants.terrainColors.length-1)]
    setPixel(x, y, color);
  }));

  return imageData;
});