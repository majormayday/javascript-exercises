const repeatString = function(string,num) {
let stringRepeat = '';

if (num < 0){
    return 'ERROR';
}
for (i = 0; i < num ; i++){
    stringRepeat = stringRepeat.concat(string);
}

return stringRepeat;
};

// Do not edit below this line
module.exports = repeatString;
