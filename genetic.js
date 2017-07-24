var test={
     a:undefined,
     b:[2,2],
     c:[3,3],
};
console.log(typeof 1);
var check_genome= function (obj) {
    if(obj.hasOwnProperty("a")===false || obj.hasOwnProperty("b")===false || obj.hasOwnProperty("c")===false)
        return false;




    if(typeof obj.a[0]!== "number" || typeof obj.a[1]!== "number" || typeof obj.b[0]!=="number"
    || typeof obj.b[1]!== "number" || typeof obj.c[0]!== "number" || typeof obj.c[1]!=="number")
        return false;
    return true;

}

console.log(check_genome(test));