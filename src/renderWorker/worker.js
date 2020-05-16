import { expose } from 'threads/worker';

import constants from './constants';
import heightMapGenerator from './heightMapGenerator';


expose(function(imageData, seed, octaves) {
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

  const noise = heightMapGenerator(0, 0, imageData.width, imageData.height, seed, octaves);

  noise.forEach((column, x) => column.forEach((value, y) => {
    const color = value < 0.1 ? constants.waterColor : constants.terrainColors[Math.min(Math.floor(value*constants.terrainColors.length), constants.terrainColors.length-1)]
    setPixel(x, y, color);
  }));

  return imageData;
});