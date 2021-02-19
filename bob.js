class Bob{
    constructor(x,y,radius){

      var options={
        restitution:0.8,
        density:1.2,
        friction:0.5,
        isStatic:false

      }
      this.body=Bodies.circle(x,y,(radius-20)/2,options);
      this.x= x;
      this.y= y;
      this.radius= radius;

      World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
       

       
        
        fill("red");
        ellipse(pos.x,pos.y,this.radius,80);
    }
}

