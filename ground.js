class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            density:10
        }
        this.body=Matter.Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        Matter.World.add(world,this.body);
        function show(){
            push();
            fill(100);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
        }   
    }

    show(){
        push();
        fill(100);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}