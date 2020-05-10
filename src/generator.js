import * as SimplexNoise from 'simplex-noise';

class Generator {
  constructor(seed=null) {
    this.simplex = new SimplexNoise(seed || Math.random());
  }

  getValue(x, y) {
    return (this.simplex.noise2D(x/128,y/128) + 1)/2;
  }
}

export default Generator;
