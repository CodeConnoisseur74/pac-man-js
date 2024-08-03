function generateBoundaries(currentLevelIndex, maps) {
  const boundaries = [];
  const MAP_ROWS = maps[currentLevelIndex].length;
  const MAP_COLUMNS = maps[currentLevelIndex][0].length;
  canvas.width = Boundary.width * MAP_COLUMNS;
  canvas.height = Boundary.height * MAP_ROWS;

  maps[currentLevelIndex].forEach((row, i) => {
    row.forEach((symbol, j) => {
      switch (symbol) {
        case '-':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage('./assets/pipeHorizontal.png'),
            }),
          );
          break;
        case '|':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage('./assets/pipeVertical.png'),
            }),
          );
          break;
        case '1':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage('./assets/pipeCorner1.png'),
            }),
          );
          break;
        case '2':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage('./assets/pipeCorner2.png'),
            }),
          );
          break;
        case '3':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage('./assets/pipeCorner3.png'),
            }),
          );
          break;
        case '4':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage('./assets/pipeCorner4.png'),
            }),
          );
          break;
        case 'b':
          boundaries.push(
            new Boundary({
              position: {
                x: Boundary.width * j,
                y: Boundary.height * i,
              },
              image: createImage('./assets/block.png'),
            }),
          );
          break;
        case '[':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage('./assets/capLeft.png'),
            }),
          );
          break;
        case ']':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage('./assets/capRight.png'),
            }),
          );
          break;
        case '_':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage('./assets/capBottom.png'),
            }),
          );
          break;
        case '^':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage('./assets/capTop.png'),
            }),
          );
          break;
        case '+':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage('./assets/pipeCross.png'),
            }),
          );
          break;
        case '5':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              color: 'blue',
              image: createImage('./assets/pipeConnectorTop.png'),
            }),
          );
          break;
        case '6':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              color: 'blue',
              image: createImage('./assets/pipeConnectorRight.png'),
            }),
          );
          break;
        case '7':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              color: 'blue',
              image: createImage('./assets/pipeConnectorBottom.png'),
            }),
          );
          break;
        case '8':
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width,
                y: i * Boundary.height,
              },
              image: createImage('./assets/pipeConnectorLeft.png'),
            }),
          );
          break;
        case '.':
          pellets.push(
            new Pellet({
              position: {
                x: j * Boundary.width + Boundary.width / 2,
                y: i * Boundary.height + Boundary.height / 2,
              },
            }),
          );
          break;

        case 'p':
          powerUps.push(
            new PowerUp({
              position: {
                x: j * Boundary.width + Boundary.width / 2,
                y: i * Boundary.height + Boundary.height / 2,
              },
            }),
          );
          break;

        case 'I':
          items.push(
            new Item({
              position: {
                x: j * Boundary.width + Boundary.width / 2,
                y: i * Boundary.height + Boundary.height / 2,
              },
              assetsSrc: './assets/sprites/cherry.png',
            }),
          );
          break;
      }
    });
  });
  return boundaries;
}
