class Chain{
    constructor(mybodyA,mybodyB){
      var option={
        bodyA:mybodyA,
        bodyB:mybodyB,
        stiffness:0.4,
        lenght:10
      }  
      this.chain=Constraint.create(option);
      World.add(world,this.chain);

    }
   display(){
       var pointA=this.chain.bodyA.position;
       var pointB=this.chain.bodyB.position;
       strokeWeight(3);
       line(pointA.x,pointA.y,pointB.x,pointB.y);

   }
}