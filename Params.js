debugCanvas = false;
generationNumber = 0;
canvasWidth = 40;
canvasHeight = 60;
figuresLimit = 120;
popLength = 100;
canvasSqure = canvasWidth * canvasHeight;
lastFiguresScore = 0;

var factor = Math.floor(((window.innerWidth)/3)/canvasWidth);

var obrazy = [

    'balon.jpg',
    'bird.jpg',
    'barak.png',
    'dodge.jpg',
    'girl.jpg',
    'goomba.png',
    'liberty.png',
    'mario.png',
    'MonaLisa.jpg',
    'panda.jpg',
    'vader.jpg',
];

for (var i = 0; i < obrazy.length; i++) {
    var fName = obrazy[i];

    var prevImg = new Image();
    prevImg.src = 'obrazy/'+fName;

    document.getElementById('imgs').appendChild(prevImg);

    (function(fName) {
        prevImg.addEventListener('click', function () {
            zaladujObraz('obrazy/'+fName);
        })
    })(fName);
}