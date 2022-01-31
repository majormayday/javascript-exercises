const sumAll = function(num1, num2) {
let sumRange = 0;

if (Math.sign(num1) == -1 || Math.sign(num2) == -1 ||
    typeof(num1) != 'number' || typeof(num2) != 'number') {
        return 'ERROR'
    }

let minNum = Math.min(num1, num2);
let maxNum = Math.max(num1, num2);

 for (i = minNum; i <= maxNum ; i++) {
     sumRange = sumRange + i;
 }
return sumRange
};
// Do not edit below this line
module.exports = sumAll;