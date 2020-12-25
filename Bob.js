class Bob{
    constructor(x,y,r){
        var options={
            'density': 0.8,
            'restitution':1,
            'friction':0.5,
            'isStatic': false
            
        }
        this.body =Bodies.circle(x,y,r/2,options)
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body)

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("green")
        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r);
        pop()
    }
}