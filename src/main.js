document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  body.style.marginTop = '50px';
  // const gameTitle = document.querySelector("gameTitle");
  // gameTitle.innerHTML = 'Louis and Matt\'s Snake game!'

  const board = document.querySelector("#board");

  //Game Title Info!

  const gameTitle = document.createElement("div");
  gameTitle.setAttribute("id","gameTitle");
  body.appendChild(gameTitle);
  gameTitle.innerHTML = 'Louis and Matt\'s Snake game!'
  gameTitle.style.textAlign = 'center';
  gameTitle.style.fontSize = '35px';
  gameTitle.style.color = '#5F34C4';
  gameTitle.style.position = 'absolute'
  gameTitle.style.marginTop = '-755px';
  gameTitle.style.marginLeft = '65px';
  gameTitle.style.fontWeight = '700';
  gameTitle.style.fontFamily = 'Courier New';

  const head = new Head(board);
  new Apple(board);

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
      if (e.code === "ArrowLeft") {
        if (head.currentDirection === 'right') return;
          console.log("pressed left");
          head.currentDirection = "left";
      }
      if (e.code === "ArrowRight") {
        if (head.currentDirection === 'left') return;
          console.log("pressed right");
          head.currentDirection = "right";
      }
      if (e.code === "ArrowUp") {
        if (head.currentDirection === 'down') return;
        console.log("pressed up");
        head.currentDirection = "up";
      }
      if (e.code === "ArrowDown") {
        if (head.currentDirection === 'up') return;
        console.log("pressed down");
        head.currentDirection = "down";
      }
  });
});



//MATT i got it
// i think OR...
//if head.length >= 1 {wrap around all the e.codes}
//then if there is a length then nothing will happen.

//because value is greater than 1 so snake length > 1 
//so it'll just do nothing if it doesn't hit the conditional

//100%, that sounds great. I just can't figure out how to tell it to not go backwards on itself
//if it's already moving in the direction, but doing the length as a catch-all is great

//I think that's just a value check. except from tail.previous you're jsut going to head.next