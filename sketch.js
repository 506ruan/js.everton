function setup() {
    createCanvas(700,700);
  }
  
  function draw() {
    background(220);
  }
  function setup() {
    createCanvas(900, 900);
    background("white")
  }
  
  function draw() {
    stroke("blue");
    fill("red");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 15, 20);
    }
  }

  