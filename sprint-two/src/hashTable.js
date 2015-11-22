var HashTable = function(){
  //this is the size of my container
  this._limit = 8;
  //this is a variable that contains the LimitedArray() that will create a storage array with the size of this._limit
  this._storage = LimitedArray(this._limit);
};

//Insert takes in a key and value and puts it into hash table
HashTable.prototype.insert = function(k, v){
  // myhash function arguments are (str, max)... the k, a key, is the str, a string:
  //i will be equal to a number spit out by the hash function after computing:
  var i = getIndexBelowMaxForKey(k, this._limit);
 

  //step 1: Check if bucket is at index of storage
  var bucket = this._storage.get(i);
  
  //if the box exists at that index:
  if( !bucket ) {
    var newBucket = [];
  
  // set bucket at index of storage 
  this._storage.set(i, newBucket);    
  bucket = this._storage.get(i);
  } 

  // Step 2 check the bucket tuples and see if there is a match of key
  var isFound = false;
  
  _.each(bucket, function (tuple) {
    if ( tuple[0] === k ) {
      // if true
      tuple[1] = v;
      isFound = true;
    }
  });

  // push add tuple to bucket // if no tuple with same key was found
  if (!isFound) {
    var tuple = [k,v];  
    bucket.push(tuple);
  }

  console.log(bucket[0])
     
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i); 
  
  if (!bucket) {
    return null;
  }

  var value;

  _.each(bucket, function (tuple) {
    if (tuple[0] === k) {
      value = tuple[1];
    }
  });

  if (value) {
    return value;
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i); 
  console.log(bucket)
  if (!bucket) {
    return;
  }



  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      console.log("found",i,bucket);
      bucket.splice(i,1);
    }
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// step by step
// 1) first we get the index of the key input from hash function
// 2) a) check if the index already has an array, if it does, just push [key, value] into the array
//    b) if an array does not exist at this index in the storage, create an array 
// 3) push the [key,value] into that array that is at index in storage


/*if we want to find a particular key that exists inside an array > 1 in an index in the storage, 
we can loop through that array to find key and return value*/


// //for the callback, look for the index and then get the storage and add to end of storage:
      // this._storage.each(function(element, index, storage){
      //   if(index === i){
      //     //RiGHT: I want to push the value into the element of the index, which should be an ARRAY:
      //     element.push(value);
      //   }

      // });

      //Then check is the length is greater than 0, if so, iterate and check if key aleady exists:
      //If the length is greater than 0, it contains other tuples:


    //    if(box.length > 0){
    //     this._storage.each(function(){

    //     });
    //   }

    //   //if box exists push the value into the box:
    //   box.push(keyValue);

    
    // } else {
    //   //else put the tuple into a box and create these in the index:
    //   this._storage.set(i, valueWithOuterArray);
    // }


//var keyValue = [k,v];

  // //this variable contains the tuple inside an array, which will be inserted in an index that does not have an array "bucket"
  // var valueWithOuterArray = [[k,v]];
  