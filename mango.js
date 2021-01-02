class Mango {
    constructor(x, y, radius) {
        var options = {
            isStatic : true,    
            restitution : 0,
            friction : 1
        }

        this.x = x;
        this.y = y;
        this.r = radius;
        this.body = Bodies.circle(this.x, this.y, (this.r-15)/2, options);
        this.image = loadImage("images/mango.png");
        World.add(world, this.body)
        
    }

    display () {
        var mangoPosition = this.body.position;
        push();
        translate(mangoPosition.x, mangoPosition.y);
        rectMode(CENTER);
        //strokeWeight(3);
        fill(255, 0, 255);
        //ellipse(0, 0, this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}