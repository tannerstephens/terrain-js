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
      console.log(this.seed);
      const newImageData = await render(imageData, this.seed, this.octaves);
      this.context.putImageData(newImageData, 0, 0);
      await Thread.terminate(render);
    };

    this.seed = Math.random();
    this.octaves = 3;

    this.controlPanel = new ControlPanel([
      {
        tag: 'div',
        attrs: {
          class: 'field is-grouped is-fullwidth',
        },
        children: [
          {
            tag: 'p',
            attrs: {
              class: 'control'
            },
            children: [{
              tag: 'button',
              text: 'New Seed',
              attrs: {
                class: 'button is-danger is-outlined'
              },
              listeners: {
                click: (element) => async () => {
                  if(element.disabled == false) {
                    element.disabled = true;
                    element.classList.add('is-loading');
                    this.seed = Math.random();
                    await render();
                    element.disabled = false;
                    element.classList.remove('is-loading');
                  }
                },
              }
            }],
          },
          {
            tag: 'p',
            attrs: {
              class: 'control'
            },
            children: [{
              tag: 'button',
              text: 'Render',
              attrs: {
                class: 'button is-warning is-outlined'
              },
              listeners: {
                click: (element) => async () => {
                  if(element.disabled == false) {
                    element.disabled = true;
                    element.classList.add('is-loading');
                    await render();
                    element.disabled = false;
                    element.classList.remove('is-loading');
                  }
                },
              }
            }],
          },
          {
            tag: 'p',
            attrs: {
              class: 'control is-fullwidth'
            },
            children: [{
              tag: 'a',
              text: 'Download Map',
              attrs: {
                class: 'button is-success is-fullwidth',
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
      },
      {
        tag: 'div',
        attrs: {
          class: 'field'
        },
        children: [
          {
            tag: 'label',
            text: 'Octaves',
            attrs: {
              class: 'label has-text-light'
            }
          },
          {
            tag: 'div',
            attrs: {
              class: 'control'
            },
            children: [{
              tag: 'input',
              attrs: {
                class: 'input',
                type: 'text',
                value: 3,
              },
              listeners: {
                change: (element) => () => {
                  this.octaves = element.value;
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
