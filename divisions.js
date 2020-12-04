class Division {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(x, y, 10, 100, options);
        this.slide = Matter.Bodies.circle(this.body.position.x, this.body.position.y - 50, 5,options);
        Matter.World.add(world, this.body);
        Matter.World.add(world, this.slide);
    }

    show() {
        push();
        rect(this.body.position.x, this.body.position.y, 10, 100);
        circle(this.slide.position.x, this.slide.position.y, 10);
        pop();
    }
}