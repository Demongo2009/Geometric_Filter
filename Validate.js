var test = {a:[6,7],b:[25,70],c:[9,34]};
var picX = 60;
var picY = 100;


function validate(obj, picX, picY) {

    if (typeof obj !== 'object') throw 'Error1';

    if (obj.hasOwnProperty('a') !== true || obj.hasOwnProperty('b') !== true || obj.hasOwnProperty('c') !== true) throw 'Error2';

    if (typeof obj.a[0] !== 'number' || typeof obj.a[1] !== 'number' || typeof obj.b[0] !== 'number' || typeof obj.b[1] !== 'number' || typeof obj.c[0] !== 'number' || typeof obj.c[1] !== 'number') throw 'Error3';

    if (obj.a[0] > picX || obj.b[0] > picX || obj.c[0] > picX || obj.a[1] > picY || obj.b[1] > picY || obj.c[1] > picY) throw 'Error4';

}

validate(test, picX, picY);

