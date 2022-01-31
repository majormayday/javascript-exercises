const ftoc = function(deg) {
  let cTemp = (deg -32) * 5/9
 return Number(cTemp.toFixed(1));
};

const ctof = function(deg) {
 let fTemp = (deg * (9/5) + 32);
 return Number(fTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
