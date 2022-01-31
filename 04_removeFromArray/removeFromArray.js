const removeFromArray = function(array, ...args) {

    let result = array;
    lengthArgs = args.length;
    for (i = 0 ; i < lengthArgs; i++){
    result = result.filter(index => index !== args[i]);
    }
   
    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
