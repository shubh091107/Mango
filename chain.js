class Chain{
        constructor(bodyA,pointB){
            var option = {
                bodyA: bodyA,
                pointB:pointB,
                stiffness: 0.04 ,
                length: 50
            }
        this.chain = Constraint.create(option)
        this.pointB = pointB
        World.add(world,this.chain)
        }
    
        fly(){
            this.chain.bodyA = null 
        }
        display(){
    
            if (this.chain.bodyA){
            var posA = this.chain.bodyA.position
          //  var posB = this.chain.bodyB.position
          var posB = this.pointB
            strokeWeight(4)
            line(posA.x,posA.y,posB.x,posB.y)
        }}
    
}