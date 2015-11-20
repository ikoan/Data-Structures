var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create local obj --- linked queueMethods using Object.create
  var obj = Object.create(queueMethods);
  obj.length = 0;
  obj.storage = {};
  obj.front = 0;
  obj.end = 0;
  return obj;

};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.end] = value;
    this.end += 1;
    this.length += 1;
  },
  dequeue: function () {
    var value = this.storage[this.front];
    
    delete this.storage[this.front];
    
    if (this.length === 0) {
      this.length = 0;
    } else {
      this.length -= 1;
    }
    
    this.front += 1;

    return value;
  },
  size: function () {
    return this.length;
  }

};





