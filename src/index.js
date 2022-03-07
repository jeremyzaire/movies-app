import _ from 'lodash';
import "./style.css";
import Dices from "./dices.png"

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello");
  
    // Add the image to our existing div.
    const dices = new Image();
    dices.src = Dices;

    element.appendChild(dices);


    return element;
  }
  
  document.body.appendChild(component());