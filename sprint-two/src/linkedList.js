var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    
    // Do we need to set head
    if ( !list.head ){
      list.head = node; 
    }   

    // If there is already a tail update next value to newly created node
    if (list.tail) {
      list.tail.next = node; 
    } 

    // updating tail with the new created node
    list.tail = node;

  };

  list.removeHead = function(){
    if ( list.head ) {
      var value = list.head.value;
      list.head = list.head.next;
      return value;
    }
  };

  list.contains = function(target){
    var isFound = false;

    if ( list.head ) {
      isFound = checkNode(list.head);
    } else {
      return isFound;
    }

    function checkNode (node) { 
        
        if ( node.value === target ) {
          return true;
        } 
        if ( node === list.tail ) {
          return list.tail.value === target;
        } 
        else {
          return checkNode(node.next);
        }
      }

    return isFound;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// HEAD -> obj1 -> obj2 -> obj3 -> TAIL.next -> obj4 // TAIL






