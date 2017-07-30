var canvas_width = 800;
var canvas_height = 600;

var img_width=240;
var img_height=320;
var img_xo=img_width;
var img_y0=0;



function draw() {
    var canvas = document.getElementById('canvas');
    var img = new Image();   // Create new img element

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.clearRect(0,0,canvas_width,canvas_height);

        //clone
        function draw_clone(i) {
            if (!check_genome(population[i])) throw Error;
            ctx.fillStyle = population[i].color;

            ctx.clearRect(0,0,canvas_width,canvas_height);
            ctx.beginPath();
            ctx.moveTo(img_width+img_xo+population[i].a[0], population[i].a[1]);
            ctx.lineTo(img_width+img_xo+population[i].b[0], population[i].b[1]);
            ctx.lineTo(img_width+img_xo+population[i].c[0], population[i].c[1]);
            ctx.fill();
        }


        for (var i = 0; i < triangle_limit; i++) {
            setTimeout(draw_clone(i),10);
        }



        //population
        for (var i = 0; i < triangle_limit; i++) {
            if (!check_genome(population[i])) throw Error;
            ctx.fillStyle = population[i].color;

            ctx.beginPath();
            ctx.moveTo(population[i].a[0], population[i].a[1]);
            ctx.lineTo(population[i].b[0], population[i].b[1]);
            ctx.lineTo(population[i].c[0], population[i].c[1]);
            ctx.fill();


        }


        //image original
        img.addEventListener('load', function () {
            // execute drawImage statements here
            ctx.drawImage(img, img_xo , img_y0, img_width, img_height);

        }, false);
        img.src = 'Mona_Lisa.jpg'; // Set source path




        for(var i=0; i<triangle_limit; i+=2){
            population[i]= cross_over(population[i],population[i+1]);
        }


        for (var i = 0; i < triangle_limit; i++) {
            population[i] = mutate(population[i]);
        }



        setTimeout(draw, 1000);

    }

}


