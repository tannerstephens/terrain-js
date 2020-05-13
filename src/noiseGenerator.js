import * as SimplexNoise from 'simplex-noise';


class NoiseGenerator {
  constructor(seed=null) {
    this.simplex = new SimplexNoise(seed || Math.random());
  }

  seed(seed=null) {
    this.simplex = new SimplexNoise(seed || Math.random());
  }

  generate(left, top, width, height, freq, amp=1) {
    const repeat = (fn, n) => Array(n).fill(null).map(fn);

    return repeat((_, x) => repeat((__, y) => this.simplex.noise2D((left+x)/freq, (top+y)/freq)*amp, height), width);
  }
}

export default NoiseGenerator;