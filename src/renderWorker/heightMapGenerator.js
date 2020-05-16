import * as SimplexNoise from 'simplex-noise';


export default (left, top, width, height, seed, octaves) => {
  const simplex = new SimplexNoise(seed);

  const heightMap = Array(width).fill().map((_, x) => Array(height).fill(0).map((value, y) => {
    for(let octave=0; octave<octaves; octave++) {
      let period = 1024/(4**octave);
      let amplitude = 1/(4**octave);

      value += simplex.noise2D((left+x)/period, (top+y)/period)*amplitude;
    }

    return value;
  }));

  return heightMap;
}