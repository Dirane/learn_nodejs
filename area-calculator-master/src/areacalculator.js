const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    // write logic here
    switch(choice){
        case 'square':
            if(side !== null && side > 0){
            area = side * side;}
            else {
                area = -1;
              }
            break;
        case 'rectangle':
            if(length !== null && length > 0 && breadth !== null && breadth > 0 ){
            area = length*breadth;}
            else {
                area = -1;
              }
            break;
        case 'circle':
            if(radius !== null && radius > 0){
            area = pi*radius*radius;}
            else {
                area = -1;
              }
            break;
        default:
           area = -1;
           break;
    }
    // note that you check the values passed are not null before performing any operation on them

    return area
    
}
module.exports = {calculateArea}
