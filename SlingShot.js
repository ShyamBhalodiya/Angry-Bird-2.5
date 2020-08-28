class slingshot {
    constructor(bodya, bodyb) {
        var option = {
            bodyA: bodya,
            bodyB: bodyb,
            stiffness: 0.1,
            length: 100
        }
        this.chain = Constraint.create(option);
        World.add(world, this.chain);
    }
    display() {
        var pointa = this.chain.bodyA.position;
        var pointb = this.chain.bodyB.position;
        line(pointa.x, pointa.y, pointb.x, pointb.y);
    }
} 