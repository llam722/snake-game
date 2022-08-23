class Body {
  constructor(el) {
    this.node = document.createElement("div");
    this.node.setAttribute("id", "body");
    head.appendChild(this.node);

    this.currentDirection = this.head.bind(currentDirection)
    this.SPEED = 250;


    const follow = document.getElementById('#head')
    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    const body = this.node;
    const direction = this.head.bind(currentDirection);

    let topPosition = Number(body.style.top.replace("px", ""));
    let leftPosition = Number(body.style.left.replace("px", ""));

    if (direction === "right") {
      this.style.left = `${(leftPosition += 50)}px`;
    }

    if (direction === "left") {
      this.style.left = `${(leftPosition -= 50)}px`;
    }
    //if direction goes downward, we are going to add 50px from topPosition
    if (direction === "down") {
      this.style.top = `${(topPosition += 50)}px`;
    }

    if (direction === "up") {
      this.style.top = `${(topPosition -= 50)}px`;
    }
  }
}