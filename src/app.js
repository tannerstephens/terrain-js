import buildControlPanelConfig from './buildControlPanelConfig';
import ControlPanel from './controlPanel/controlPanel';
import { spawn, Thread, Worker } from "threads"


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

    this.seed = Math.random();
    this.octaves = 3;

    const config = buildControlPanelConfig(this);
    this.controlPanel = new ControlPanel(config);


    this.render();
  }

  async render() {
    const render = await spawn(new Worker('./renderWorker/worker'));
    const imageData = this.context.createImageData(innerWidth, innerHeight);
    console.log(this.seed);
    const newImageData = await render(imageData, this.seed, this.octaves);
    this.context.putImageData(newImageData, 0, 0);
    await Thread.terminate(render);
  }
}

export default App;