// Built In function constructors

// It is best not to use Built in function constructors 
// They can be coerced into different types
// Any comparison needs to be against the same type ie a===b don't compare a==b


String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
};

console.log("John".isLengthGreaterThan(3));

// Javascript won't convert a number to an object automatically like it does converting a string
Number.prototype.isPositive = function (limit) {
  return this > 0;
};