class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,options);
      
      World.add(world, this.ground);
    }
    display(){
        noStroke()
      var pos =this.ground.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y,900,20);
    }
  };
