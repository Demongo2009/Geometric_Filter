function rank(obj) {

    var canvas = document.getElementById('GeometricFilter');
    var image = document.getElementById('image');
    var ctx = canvas.getContext('2d');
    var ctxImg = image.getContext('2d');



    // line1=(iy-obj.a[1])*(obj.b[0]-obj.a[0])-(obj.b[1]-obj.a[1])*(ix-obj.a[0]);
    // y=((obj.b[1]-obj.a[1])*(ix-obj.a[0]))/(obj.b[0]-obj.a[0])+obj.a[1];

    // line2=(iy-obj.b[1])*(obj.c[0]-obj.b[0])-(obj.c[1]-obj.b[1])*(ix-obj.b[0]);
    //y=((obj.c[1]-obj.b[1])*(ix-obj.b[0]))/(obj.c[0]-obj.b[0])+obj.b[1];

    // line3=(iy-obj.c[1])*(obj.a[0]-obj.c[0])-(obj.a[1]-obj.c[1])*(ix-obj.c[0]);
    //y=((obj.a[1]-obj.c[1])*(ix-obj.c[0]))/(obj.a[0]-obj.c[0])+obj.c[1];



    if(obj.c[1]< ( (obj.b[1] - obj.a[1]) * (obj.c[0] - obj.a[0]) )/ (obj.b[0] - obj.a[0]) + obj.a[1])
        //pod
        var c_is_under=true;
    else
        var c_is_under=false;

    if(obj.a[1]< ( (obj.c[1]-obj.b[1])*(obj.a[0]-obj.b[0])) /(obj.c[0]-obj.b[0])+obj.b[1])
    //pod
        var a_is_under=true;
    else
        var a_is_under=false;


    if(obj.b[1]< ( (obj.a[1]-obj.c[1])*(obj.b[0]-obj.c[0]) )/(obj.a[0]-obj.c[0])+obj.c[1])
    //pod
        var b_is_under=true;
    else
        var b_is_under=false;


    var LR = [obj.a[0], obj.b[0], obj.c[0]];
    LR.sort(function(a, b) {
        return a - b;
    })

    var left = LR[0];
    var right = LR[2];


    var TB = [obj.a[1], obj.b[1], obj.c[1]];
    TB.sort(function(a, b) {
        return a - b;
    })

    var top = TB[0];
    var bottom = TB[2];


    var side1 = right-left;
    var side2= bottom- top;

    var area= side1 * side2;

var c_is_in=false;
var a_is_in=false;
var b_is_in=false;
var points=0;
    for(var i=left*top; i<left+area; i+4) {
        var pixel_x=left+(Math.floor(i/4) % side1);
        var pixel_y=top+(Math.floor(i/4/ side1));
        var line_x = pixel_x;
        var line_ab =( (obj.b[1] - obj.a[1]) * (line_x - obj.a[0]) )/ (obj.b[0] - obj.a[0]) + obj.a[1];
        var line_cb =( (obj.c[1]-obj.b[1])*(line_x-obj.b[0])) /(obj.c[0]-obj.b[0])+obj.b[1];
        var line_ac=( (obj.a[1]-obj.c[1])*(line_x-obj.c[0]) )/(obj.a[0]-obj.c[0])+obj.c[1];

        if ((pixel_y < line_ab) === c_is_under){
            c_is_in=true;
        }
        if ((pixel_y < line_cb) === a_is_under){
            a_is_in=true;
        }
        if ((pixel_y < line_ac) === b_is_under){
            b_is_in=true;
        }

        if(c_is_in && a_is_in && b_is_in){
            points+=765-(obj.red- imageData[i])-(obj.green-imageData[i+1])
            -(obj.blue - imageData[i+2]);


        }else continue;
    }

     console.log(points);
    return points;

}

//rank(test);
/*var left=0;
    var tope= 0;
    var side1=10;
    var side2=10;
    var area=side1*side2;
    var counter=0;
    for(var i=0; i<area*4;i++){
    var pixel_x=left+(Math.floor(i/4) % side1);
    var pixel_y=tope+(Math.floor(i/4/ side1));

    console.log(pixel_x+ " "+ pixel_y+" "+counter);
    counter++;
    }*/