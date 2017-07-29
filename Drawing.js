var canvasWidth = 900;
var canvasHeight = 600;

function draw() {
    var canvas = document.getElementById('Geometric_Filter');
    var img = new Image();

    if (canvas.getContext) {

        var ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);


        for (var i = 0; i < trianglesLimit; i++) {

            console.log(i);
            console.log(population[i]);
            validate(population[i]);
            ctx.fillStyle = population[i].color;

            ctx.beginPath();
            ctx.moveTo(population[i].a[0], population[i].a[1]);
            ctx.lineTo(population[i].b[0], population[i].b[1]);
            ctx.lineTo(population[i].c[0], population[i].c[1]);
            ctx.fill();
        }

        img.addEventListener('load', function() {
            ctx.drawImage(img, 0, 0, 220, 310);
        }, false);

        img.src = 'Mona_Lisa.jpg';

        for (var i = 0; i < trianglesLimit; i++) {

            population[i] = mutate(population[i]);
        }

        setTimeout(draw, 1000);

    }

}