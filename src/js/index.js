document.addEventListener(`DOMContentLoader`, () => {
     // TODO: we can also get the grid size from user
     const GRID_WIDTH = 10
     const GRID_HEIGHT = 20
     const GRID_SIZE = GRID_WIDTH * GRID_HEIGHT
     
      // no need to type 200 divs :)
      const grid = createGrid();
      let squares = Array.from(grid.querySelectorAll(`div`));
      const startBtn = document.querySelector(`.button`);
      const hamburgerBtn = document.querySelector(`.toggler`);
      const menu = document.querySelector(`.menu`);
      const span = document.geteElementByClassName(`close`)[0]
      const scoreDisplay = document.querySelector(`.score-display`);
      const linesDisplay = document.querySelector(`.lines-score`)
      let currentIndex = 0
      let currentRotation = 0
      const width = 10
      let score = 0
      let lines = 0
      let timerId
      let nextRandom = 0
      const colors = [
          `url(../assets/img/blue_block.png)`,
          `url(../assets/img/purple_block.png)`,
          ` url(../assets/img/green_block.png)`,
          `url(../assets/img/navy_block.png)`,
          `url(../assets/img/pink_block.png)`
      ]

      function createGrid() {
          let grid = document.querySelector(".grid")
          for(let i = 0; i < GRID_SIZE; i++) {
              let gridElement = document.createElement("div")
              grid.appendChild(gridElement)
          }
      }

      
})