class Apple {
  constructor(el) {
    this.node = document.createElement("img");
    this.node.setAttribute("id", "apple");
    this.node.setAttribute("src", "src/assets/apple.jpg");

    el.appendChild(this.node);

    this.node.style.left = getRandomInt(13) + 'px';
    this.node.style.top = getRandomInt(13) + 'px';

    //declare variable appleLeft = this.node.stye.left
    //declare variable appleTop = this.node.stye.top
    
  }
}

function getRandomInt(max) {
  return (Math.floor(Math.random() * max))* 50;
}

console.log()


//create a function that takes in two params (top, left) in pixels(#)
//inside the function it'll test if passed in top and left are equal to applesTL

//when we're in the head function we can just do 
//isAppleValue(topPositon,leftPositon)