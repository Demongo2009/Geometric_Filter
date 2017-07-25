function validate(obj, picX, picY) {

    if (typeof obj !== 'object') throw 'Error1';

    if (obj.hasOwnProperty('a') !== true || obj.hasOwnProperty('b') !== true || obj.hasOwnProperty('c') !== true) throw 'Error2';

    if (typeof obj.a[0] !== 'number' || typeof obj.a[1] !== 'number' || typeof obj.b[0] !== 'number' || typeof obj.b[1] !== 'number' || typeof obj.c[0] !== 'number' || typeof obj.c[1] !== 'number') throw 'Error3';

    if (obj.a[0] > picX || obj.b[0] > picX || obj.c[0] > picX || obj.a[1] > picY || obj.b[1] > picY || obj.c[1] > picY) throw 'Error4';

}


