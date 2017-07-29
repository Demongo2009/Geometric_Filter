var canvasWidth = 240;
var canvasHeight = 358;

function draw() {
    var canvas = document.getElementById('Geometric_Filter');
    var img = new Image();

    if (canvas.getContext) {

        var ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);


        for (var i = 0; i < trianglesLimit; i++) {

            validate(population[i]);
            ctx.fillStyle = population[i].color;

            ctx.beginPath();
            ctx.moveTo(population[i].a[0], population[i].a[1]);
            ctx.lineTo(population[i].b[0], population[i].b[1]);
            ctx.lineTo(population[i].c[0], population[i].c[1]);
            ctx.fill();
        }

        img.addEventListener('load', function() {
            ctx.drawImage(img, 240, 0, 240, 358);
        }, false);

        img.src = 'Mona_Lisa.jpg';

        for (var i = 0; i < trianglesLimit; i++) {

            population[i] = mutate(population[i]);
        }

        setTimeout(rank, 200);

        //setTimeout(draw, 1000);

    }

}
