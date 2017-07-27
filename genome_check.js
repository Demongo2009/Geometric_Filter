var test={
     a:[2,2],
     b:[2,2],
     c:[3,3],
};
var check_genome= function (obj) {

    if(typeof obj !== "object")return false;

    if(obj.hasOwnProperty("a")===false || obj.hasOwnProperty("b")===false || obj.hasOwnProperty("c")===false)
        return false;
    if(typeof obj.a === "undefined" || typeof obj.b === "undefined" || typeof obj.c === "undefined")
        return false;

    if(typeof obj.a[0]!== "number" || typeof obj.a[1]!== "number" || typeof obj.b[0]!=="number"
    || typeof obj.b[1]!== "number" || typeof obj.c[0]!== "number" || typeof obj.c[1]!=="number")
        return false;

    if(obj.a[0]>=canvas_width || obj.a[1]>=canvas_height || obj.b[0]>=canvas_width ||
    obj.b[1]>=canvas_height || obj.c[0]>=canvas_width || obj.c[1]>=canvas_height)return false;

    return true;

}



