import * as PIXI from 'pixi.js';

class App {
  constructor() {
    this.app = new PIXI.Application();

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

  }

  gameLoop(delta) {

  }
}

export default App;
