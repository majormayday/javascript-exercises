const palindromes = function (string) {
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
    let cleanString = string.replace(regex,"");
    let splitString = cleanString.split('');
    let len = splitString.length;
    let flippedString = [];

    for (i=0; i < len;i++){
        let popped = splitString.pop();
        flippedString.push(popped);
    }

    if(flippedString.join("").toLowerCase() == cleanString.toLowerCase()){
     return true
    }
    else {return false}
};
// Do not edit below this line
module.exports = palindromes;
