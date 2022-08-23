class Apple {
  constructor(el) {
    this.node = document.createElement("img");
    this.node.setAttribute("id", "apple");
    this.node.setAttribute("src", "src/assets/apple2.png");

    const head = document.querySelector('#head');

    el.appendChild(this.node);

    this.node.style.left = getRandomInt(13) + 'px';
    this.node.style.top = getRandomInt(13) + 'px';
    // ------- REASSIGN APPLE LOCATION IF LOCATED ON SNAKE ------- //
    while (this.node.style.left  === head.left && this.node.style.top === head.top){
      this.node.style.left = getRandomInt(13) + 'px';
      this.node.style.top = getRandomInt(13) + 'px';
    }
  }
}

function getRandomInt(max) {
  return (Math.floor(Math.random() * max))* 50;
}