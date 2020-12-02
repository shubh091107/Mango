class Mango{
    constructor(x,y,radius){
        var op ={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.circle(x,y,radius,op)
        this.image = loadImage("mon.png")
        this.radius = radius
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        pop()
    }
}