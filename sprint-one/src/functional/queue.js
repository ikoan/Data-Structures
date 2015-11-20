var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var front = 0;
  var end = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    
    storage[end] = value;
    end += 1;
    length += 1;
    
  };

  someInstance.dequeue = function(){
    var value = storage[front];
    delete storage[front];
    front += 1;
    if(length === 0){
      length = 0;
    }else{
      length -= 1;
    }
    
    return value;
  };

  someInstance.size = function(){
   return length;
  };

  return someInstance;
};


