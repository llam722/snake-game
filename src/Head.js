class Head {
  constructor(el) {
    this.node = document.createElement("div");
    this.node.setAttribute("id", "head");
    el.appendChild(this.node);

    this.currentDirection = "right";
    this.SPEED = 250;

    this.node.style.top = "350px";
    this.node.style.left = "350px";
                     // ------- BEGIN OF APPROACH LECTURE -------- //
    // this.size = 0;
    // this.bodies = [];
    // this.headPositions = [];

                      // ------- END OF APPROACH LECTURE -------- //

    setTimeout(this.move.bind(this), this.SPEED);
  }
  
  // ------- MOVEMENT AND INTERACTIONS ------ //
  move() {
    // const moveTimeoutID = setTimeout(this.move.bind(this), this.SPEED);

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


                            // ------- BEGIN OF APPROACH LECTURE -------- //
      // const body = new Body(board);
      // this.bodies.push(body);
      // this.size += 1;
      // console.log('New Body!');
      // console.log(this.bodies);
      // console.log(this.size);
    }

    // this.headPositions.unshift({top: topPosition, left: leftPosition});
    // if (this.headPositions.length > this.size + 1) {
    //   this.headPositions.pop();
    // }

    // if (this.size > 0) this.moveBodies(moveTimeoutID);

                          // ------- END OF APPROACH LECTURE -------- //




    // --------CHECK CURRENT SCORE TO CHANGE BACKGROUND/SPEED-------- //
    const currScore = document.querySelector('#currScore');
    if (currScore.innerHTML >= 0){
      const board = document.querySelector('#board');
      if (currScore.innerHTML >= 3 && currScore.innerHTML < 6) {
        board.style.backgroundColor = 'rgba(0, 128, 0, 0.2)';
        this.SPEED = 210;
      }
      if (currScore.innerHTML >= 6 && currScore.innerHTML < 9) {
        board.style.backgroundColor = 'rgba(0, 128, 0, 0.4)';
        this.SPEED = 180;
      }
      if (currScore.innerHTML >= 9 && currScore.innerHTML < 12) {
        board.style.backgroundColor = 'rgba(0, 128, 0, 0.55)';
        this.SPEED = 145;
      }
      if (currScore.innerHTML >= 12 && currScore.innerHTML < 15) {
        board.style.backgroundColor = 'rgba(0, 128, 0, 0.7)';
        this.SPEED = 110;
      }
      if (currScore.innerHTML >= 15 && currScore.innerHTML < 18) {
        board.style.backgroundColor = 'rgba(0, 128, 0, 0.87)';
        this.SPEED = 80;
      }
      if (currScore.innerHTML >= 18) {
        board.style.backgroundColor = 'rgba(0, 128, 0, 0.97)';
        this.SPEED = 60;
      }
    }

    // --------CHECK IF THE HEAD IS OUTSIDE OF THE BOARDER------------//
    const board = document.querySelector('#board');
    if (0 > topPosition || topPosition > 650 || 0 > leftPosition || leftPosition > 650) {
      board.style.border = '8px solid red';
      head.remove();
    }




                            // ------- BEGIN OF APPROACH LECTURE -------- //



    // ------- MOVE BODY OF SNAKE ------- //
    // moveBodies(TimeoutID) {
    //   const head = this.node;

    //   for (let i = 0; i < this.bodies.length; i += 1) {
    //     const body = this.bodies[i];

    //     body.node.style.top = this.headPositions[i + 1].top;
    //     body.node.style.left = this.headPositions[i + 1].left;

        // if (body.node.style.top === head.style.top && body.node.style.left === head.style.left && i!==0 && i !== 1 && i !== 2) {
        //       // ----- ENDSCORE NOTIFICATION ----- //
        //   const endScore = document.querySelector('#currScore');

        //   const endAlert = document.createElement('div');
        //   endAlert.setAttribute("id", "endAlert:");
        //   board.appendChild(endAlert);
        //   endAlert.style.fontSize = '20px';
        //   endAlert.style.textAlign = 'center';
        //   endAlert.style.color = 'red';
        //   endAlert.style.fontFamily = 'Courier New';
        //   endAlert.style.alignItems = 'center';
        //   endAlert.style.justifyContent = 'center';
        //   endAlert.style.marginTop = '300px';
        //   endAlert.style.fontWeight = '700';


        //   // ------CONDITIONAL FOR NOTIFICATIONS--------------//
        //   if (endScore.innerHTML == 0) {
        //     apple.remove();
        //     endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>Really?? Hmmm...I guess you can try again?';
        //   }
        //   if (endScore.innerHTML > 0 && endScore.innerHTML < 3) {
        //     apple.remove();
        //     endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>That\'s Better!';
        //   }
        //   if (endScore.innerHTML >= 3 && endScore.innerHTML < 6) {
        //     apple.remove();
        //     endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>Your\'re getting the hang of this!';
        //   }
        //   if (endScore.innerHTML >= 6 && endScore.innerHTML < 9) {
        //     apple.remove();
        //     endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>Fantastic!';
        //   }
        //   if (endScore.innerHTML >= 9 && endScore.innerHTML < 12) {
        //     apple.remove();
        //     endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>Wow! Impressive!!';
        //   }
        //   if (endScore.innerHTML >= 12 && endScore.innerHTML < 15) {
        //     apple.remove();
        //     endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>No one was meant to make it this far....';
        //   }
        //   if (endScore.innerHTML >= 15 && endScore.innerHTML < 18) {
        //     apple.remove();
        //     endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>Time to take a break...';
        //   }
        //   if (endScore.innerHTML >= 18) {
        //     apple.remove();
        //     endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>You need to touch grass.';
        //   }  
        // return;
        // }
    //   }
    // }

                                 // ------- END OF APPROACH LECTURE -------- //




    
    // ------END OF GAME EXECUTION-----------//
    if (-50 > topPosition || topPosition > 700 || -50 > leftPosition || leftPosition > 700) {
      // ----- ENDSCORE NOTIFICATION ----- //
      const endScore = document.querySelector('#currScore');

      const endAlert = document.createElement('div');
      endAlert.setAttribute("id", "endAlert:");
      board.appendChild(endAlert);
      endAlert.style.fontSize = '20px';
      endAlert.style.textAlign = 'center';
      endAlert.style.color = 'red';
      endAlert.style.fontFamily = 'Courier New';
      endAlert.style.alignItems = 'center';
      endAlert.style.justifyContent = 'center';
      endAlert.style.marginTop = '300px';
      endAlert.style.fontWeight = '700';


      // ------CONDITIONAL FOR NOTIFICATIONS--------------//
      if (endScore.innerHTML == 0) {
        apple.remove();
        endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>Really?? Hmmm...I guess you can try again?';
      }
      if (endScore.innerHTML > 0 && endScore.innerHTML < 3) {
        apple.remove();
        endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>That\'s Better!';
      }
      if (endScore.innerHTML >= 3 && endScore.innerHTML < 6) {
        apple.remove();
        endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>Your\'re getting the hang of this!';
      }
      if (endScore.innerHTML >= 6 && endScore.innerHTML < 9) {
        apple.remove();
        endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>Fantastic!';
      }
      if (endScore.innerHTML >= 9 && endScore.innerHTML < 12) {
        apple.remove();
        endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>Wow! Impressive!!';
      }
      if (endScore.innerHTML >= 12 && endScore.innerHTML < 15) {
        apple.remove();
        endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>No one was meant to make it this far....';
      }
      if (endScore.innerHTML >= 15 && endScore.innerHTML < 18) {
        apple.remove();
        endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>Time to take a break...';
      }
      if (endScore.innerHTML >= 18) {
        apple.remove();
        endAlert.innerHTML = 'You scored ' + endScore.innerHTML + ' points.<br>You need to touch grass.';
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