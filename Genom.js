var picX = 150;
var picY = 150;
var x = 10;
var population = new Array();

function createRandomRectangles(picX, picY) {

    var obj = {a:[Math.floor(Math.random() * picX), Math.floor(Math.random() * picY)], b:[Math.floor(Math.random() * picX), Math.floor(Math.random() * picY)], c:[Math.floor(Math.random() * picX), Math.floor(Math.random() * picY)]};

    return obj;
}

//createRandomRectangles(picX, picY);

function addPopulation(x) {

    for (var i = 0; i < x; i++) {

        var rec = createRandomRectangles(picX, picY);
        population.push(rec);
    }
    return population;
}

addPopulation(x);
console.log(population);