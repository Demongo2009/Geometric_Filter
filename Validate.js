function validateTriangle(obj) {

    if (typeof obj !== 'object') throw 'Error1';

    if (obj.hasOwnProperty('a') !== true || obj.hasOwnProperty('b') !== true || obj.hasOwnProperty('c') !== true) throw 'Error2';

    if (typeof obj.a[0] !== 'number' || typeof obj.a[1] !== 'number' || typeof obj.b[0] !== 'number' || typeof obj.b[1] !== 'number' || typeof obj.c[0] !== 'number' || typeof obj.c[1] !== 'number') throw 'Error3';

    if (obj.a[0] > canvasWidth || obj.b[0] > canvasWidth || obj.c[0] > canvasWidth || obj.a[1] > canvasHeight || obj.b[1] > canvasHeight || obj.c[1] > canvasHeight) throw 'Error4';

    if (isNaN(obj.red) || isNaN(obj.green) || isNaN(obj.blue)) throw 'Error5';
}

function validateCircle(obj) {

    if (typeof obj !== 'object') throw 'Error1';

    if (obj.hasOwnProperty('radius') !== true || obj.hasOwnProperty('center') !== true) throw 'Error2';

    if (typeof obj.radius !== 'number' || typeof obj.center[0] !== 'number' || typeof obj.center[1] !== 'number') throw 'Error3';

    if (isNaN(obj.red) || isNaN(obj.green) || isNaN(obj.blue)) throw 'Error4';

    if (obj.center[0] + obj.radius > canvasWidth || obj.center[1] + obj.radius > canvasHeight || obj.center[0] - obj.radius < 0 || obj.center[1] - obj.radius < 0) throw 'Error5';
}
