const reverseString = function(string) {
let lengthString = string.length;
let revString = '';
for (i = lengthString; i >= 0; i--){
revString = revString.concat(string.charAt(i));
}


return revString;
};

// Do not edit below this line
module.exports = reverseString;
