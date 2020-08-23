class dustbin{
  
    constructor(x,y,w,h)
    {
     
    this.width=w
    this.height=h
    this.dustbin= Bodies.rectangle(x ,y ,w, h,{isStatic:true})
     World.add(world,this.dustbin)
    }
    display() { 
  fill("red")
 rectMode(CENTER)
  rect(this.dustbin.position.x,this.dustbin.position.y,this.width,this.height)

    }

}
