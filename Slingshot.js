class Slingshot
{
    constructor (body1, pointB){

        var options= {
bodyA: body1,

pointB:pointB,
length: 100,
stiffness: 0.4,
} 

    
  
this.rope =  Matter.Constraint.create(options) 
        World.add(world,this.rope)
    
}
    fly(){
        this.rope.bodyA = null;
    }

display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.pointB;
    strokeWeight(7)


line(pointA.x, pointA.y,pointB.x, pointB.y );
}
    }
