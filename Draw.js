function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(Math.floor(Math.random() * picX), Math.floor(Math.random() * picY));
        ctx.lineTo(Math.floor(Math.random() * picX), Math.floor(Math.random() * picY));
        ctx.lineTo(Math.floor(Math.random() * picX), Math.floor(Math.random() * picY));
        ctx.closePath();
        ctx.stroke();
    }
}
