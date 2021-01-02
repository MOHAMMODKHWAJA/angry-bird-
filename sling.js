class sling {

    constructor(bodyA,bodyB){   //constructor(bird,constraintlog)
        var options={
            bodyA: bodyA,      //bird
            bodyB:bodyB,     // constraintlog
            stiffness:0.04,
            length:10
       }
   
       this.sling=Constraint.create(options);  // make a constraint using bodyA,bodyB
       World.add(world,sling);

    }
    display() {

        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.bodyB.position;


        line (pointA.x,pointA.y,pointB.x,pointB.y);




    }
}