var Tree = function(value){
  var newTree = {};
  newTree.value = value;

 //{value: value};

  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me


  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  //newTree contains the object returned from Tree(); This object has everything from the Tree(): object containing value input, children array, and the methods.
  var nextTree = Tree(value);
  this.children.push(nextTree);
};

treeMethods.contains = function(target) {

  function findTarget(tree) {
    var isFound = false;
    searchTree(tree);
    function searchTree(tree) {
      if (tree.value === target) {
        isFound = true;
      } else if (tree.children.length) {
        _.each(tree.children, function (childTree) {
          searchTree(childTree); 
        });
      }
    }
    
    return isFound;
  }
  
  return findTarget(this);
};




/*
 * Complexity: What is the time complexity of the above functions?
 */



