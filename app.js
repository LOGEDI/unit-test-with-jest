console.log("Hello World")
const sum=(a,b)=> {
    return a+b
}
console.log(sum(7,3))
module.exports={sum};

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function (ValueInDollar) {
    let   ValueInYen= ValueInDollar * 106.58;
    return ValueInYen;
}

const fromYenToPound = function (ValueInYen) {
    let   ValueInpound= ValueInYen * 159.87;
    return ValueInpound;
}


module.exports ={sum,fromEuroToDollar,fromDollarToYen,fromYenToPound}




