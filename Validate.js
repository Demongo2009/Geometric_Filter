function validate(obj) {

    if (typeof obj !== 'object') {debugger;} //throw 'Error1';}

    if (obj.hasOwnProperty('a') !== true || obj.hasOwnProperty('b') !== true || obj.hasOwnProperty('c') !== true) throw 'Error2';

    if (typeof obj.a[0] !== 'number' || typeof obj.a[1] !== 'number' || typeof obj.b[0] !== 'number' || typeof obj.b[1] !== 'number' || typeof obj.c[0] !== 'number' || typeof obj.c[1] !== 'number') throw 'Error3';

    if (obj.a[0] > canvasWidth || obj.b[0] > canvasWidth || obj.c[0] > canvasWidth || obj.a[1] > canvasHeight || obj.b[1] > canvasHeight || obj.c[1] > canvasHeight) throw 'Error4';

}