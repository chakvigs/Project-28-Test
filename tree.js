class Tree {
    constructor(x, y, width, height) {
        var options = {
            isStatic : true,
        }

        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        this.image = loadImage("images/tree_2.0.png");
        World.add(world, this.body)
    }

    display () {
        var treePosition = this.body.position;
        push();
        translate(treePosition.x, treePosition.y);
        rectMode(CENTER);
        //strokeWeight(3);
        fill(255, 0, 255);
        //rect(0, 0, this.w, this.h);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}