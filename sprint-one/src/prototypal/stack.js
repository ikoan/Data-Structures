var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.length = 0;
  obj.storage = {};
  return obj;

};

var stackMethods = {
  pop: function(){
    if(this.length === 0){
      this.length = 0;
    } else{
    this.length -= 1;
  }
    var value = this.storage[this.length];
    delete this.storage[this.length];
    return value;
  },
  push: function(value){
    this.storage[this.length] = value;
    this.length += 1;
  },
  size: function(){
    return this.length;
  }
};


