const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}


const fromDollarToYen = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInEuro * 127.9;
    //return the dollar value
    return valueInYen;
}

const fromYenToPound = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInEuro * 0.8;
    //return the dollar value
    return valueInPound;
}
 
module.exports = { sum, fromEuroToDollar , fromDollarToYen , fromYenToPound}