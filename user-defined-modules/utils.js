function getInUpperCase(myStringArray){
    let newArray=[];
    for(const data of myStringArray){
        newArray.push(data.toUpperCase());
    }
    return newArray
}

function getInLowerCase(myStringArray){
    let newArray = [];
    for(const data of myStringArray){
        newArray.push(data.toLowerCase());
    }
    return newArray
}

function getIndexPosition(myStringArray, element){
    return myStringArray.indexOf(element);
}

module.exports = {getInUpperCase, getInLowerCase, getIndexPosition};