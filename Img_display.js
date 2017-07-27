function drawImg() {
    var ctx = document.getElementById('Img').getContext('2d');
    var img = new Image();
    img.src = 'Mona_Lisa.jpg';

    img.onload = function() {
        ctx.drawImage(img, 0, 0);
    }
}
