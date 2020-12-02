class Ground{
    constructor(){
    var op = {
        isStatic: true
    }
    this.body = Bodies.rectangle(400,690,1200,20,op)
    World.add(world,this.body)
    this.height = 20
    this.width = 800
    }
    display(){
        var pos = this.body.position
        //fill("red")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
    }
}