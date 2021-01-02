class Stone {
    constructor(x, y, radius) {
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }

        this.x = x;
        this.y = y;
        this.r = radius;
        this.body = Bodies.circle(this.x, this.y, (this.r-15)/2, options);
        this.image = loadImage("images/stone_3.0.png");
        World.add(world, this.body)
        
    }

    display () {
        var stonePosition = this.body.position;
        push();
        translate(stonePosition.x, stonePosition.y);
        rectMode(CENTER);
        //strokeWeight(3);
        fill(255, 0, 255);
        //ellipse(0, 0, this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}