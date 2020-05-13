import NoiseGenerator from './noiseGenerator';
import constants from './constants';
import { expose } from 'threads/worker';


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

  const noiseGenerator = new NoiseGenerator(seed);

  const generateOctave = (i) => {
    const p = 1024 / Math.pow(4, i);
    const a = 1 / Math.pow(4, i);

    return noiseGenerator.generate(0, 0, imageData.width, imageData.height, p, a);
  }

  let noise = null;

  for(let i = 0; i < octaves; i++) {
    let octave = generateOctave(i);

    if(noise) {
      octave.forEach((column, x) => column.forEach((value, y) => {
        noise[x][y] += value;
      }));
    } else {
      noise = octave;
    }
  }

  noise.forEach((column, x) => column.forEach((value, y) => {
    const color = value < 0.1 ? constants.waterColor : constants.terrainColors[Math.min(Math.floor(value*constants.terrainColors.length), constants.terrainColors.length-1)]
    setPixel(x, y, color);
  }));

  return imageData;
});