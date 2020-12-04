class Plinko {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Matter.Bodies.circle(x, y, 10, options);
        Matter.World.add(world, this.body);
    }
    show() {
        push();
        fill(230);
        ellipse(this.body.position.x, this.body.position.y, 20, 20);
        pop();
    }
}