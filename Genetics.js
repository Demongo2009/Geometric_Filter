function Triangle() {

    this.a = [];
    this.b = [];
    this.c = [];

    //do {
    this.a[0] = Math.floor(Math.random() * canvasWidth);
    this.a[1] = Math.floor(Math.random() * canvasHeight);

    var rangeX=0.2 * canvasWidth;
    var rangeY=0.2 * canvasHeight;

    this.b[0] = this.a[0] - rangeX + (Math.random() * rangeX * 2);
    if(this.b[0] > canvasWidth) this.b[0]=canvasWidth;
    if(this.b[0] < 0) this.b[0]=0;


    this.b[1] = this.a[1] - rangeY + (Math.random() * rangeY * 2);
    if(this.b[1] > canvasWidth) this.b[1]=canvasHeight;
    if(this.b[1] < 0) this.b[1]=0;


    this.c[0] = this.a[0] - rangeX + (Math.random() * rangeX * 2);
    if(this.c[0] > canvasWidth) this.c[0]=canvasWidth;
    if(this.c[0] < 0) this.c[0]=0;


    this.c[1] = this.a[1] - rangeY + (Math.random() * rangeY * 2);
    if(this.c[1] > canvasWidth) this.c[1]=canvasHeight;
    if(this.c[1] < 0) this.c[1]=0;

    //} while (this.a[0] === this.b[0] || this.a[0] === this.c[0] || this.b[0] === this.c[0] || this.a[1] === this.b[1] || this.a[1] === this.c[1] || this.b[1] === this.c[1]);

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


function Circle() {

    this.center = [];

    this.center[0] = Math.floor(Math.random() * canvasWidth);
    this.center[1] = Math.floor(Math.random() * canvasHeight);

    var maxRadiusWid, maxRadiusHei;

    if (canvasWidth / 2 >= this.center[0]) maxRadiusWid = this.center[0];
    else maxRadiusWid = canvasWidth - this.center[0];

    if (canvasHeight / 2 >= this.center[1]) maxRadiusHei = this.center[1];
    else maxRadiusHei = canvasHeight - this.center[1];

    if (maxRadiusWid >= maxRadiusHei)
        this.radius = Math.floor(Math.random() * maxRadiusHei);
    else this.radius = Math.floor(Math.random() * maxRadiusWid);

    this.red = Math.floor(Math.random() * 256);
    this.green = Math.floor(Math.random() * 256);
    this.blue = Math.floor(Math.random() * 256);

    this.color = 'rgb(' + this.red + ', ' + this.green + ', ' + this.blue + ')';

    this.copy = function(){
        var c = new Circle();

        c.center = [this.center[0], this.center[1]];
        c.radius = this.radius;
        c.red = this.red;
        c.green = this.green;
        c.blue = this.blue;

        c.color = 'rgb(' + c.red + ', ' + c.green + ', ' + c.blue + ')';

        return c;
    };
}

function Specimen() {
    this.points=0;

    this.red = Math.floor(Math.random() * 256);
    this.green = Math.floor(Math.random() * 256);
    this.blue = Math.floor(Math.random() * 256);

    this.bgColor = 'rgb(' + this.red + ', ' + this.green + ', ' + this.blue + ')';
}