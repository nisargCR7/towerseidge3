class Ball{
  constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius = radius;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    
    display(){
        var pos = this.body.position ;
        push();
        fill(83,19,221);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius);
        pop();  

    }

};