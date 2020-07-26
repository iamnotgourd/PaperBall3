class Band  {
    constructor(bodyA,pointB){
    var options = {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.01,
        length:30
    }
    this.bodyA = bodyA
    this.pointB = pointB
    this.band = Constraint.create(options)
    World.add(world,this.band)
    }
    fly(){
        this.band.bodyA = null;
    }
  display(){
    if(this.band.bodyA){
        var pointA = this.band.bodyA.position;
        var pointB = this.pointB;
      push()
    stroke("#E04536")
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    strokeWeight(7)
    pop()
    }
  }
}
