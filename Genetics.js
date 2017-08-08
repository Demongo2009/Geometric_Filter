function Triangle() {

    this.a = [];
    this.b = [];
    this.c = [];

    do {
        this.a[0] = Math.floor(Math.random() * canvasWidth);
        this.a[1] = Math.floor(Math.random() * canvasHeight);
        this.b[0] = Math.floor(Math.random() * canvasWidth);
        this.b[1] = Math.floor(Math.random() * canvasHeight);
        this.c[0] = Math.floor(Math.random() * canvasWidth);
        this.c[1] = Math.floor(Math.random() * canvasHeight);
    } while (this.a[0] === this.b[0] || this.a[0] === this.c[0] || this.b[0] === this.c[0] || this.a[1] === this.b[1] || this.a[1] === this.c[1] || this.b[1] === this.c[1]);

    this.red = Math.floor(Math.random() * 256);
    this.green = Math.floor(Math.random() * 256);
    this.blue = Math.floor(Math.random() * 256);

    this.color = 'rgb(' + this.red + ', ' + this.green + ', ' + this.blue + ')';

    this.pp = function(){
        return {a:this.a,b:this.b,c:this.c,color:this.color};
    };

    this.copy = function(){
        var t = new Triangle();

        t.a = [this.a[0],this.a[1]];
        t.b = [this.b[0],this.b[1]];
        t.c = [this.c[0],this.c[1]];

        t.red = this.red;
        t.green = this.green;
        t.blue = this.blue;

        t.color = 'rgb(' + t.red + ', ' + t.green + ', ' + t.blue + ')';

        return t;
    };
}

