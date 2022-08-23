class Head {
  constructor(el) {
    this.node = document.createElement("div");
    this.node.setAttribute("id", "head");
    el.appendChild(this.node);

    this.currentDirection = "right";
    this.SPEED = 250;

    this.node.style.top = "350px";
    this.node.style.left = "350px";

    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace("px", ""));
    let leftPosition = Number(head.style.left.replace("px", ""));

    if (direction === "right") {
      head.style.left = `${(leftPosition += 50)}px`;
    }
    if (direction === "left") {
      head.style.left = `${(leftPosition -= 50)}px`;
    }
    if (direction === "down") {
      head.style.top = `${(topPosition += 50)}px`;
    }
    if (direction === "up") {
      head.style.top = `${(topPosition -= 50)}px`;
    }

    // -----------CHECK IF THIS POSITION IS WHERE THE APPLE IS-------------//
    if (this.node.style.left === apple.style.left && this.node.style.top === apple.style.top) {
      apple.remove()
      const board = document.querySelector('#board');
      new Apple(board);
      increment();
      //add a body node to the end of the snake
      // new Body(board);
    }

    // --------CHECK CURRENT SCORE TO CHANGE BACKGROUND/SPEED-------- //
    const currScore = document.querySelector('#currScore');
    if (currScore.innerHTML >= 0){
      const board = document.querySelector('#board');
      // if (currScore.innerHTML >= 5 && currScore.innerHTML < 10) {
      //   board.style.backgroundColor = 'rgba(240, 235, 165, 0.261)';
      //   this.SPEED = 225;
      // }
      // if (currScore.innerHTML >= 10 && currScore.innerHTML < 15) {
      //   board.style.backgroundColor = 'rgba(33, 37, 41, 0.075)';
      //   this.SPEED = 190;
      // }
      // if (currScore.innerHTML >= 15 && currScore.innerHTML < 20) {
      //   board.style.backgroundColor = 'rgba(33, 37, 41, 0.075)';
      //   this.SPEED = 160;
      // }
      if (currScore.innerHTML >= 1 && currScore.innerHTML < 2) {
        board.style.backgroundColor = 'rgba(240, 235, 165, 0.261)';
        this.SPEED = 125;
      }
      if (currScore.innerHTML >= 2 && currScore.innerHTML < 25) {
        board.style.backgroundColor = 'rgba(240, 235, 165, 0.73)';
        this.SPEED = 125;
      }

    }

    // --------CHECK IF THE HEAD IS OUTSIDE OF THE BOARDER------------//
    const board = document.querySelector('#board');
    if (0 > topPosition || topPosition > 650 || 0 > leftPosition || leftPosition > 650) {
      board.style.border = '8px solid red';
      head.remove();
    }
    
    // ------SEND OUT HIGHSCORE NOTIFICATION--------------//
    if (-50 > topPosition || topPosition > 700 || -50 > leftPosition || leftPosition > 700) {
      const endScore = document.querySelector('#currScore');
      if (endScore.innerHTML == 0) {
        alert('You scored ' + endScore.innerHTML + ' points. Wow...well try again I guess?');
      }
      if (endScore.innerHTML > 0 && endScore.innerHTML < 5) {
        alert('You scored ' + endScore.innerHTML + ' points. Nice!');
      }
      if (endScore.innerHTML >= 5 && endScore.innerHTML < 10) {
        alert('You scored ' + endScore.innerHTML + ' points. Great!');
      }
      if (endScore.innerHTML >= 10 && endScore.innerHTML < 15) {
        alert('You scored ' + endScore.innerHTML + ' points. Terrific!');
      }
      if (endScore.innerHTML >= 15 && endScore.innerHTML < 20) {
        alert('You scored ' + endScore.innerHTML + ' points. Amazing!');
      }
      if (endScore.innerHTML >= 20) {
        alert('You scored ' + endScore.innerHTML + ' points. Okay, okay, step away and go outside!');
      }
      return;
    }  
    setTimeout(this.move.bind(this), this.SPEED);
  }
}

function increment(){
  let incScore = document.getElementById('currScore')
  let number = incScore.innerHTML;
  number++
  incScore.innerHTML = number
 }