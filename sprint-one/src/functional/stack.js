var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[length] = value;
    length += 1;
  };

  someInstance.pop = function(){
    // remove last element
    if (length === 0) {
     length = 0;
    } else {
      length -= 1;
    } 
    var returnValue = storage[length];
    delete storage[length] 
    return returnValue;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
