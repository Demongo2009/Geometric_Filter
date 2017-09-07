function Triangle() {

    this.a = [];
    this.b = [];
    this.c = [];

    var minRangeX = 0.5;
    var minRangeY = 0.5;
    var maxRangeX = 1.5;
    var maxRangeY = 1.5;

    this.a[0] = Math.floor(Math.random() * canvasWidth);
    this.a[1] = Math.floor(Math.random() * canvasHeight);

    this.b[0] = this.a[0] * (Math.random() * (maxRangeX - minRangeX) + minRangeX);
    if (this.b[0] > canvasWidth) this.b[0] = canvasWidth;

    this.b[1] = this.a[1] * (Math.random() * (maxRangeY - minRangeY) + minRangeY);
    if (this.b[1] > canvasHeight) this.b[1] = canvasHeight;

    this.c[0] = this.a[0] * (Math.random() * (maxRangeX - minRangeX) + minRangeX);
    if (this.c[0] > canvasWidth) this.c[0] = canvasWidth;

    this.c[1] = this.a[1] * (Math.random() * (maxRangeY - minRangeY) + minRangeY);
    if (this.c[1] > canvasHeight) this.c[1] = canvasHeight;


    this.red = Math.floor(Math.random() * 256);
    this.green = Math.floor(Math.random() * 256);
    this.blue = Math.floor(Math.random() * 256);

    this.color = 'rgb(' + this.red + ', ' + this.green + ', ' + this.blue + ')';

    this.copy = function(){
        var t = new Triangle();

        t.a = [this.a[0], this.a[1]];
        t.b = [this.b[0], this.b[1]];
        t.c = [this.c[0], this.c[1]];

        t.red = this.red;
        t.green = this.green;
        t.blue = this.blue;

        t.color = 'rgb(' + t.red + ', ' + t.green + ', ' + t.blue + ')';

        return t;
    };
}

function Specimen() {

    this.points = 0;

    this.r = Math.floor(Math.random() * 256);
    this.g = Math.floor(Math.random() * 256);
    this.b = Math.floor(Math.random() * 256);

    this.bgColor = 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';

    this.copy = function(){
        var s = new Specimen();

        s. points = this.points;

        s.r = this.r;
        s.g = this.g;
        s.b = this.b;

        for (var i = 0; i < figuresLimit; i++) {
            s[i] = this[i].copy();
        }

        s.bgColor = 'rgb(' + s.r + ', ' + s.g + ', ' + s.b + ')';

        return s;
    }
}