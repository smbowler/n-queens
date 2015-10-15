/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({n: n}); //fixme
  var numberOfRooks = n;
  var rows = solution.rows();

  for( var i = 0; i < rows.length; i++ ){
    var currentRow = rows[i];

    for( var j = 0; j < currentRow.length; j++ ){
      solution.togglePiece(i, j);
      if (solution.hasRowConflictAt(i) || solution.hasColConflictAt(j)){
        solution.togglePiece(i, j);
        continue;
      }
      numberOfRooks--;
    }

  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  if (numberOfRooks === 0){
    return rows;
  }
  return 'Error';
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme
  var solutions = [];
  var startingPoint = new Board({n: n});
  //create an emptyboard

  var recursion = function(rowIndex, colIndex, currentBoard){
    //termination equation


    //base case

      //if numberofRooks === n

        //push currentboard into solutions

        //return;

    //iterate over all the rows

      //iterate over each index in each row

        //currentBoard after toggle on & check for conflicts 

        //call recursive function(currentBoard) (do something to numberOfRooks) on each board spot.

        //this.togglePiece(i, j) off 
        
          //decrement numberofRooks


  }
   //call the recursive function();

  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutions.length;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
