import { jsPanel } from 'jspanel4';
import defaultConfig from './defaultConfig';
import './controlPanel.css'

const createElement = ({
  tag,
  text,
  class: cls,
  attrs,
  listeners,
  children
}) => {
  const element = document.createElement(tag);
  element.id = Math.random()*1000000;

  children = [].concat(children || []);

  if(text)
    element.innerText = text;

  if(cls)
    element.setAttribute('class', cls);

  if(attrs)
    Object.keys(attrs).forEach((key) => {
      element.setAttribute(key, attrs[key]);
    });

  if(listeners)
    Object.keys(listeners).forEach((key) => {
      element.addEventListener(key, listeners[key](element));
    });

  if(children.length)
    children.forEach((childConfig) => element.appendChild(createElement(childConfig)));

  return element;
}

class ControlPanel {
  constructor(elementsConfig=[], extraConfig = {}) {
    const elements = elementsConfig.map((elementConfig, i) => createElement(elementConfig, i));

    const parentDiv = document.createElement('div');
    parentDiv.style.margin = '2%';

    elements.forEach((element) => {
      parentDiv.appendChild(element);
    })

    const config = {...defaultConfig, ...extraConfig, content: parentDiv}
    this.controls = jsPanel.create(config);
  }
}

export default ControlPanel;