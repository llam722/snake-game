document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  body.style.marginTop = '50px';

  const board = document.querySelector("#board");

  //------- GAME TITLE INFO --------//
  const gameTitle = document.createElement("div");
  gameTitle.setAttribute("id","gameTitle");
  body.appendChild(gameTitle);
  gameTitle.innerHTML = 'Snake Game: FPS Mod - Head Only'
  gameTitle.style.textAlign = 'center';
  gameTitle.style.fontSize = '35px';
  gameTitle.style.color = 'Green';
  gameTitle.style.position = 'absolute'
  gameTitle.style.marginTop = '-755px';
  gameTitle.style.marginLeft = '25px';
  gameTitle.style.fontWeight = '700';
  gameTitle.style.fontFamily = 'Courier New';

  const head = new Head(board);
  new Apple(board);


  // ------- SCORE BOARD -------- //
  const score = document.createElement('div');
  score.setAttribute("id","score");
  body.appendChild(score);
  score.style.fontSize = '25px';
  score.style.fontWeight = '500';

  const scoreText = document.createElement('div');
  scoreText.setAttribute("id", "scoreText");
  scoreText.innerHTML = 'Score: ';
  score.appendChild(scoreText);

  const currScore = document.createElement('div');
  currScore.setAttribute("id","currScore");
  currScore.innerHTML = 0;
  score.appendChild(currScore);


  body.addEventListener("keydown", (e) => {
      if (e.code === 'KeyA') {
        if (head.currentDirection === 'right') return;
          console.log("pressed left");
          head.currentDirection = "left";
      }
      if (e.code === 'KeyD') {
        if (head.currentDirection === 'left') return;
          console.log("pressed right");
          head.currentDirection = "right";
      }
      if (e.code === 'KeyW') {
        if (head.currentDirection === 'down') return;
        console.log("pressed up");
        head.currentDirection = "up";
      }
      if (e.code === 'KeyS') {
        if (head.currentDirection === 'up') return;
        console.log("pressed down");
        head.currentDirection = "down";
      }
  });
});