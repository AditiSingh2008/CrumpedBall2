class Dustbin{
    constructor(x,y){
        var options={
            'friction':0.5,
            'density':10,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,100,100,options);
        World.add(world,this.body);
        this.width=100;
        this.height=100;
        this.image=loadImage("dustbingreen.png")
    } 
    display(){
        var pos=this.body.position;
        fill("white");
      rectMode(CENTER);
      image(this.image,pos.x,pos.y,100,100)
  }
  }