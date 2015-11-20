var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.length = 0;
  this.storage = {};

};

// create link  FNs

Stack.prototype.pop = function () {
  if (this.length !== 0) {
    this.length -= 1;
  }
  var value = this.storage[this.length];
  
  return value;
};
Stack.prototype.push = function (value) {
  this.storage[this.length] = value;
  this.length += 1;
};
Stack.prototype.size = function () {
  return this.length;
};




