addEventListener('keydown', ({ key }) => {
  switch (key) {
    case 'ArrowUp':
      keys.ArrowUp.pressed = true;
      lastKey = 'ArrowUp';
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = true;
      lastKey = 'ArrowLeft';
      break;
    case 'ArrowDown':
      keys.ArrowDown.pressed = true;
      lastKey = 'ArrowDown';
      break;
    case 'ArrowRight':
      keys.ArrowRight.pressed = true;
      lastKey = 'ArrowRight';
      break;
  }
});

addEventListener('keyup', ({ key }) => {
  switch (key) {
    case 'ArrowUp':
      keys.ArrowUp.pressed = false;
      break;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false;
      break;
    case 'ArrowDown':
      keys.ArrowDown.pressed = false;
      break;
    case 'ArrowRight':
      keys.ArrowRight.pressed = false;
      break;
  }
});