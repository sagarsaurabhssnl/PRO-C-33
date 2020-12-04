class Particle {
    constructor() {
        var options = {
            restitution: 1
        }
        this.body = Matter.Bodies.circle(mouseX, 20, 5, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        Matter.World.add(world, this.body);
    }
    show() {
        if (this.body) {
            push();
            fill(color(random(0, 255), random(0, 255), random(0, 255)));
            ellipse(this.body.position.x, this.body.position.y, 10, 10);
            pop();
        }
    }
    destroy() {
        Matter.World.remove(world, this.body);
        var addscore = 0;
        if (this.body.position.x < 70 || this.body.position.x > 420) {
            addscore = 100;
        } else if (this.body.position.x > 70 && this.body.position.x < 140 || this.body.position.x > 350 && this.body.position.x < 420) {
            addscore = 200;
        } else if (this.body.position.x > 140 && this.body.position.x < 210 || this.body.position.x > 280 && this.body.position.x < 350) {
            addscore = 300;
        } else if (this.body.position.x > 210 && this.body.position.x < 280) {
            addscore = 500;
        }
        score = score + addscore;
        ready = 1;
    }
}