const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(args) {
let argLength = args.length;
let sum =0;
for(i=0; i<argLength; i++){ sum += args[i]}
return sum;
};

const multiply = function(args) {
  let argLength = args.length;
let product =1;
for(i=0; i<argLength; i++){ product *= args[i]}
return product;
};


const power = function(x,y) {
let result = x
for (i=1;i<y;i++){
result *= x
}
	return result
};

const factorial = function(x) {
  if(x == 0 ){
    return 1;
  }
  else if (x <= 2){
    return x;
  }
  else{
    return (x * (factorial(x-1)));
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
