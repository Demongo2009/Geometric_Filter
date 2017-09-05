function createAncestorsCanvas(name, width, height) {

    var ancestorsCanvas = document.createElement('canvas');
    ancestorsCanvas.id = name;
    ancestorsCanvas.width = width;
    ancestorsCanvas.height = height;
    document.body.appendChild(ancestorsCanvas);
    return ancestorsCanvas.getContext('2d');
}

function createContextScore(name) {

    var score = document.createElement('DIV');
    score.id = name;
    score.style = "width:" + 30 + "px; height:" + 15 + "px; font-size:10px; display:inline-block";
    document.body.appendChild(score);
    return score.innerText;
}

function drawAncestors() {

    ancestorsArray[ancestors.length - 1] = createAncestorsCanvas("ancestorsCanvas" + ancestors.length - 1, canvasWidth, canvasHeight);

    ancestorsArray[ancestors.length - 1].fillStyle = ancestors[ancestors.length - 1].bgColor;
    ancestorsArray[ancestors.length - 1].fillRect(0, 0, canvasWidth, canvasHeight);

    for (var i = figuresLimit - 1; i >= 0; i--) {

        if (ancestors[ancestors.length - 1][i] instanceof Triangle) {
            validateTriangle(ancestors[ancestors.length - 1][i]);

            ancestorsArray[ancestors.length - 1].fillStyle = ancestors[ancestors.length - 1][i].color;

            ancestorsArray[ancestors.length - 1].beginPath();
            ancestorsArray[ancestors.length - 1].moveTo(ancestors[ancestors.length - 1][i].a[0], ancestors[ancestors.length - 1][i].a[1]);
            ancestorsArray[ancestors.length - 1].lineTo(ancestors[ancestors.length - 1][i].b[0], ancestors[ancestors.length - 1][i].b[1]);
            ancestorsArray[ancestors.length - 1].lineTo(ancestors[ancestors.length - 1][i].c[0], ancestors[ancestors.length - 1][i].c[1]);
            ancestorsArray[ancestors.length - 1].fill();
        }
    }

    createContextScore('score' + (ancestors.length - 1));
    var ancScore = (ancestors[ancestors.length - 1].points * 100)/(canvasSqure * 255 * 3);
    document.getElementById('score' + (ancestors.length - 1)).innerText = Math.floor(ancScore) + '%' +'  (' + ancestors[ancestors.length - 1].points + ')';
}