class Box {
    constructor(x,y,width,height) {
        var options={
            density:1,
            friction:2,
            restitution:0.6};
        
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        fill("yellow");
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}