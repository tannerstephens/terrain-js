const buildControlPanelConfig = (context) => ([
  {
    tag: 'div',
    attrs: {
      class: 'field is-grouped is-fullwidth',
    },
    children: [
      {
        tag: 'p',
        class: 'control',
        children: {
          tag: 'button',
          text: 'New Seed',
          class: 'button is-danger is-outlined',
          listeners: {
            click: (element) => async () => {
              if(element.disabled == false) {
                element.disabled = true;
                element.classList.add('is-loading');
                context.seed = Math.random();
                await context.render();
                element.disabled = false;
                element.classList.remove('is-loading');
              }
            },
          }
        },
      },
      {
        tag: 'p',
        class: 'control',
        children: {
          tag: 'button',
          text: 'Render',
          class: 'button is-warning is-outlined',
          listeners: {
            click: (element) => async () => {
              if(element.disabled == false) {
                element.disabled = true;
                element.classList.add('is-loading');
                await context.render();
                element.disabled = false;
                element.classList.remove('is-loading');
              }
            },
          }
        },
      },
      {
        tag: 'p',
        class: 'control is-fullwidth',
        children: {
          tag: 'a',
          text: 'Download Map',
          attrs: {
            class: 'button is-success is-fullwidth',
            download: 'map.png',
            href: ''
          },
          listeners: {
            click: (e) => () => {
              const image = context.canvas.toDataURL('image/png');
              e.href = image;
            }
          }
        }
      }
    ]
  },
  {
    tag: 'div',
    class: 'field',
    children: [
      {
        tag: 'label',
        text: 'Octaves',
        class: 'label has-text-light',
      },
      {
        tag: 'div',
        class: 'control',
        children: {
          tag: 'input',
          attrs: {
            class: 'input',
            type: 'text',
            value: 3,
          },
          listeners: {
            change: (element) => () => {
              context.octaves = element.value;
            }
          }
        }
      }
    ]
  }
]);

export default buildControlPanelConfig;