function draw() {

    //Display Img
    var ctxImg = document.getElementById('Img').getContext('2d');
    var img = new Image();
    img.src = 'Mona_Lisa.jpg';

    img.onload = function() {
        ctxImg.drawImage(img, 0, 0);
    }
    //

    var canvas = document.getElementById('Geometric_Filter');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        for (var rec of population) {

            validate(rec, picX, picY)

            ctx.fillStyle = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
            console.log(ctx.fillStyle);
            ctx.beginPath();
            ctx.moveTo(rec.a[0], rec.a[1]);
            ctx.lineTo(rec.b[0], rec.b[1]);
            ctx.lineTo(rec.c[0], rec.c[1]);
            ctx.fill();
        }
    }
}
