var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.storage = {};
  this.length = 0;
  this.front = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.end] = value;
  this.length += 1;
  this.end += 1;
};

Queue.prototype.dequeue = function(){
  if(this.length !== 0) {
    this.length -= 1;
  }
  var value = this.storage[this.front];
  delete this.storage[this.front];
  this.front += 1;
  return value;
};

Queue.prototype.size = function(){
  return this.length;
};

