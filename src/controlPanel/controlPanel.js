import { jsPanel } from 'jspanel4';
import defaultConfig from './defaultConfig';
import './controlPanel.css'

const createElement = (elementConfig) => {
  const element = document.createElement(elementConfig.tag);
  element.id = Math.random()*1000000;

  if(elementConfig.text) {
    element.innerText = elementConfig.text;
  }

  if(elementConfig.attrs) {
    Object.keys(elementConfig.attrs).forEach((key) => {
      element.setAttribute(key, elementConfig.attrs[key]);
    })
  }

  if(elementConfig.listeners) {
    Object.keys(elementConfig.listeners).forEach((key) => {
      element.addEventListener(key, elementConfig.listeners[key](element));
    });
  }

  if(elementConfig.children) {
    const children = elementConfig.children.map((childConfig) => createElement(childConfig));

    children.forEach((child) => element.appendChild(child));
  }

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