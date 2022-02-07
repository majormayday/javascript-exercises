const findTheOldest = function (people) {
  let todayDate = new Date();
  let todayYear = todayDate.getFullYear();

  let oldest = people.reduce(((prev, curr) => {
    if ((curr.yearOfDeath - curr.yearOfBirth) > ((prev?.yearOfDeath ?? todayYear) - prev?.yearOfBirth)) { return curr }
    else { return prev };
  }))
  return oldest;
};



// Do not edit below this line
module.exports = findTheOldest;
