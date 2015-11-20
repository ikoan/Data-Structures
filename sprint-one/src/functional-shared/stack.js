var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    storage: {},
    length: 0,
  };
  _.extend(obj, queueMethods);
  
  return obj;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.length] = value;
    this.length += 1;
  },
  pop: function () {
    
    if (this.length === 0) {
      this.length = 0;
    } else {
      this.length -= 1;
    }

    var value = this.storage[this.length];
    delete this.storage[this.length];
    return value;
  },
  size: function () {
    return this.length;
  }
};



