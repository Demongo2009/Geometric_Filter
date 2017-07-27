var canvas_width = 900;
var canvas_height = 600;

function draw() {
    var canvas = document.getElementById('canvas');
    var img = new Image();   // Create new img element

    if (canvas.getContext) {

        var ctx = canvas.getContext('2d');

        ctx.clearRect(0,0,canvas_width,canvas_height);


        for (var i = 0; i < triangle_limit; i++) {
            if (!check_genome(population[i])) throw Error;
            ctx.fillStyle = population[i].color;

            ctx.beginPath();
            ctx.moveTo(population[i].a[0], population[i].a[1]);
            ctx.lineTo(population[i].b[0], population[i].b[1]);
            ctx.lineTo(population[i].c[0], population[i].c[1]);
            ctx.fill();
        }


        img.addEventListener('load', function () {
            // execute drawImage statements here
            ctx.drawImage(img, 0, 0, 240, 320);

        }, false);
        img.src = 'Mona_Lisa.jpg'; // Set source path


        for (var i = 0; i < triangle_limit; i++) {
            population[i] = mutate(population[i]);
        }

        setTimeout(draw, 1000);

    }

}


