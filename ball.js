class crumpledball{
  
    constructor(x,y,r,options)
    {
     var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
  }
    this.radius=r

    this.crumpledball= Bodies.circle(x ,y ,r,options)
     World.add(world,crumpledball)
    }
    display() { 
  fill("red")
 ellipseMode(CENTER)
  ellipse(this.crumpledball.position.x,this.crumpledball.position.y,this.radius)

    }

}
