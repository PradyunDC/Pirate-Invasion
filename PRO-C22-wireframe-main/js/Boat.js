class Boat {
    constructor(x, y, w , h, boatPos ) {
     
      this.x = x
      this.y = y
      this.w = w
      this.h = h
      this.boatPostion = boatPos
      this.body = Bodies.rectangle(x, y, w, h);
      this.image = loadImage("./assets/boat.png");
      World.add(world, this.body);
    }
  
    
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
  
      push();
      translate(pos.x, pos.y)
      rotate(angle)
      imageMode(CENTER);
      image(this.image, 0, this.boatPosition, this.w, this.h);
      pop();
      
    }
  }