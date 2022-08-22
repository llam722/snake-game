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
    //if direction goes downward, we are going to add 50px from topPosition
    if (direction === "down") {
      head.style.top = `${(topPosition += 50)}px`;
    }

    if (direction === "up") {
      head.style.top = `${(topPosition -= 50)}px`;
    }

    // CHECK IF THE HEAD IS OUTSIDE OF THE BOARDER

    if (0 > topPosition || topPosition > 650) {
      //end game?
      removeChild(head);
    }
    if (leftPosition < 0 || leftPosition > 650) {
      removeChild(head);
    }

    // CHECK IF THIS POSITION IS WHERE THE APPLE IS

    if (leftPosition == apple.style.left && topPosition == apple.style.top) {
      removeClass(Apple);
    }

    //if leftPosition and topPosition of head === leftPosition and topPosition of Apple
    //delete Apple
    //EXTRA EXTRA add Body
    //create new Apple

    setTimeout(this.move.bind(this), this.SPEED);
  }
}
