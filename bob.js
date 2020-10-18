class Bob{
    constructor(x, y, r){
        var options={
            isStatic: false,
            restitution: 0.6,
            friction: 0,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world,this.body);
    }
    display()
    {
        push()
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("yellow");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}