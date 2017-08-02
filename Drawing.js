function draw() {
    var canvas = document.getElementById('GeometricFilter');
    var image = document.getElementById('image');
    img = new Image();
    //console.log(countDraw);
    //countDraw++;

    if (canvas.getContext) {

        var ctx = canvas.getContext('2d');
        var ctxImg = image.getContext('2d');

        img.addEventListener('load', function() {
            ctxImg.drawImage(img, 0, 0, 240, 358);

            //console.log("Image drawn");

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        //console.log(countRank);
        //console.log(population);


        for (var i = 0; i < trianglesLimit; i++) {

            validate(population[i]);
            ctx.fillStyle = population[i].color;

            ctx.beginPath();
            ctx.moveTo(population[i].a[0], population[i].a[1]);
            ctx.lineTo(population[i].b[0], population[i].b[1]);
            ctx.lineTo(population[i].c[0], population[i].c[1]);
            ctx.fill();

            //console.log('Drawing triangle');
            var imageData=ctxImg.getImageData(0,0,canvasWidth,canvasHeight).data;
            population[i].points = rank(population[i]);
            //console.log(population[i].points);
        }


        population.sort(function(a, b) {

            return a.points - b.points;
            })

            //console.log(JSON.stringify(population));

            population = generation(population);

        //setTimeout(draw, 200);

        }, false);

        img.src = 'Mona_Lisa.jpg';

    }

}