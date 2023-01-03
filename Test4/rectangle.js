class Rectangle {
    constructor(x,y,width,height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    render() {
        let ctx = document.getElementById("myCanvas").getContext('2d');
        ctx.beginPath();
        ctx.rect(rectangle.x,rectangle.y, rectangle.width, rectangle.height);
        console.log(rectangle.x);
        ctx.fillStyle = rectangle.color;
        ctx.fill();
    }
}
let rectangle = new Rectangle(10,10,200,100,"#e96868");
rectangle.render();