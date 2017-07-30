


function get_points(obj) {
    var imgImageData=ctx.getImageData(img_xo,img_y0, img_width, img_height);
    var populationImageData=ctx.getImageData(0,0,img_xo-1,img_height);

    var coordinates_x_obj=[obj.a[0],obj.b[0],obj.c[0]];
    var coordinates_y_obj=[obj.a[1],obj.b[1],obj.c[1]];

    coordinates_x_obj.sort(function (a,b){return a-b});
    coordinates_y_obj.sort(function (a,b) {return a-b});

    // line1=(iy-obj.a[1])*(obj.b[0]-obj.a[0])-(obj.b[1]-obj.a[1])*(ix-obj.a[0]);
    // y=((obj.b[1]-obj.a[1])*(ix-obj.a[0])/(obj.b[0]-obj.a[0]))+obj.a[1];
    // line2=(iy-obj.b[1])*(obj.c[0]-obj.b[0])-(obj.c[1]-obj.b[1])*(ix-obj.b[0]);
    // line3=(iy-obj.c[1])*(obj.a[0]-obj.c[0])-(obj.a[1]-obj.c[1])*(ix-obj.c[0]);


    for( var i=0; i<imgImageData.length; i++){
        var ix=(Math.floor(i/3) % img_width);
        var iy=(Math.floor(i/3/ img_width));

        if(iy<){

        }

        populationImageData.data[i]-imgImageData.data[i]

    }

}

