function camera() {

    document.getElementById("cameraON").style.display="none";
    document.getElementById("loadImg").style.display="none";
    document.getElementById("snap").style.display="inline-block";
    document.getElementById("imgs").style.display="none";

    var video = document.getElementById('video');

    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        });
    }

    var canvas = document.getElementById('image');
    var context = canvas.getContext('2d');

    var origCanvas = document.getElementById('canvas');
    origCanvas.width = canvasWidth * factor;
    origCanvas.height = canvasHeight * factor;

    document.getElementById("snap").addEventListener("click", function() {
        document.getElementById("przycisk").style.display = "inline-block";

        var wPrim = canvasHeight* video.offsetWidth / video.offsetHeight;

        context.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight, -(wPrim - canvasWidth ) / 2, 0, wPrim, canvasHeight);
        origCanvas.getContext('2d').drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight, -(wPrim * factor - canvasWidth * factor) / 2, 0, wPrim * factor, canvasHeight * factor);

        imgData = context.getImageData(0, (wPrim-canvasWidth ) / 3, wPrim, canvasHeight).data;
        console.time('anc');

    });
}