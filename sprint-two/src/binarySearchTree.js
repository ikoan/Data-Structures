var BinarySearchTree = function(value){
  var obj = Object.create(SearchTreeMedthods);
  obj.right = null;
  obj.left = null;
  obj.value = value;
  return obj

};

var SearchTreeMedthods = {};

SearchTreeMedthods.left = function () {
 return this.left;
};

SearchTreeMedthods.right = function () {
  return this.right;
};

SearchTreeMedthods.insert = function (value) {
  //console.log(value)
  var newNode = BinarySearchTree(value);
 
  function walkDown (node) {
    if ( node.value < value ) {
        if ( node.right ) {
          walkDown(node.right)
        } else {
          node.right = newNode;
        }
    } else {
      if ( node.left ) {
          walkDown(node.left)
        } else {
          node.left = newNode;
        }
    }
  }

  walkDown(this)
  

};

SearchTreeMedthods.contains = function (value) {
  
  function walkDown (node) {
    
    if ( node.value !== value ) {
        if ( node.value > value ) {
          
          if (node.left) {
            return walkDown(node.left)
          } else {
            return false;
          }

        } else {
          
          if (node.left) {
            return walkDown(node.right)
          } else {
            return false;
          }

        }

    } else {
      return true
    }
  }
  return walkDown(this)
};

SearchTreeMedthods.depthFirstLog = function (func) {
    
  function walkDown (node) {
    if (node.value) {
      func(node.value)
    }
    if (node.left) {
      walkDown(node.left)
    } 
    if (node.right) {
      walkDown(node.right)
    }
  }

   walkDown(this)

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
