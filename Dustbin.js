class Dustbin
{
    constructor(x,y)
    {
        this.image = loadImage("dustbin.png")
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 100;
        this.thickness = 20;

        this.wall1 = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true});
        this.wall2 = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});
        this.wall3 = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});

        this.angle = 0;
        Matter.Body.setAngle(this.wall2,this.angle);
        Matter.Body.setAngle(this.wall3,this.angle*-1);

        World.add(world,this.wall1);
        World.add(world,this.wall2);
        World.add(world,this.wall3);
    }
    display()
    {
        var wall1Position = this.wall1.position;
        var wall2Position = this.wall2.position;
        var wall3Position = this.wall3.position;
        
        fill("blue");
        push();
        translate(wall1Position.x,wall1Position.y);
        imageMode(CENTER);
        image(this.image,0,-this.width/2,this.width,this.width);
      
        pop();

        push();
        translate(wall2Position.x,wall2Position.y);
        angleMode(RADIANS);
        rotate(-this.angle);
       
        pop();

        push();
        translate(wall3Position.x,wall3Position.y);
        angleMode(RADIANS);
        rotate(this.angle);
        
        pop();
    }
}