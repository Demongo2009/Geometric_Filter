function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        for (var rec of population) {

            validate(rec,picX,picY)

            ctx.beginPath();
            ctx.moveTo(rec.a[0], rec.a[1]);
            ctx.lineTo(rec.b[0], rec.b[1]);
            ctx.lineTo(rec.c[0], rec.c[1]);
            ctx.closePath();
            ctx.stroke();

        }
    }
}
