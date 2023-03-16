class Plinko {
    constructor(x,y,r){
    var options = {
    restitution: 0.8,
    friction: 0,
    isStatic: true
    }
    this.r = r
    this.body = Bodies.circle(x,y,r,options)
    World.add(world,this.body)
    }
    show(){
    var pos = this.body.position
    push()
    translate(pos.x, pos.y) 
    ellipse(0,0,this.r)
    pop()
    }
}