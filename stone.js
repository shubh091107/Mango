class Stone{
    constructor(){
        var op = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(100,600,20)
        World.add(world,this.body)
        this.image = loadImage("stone.png")
        this.radius = 50
    }
    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.radius,this.radius)
    }
}