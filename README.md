# proTetris
 Project: Create a game Tetris with Javascript. 

 ### Watch Tutorial With Ania Kubow
 [Youtube Channel](https://www.youtube.com/watch?v=GWPGz9hrVMk&t=13s)

 # Tetris
 - I have kept the styling at a bare miniumum for you to go wild and make it your own. Please tag me as I would LOVE to see your game!!!
 - Tetris is a tile-matching puzzle game from the 80’s. Try to get your personal high score by moving each of the 5 randomly selected Tetromino shapes sideways and/or rotating by quarter-turns, so that they form a solid horizontal line without gaps. When such a line is formed, it disappears and any blocks above it fall down to fill the space. For each line you will receive 10 points.

# Brief

- The game should stop if a Tetrimino fills the highest row of the game board.
- The player should be able to rotate each Tetrimino about its own axis.
- If a line is completed it should be removed and the pieces above should take its place.
- Render a grid-based game in the browser.
- Include separate HTML / CSS / JavaScript files.
- Use Javascript for DOM manipulation.
- Deploy your game online, using Github Pages, where the rest of the world can access it.
- Use semantic markup for HTML and CSS (adhere to best practices).

# Technologies Used

- HTML
- CSS3
- Javascript
- Git
- GitHub
- Adobe Color
- Adobe Fonts
- Google Fonts

#### Javascript

```javascript

//freeze the shape
  function freeze() {
    // if block has settled
    if(current.some(index => squares[currentPosition + index + width].classList.contains('block3') || squares[currentPosition + index + width].classList.contains('block2'))) {
      // make it block2
      current.forEach(index => squares[index + currentPosition].classList.add('block2'))
      // start a new tetromino falling
      random = nextRandom
      nextRandom = Math.floor(Math.random() * theTetrominoes.length)
      current = theTetrominoes[random][currentRotation]
      currentPosition = 4
      draw()
      displayShape()
      addScore()
      gameOver()
    }
  }
  freeze()
