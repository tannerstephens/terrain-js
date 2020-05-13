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

    const render = async () => {
      const render = await spawn(new Worker('./worker'));
      const imageData = this.context.createImageData(innerWidth, innerHeight);
      const newImageData = await render(imageData, this.seed);
      this.context.putImageData(newImageData, 0, 0);
      await Thread.terminate(render);
    };

    const bulmaButton = (text, color, click) => ({
        tag: 'p',
        attrs: {
          class: 'control'
        },
        children: [{
          tag: 'button',
          text: text,
          attrs: {
            class: `button is-${color}`
          },
          listeners: {
            click: click
          }
        }]
      });


    this.controlPanel = new ControlPanel([
      {
        tag: 'div',
        attrs: {
          class: 'field is-grouped',
        },
        children: [
          bulmaButton('New Seed', 'danger', (element) => async () => {
            if(element.disabled == false) {
              element.disabled = true;
              this.seed = Math.random();
              await render();
              element.disabled = false;
            }
          }),
          {
            tag: 'p',
            attrs: {
              class: 'control'
            },
            children: [{
              tag: 'a',
              text: 'Download Map',
              attrs: {
                class: 'button is-success',
                download: 'map.png',
                href: ''
              },
              listeners: {
                click: (e) => () => {
                  const image = this.canvas.toDataURL('image/png');
                  e.href = image;
                }
              }
            }]
          }
        ]
      }
    ]);


    render();
  }
}

export default App;
