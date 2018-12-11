// Write your JS herea
// const tether = require('tether');
// import Tether from 'tether';
import Drop from 'tether-drop';

const handleSubmenus = function() {
  console.log('ye');
  const newDrop = new Drop({
    target: document.querySelector('.has-submenu'),
    content: 'hola coño',
    position: 'bottom left',
    openOn: 'hover'
  });
  newDrop.caca = true;
};

handleSubmenus();
