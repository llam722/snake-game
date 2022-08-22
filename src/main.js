document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const board = document.querySelector("#board");

  const head = new Head(board);
  const apple = new Apple(board);

  body.addEventListener("keydown", (e) => {
    // if (head.length > 1){
      // make sure the snake does not turn on itself 
    // }
    // else if {
      if (e.code === "ArrowLeft") {
          console.log("pressed left");
          head.currentDirection = "left";
      }
      if (e.code === "ArrowRight") {
          console.log("pressed right");
          head.currentDirection = "right";
      }
      if (e.code === "ArrowUp") {
        console.log("pressed up");
        head.currentDirection = "up";
      }
      if (e.code === "ArrowDown") {
        console.log("pressed down");
        head.currentDirection = "down";
      }
    // }
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