const utils = require('./utils');

var myStringArray = ["john", "jenny", "BEN", "Micky", "roBERT"];

function getCapital(myStringArray){
    return utils.getInUpperCase(myStringArray);
}

console.log(getCapital(myStringArray));

function getLower(myStringArray){
    return utils.getInLowerCase(myStringArray);
}

console.log(getLower(myStringArray));

function getIndext(myStringArray, element){
    return utils.getIndexPosition(myStringArray, element);
}

console.log(utils.getIndexPosition(myStringArray, 'jenny'));