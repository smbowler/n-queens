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
  var solutions = [];
  var solutionCount = solutions.length; //fixme
  var board = new Board({n: n});
  board.rookCounter = 0;
  
  //edge case of n = 1
  if( n === 1 ){
    solutionCount = 1;
    return solutionCount;
  }

  var recursion = function(rowIndex, colIndex, board){

    //if numberofRooks === n
    // numberOfRooks = numberOfRooks || n;
    console.log('number of rooks', board.rookCounter);

    //base case
    if (board.rookCounter === n){
      solutions.push(board);
      for (var k = 0; k < solutions.length; k++){
        console.log('solutions are', solutions[k].rows());
      }
      
      return;
    }
    //termination statement
    if (rowIndex === n && colIndex === n){
      return;
    }
    //iterate over all the rows
    var rows = board.rows();
    for (var i = rowIndex; i < rows.length; i++){
      //access each row
      var currentRow = rows[i];
      //iterate over current row
      for (var j = 0; j < currentRow.length; j++){
        board.togglePiece(i, j);
        board.rookCounter++;
        console.log(i, 'is', board.get(i));
        //currentBoard after toggle on & check for conflicts 
        if (!board.hasRowConflictAt(i) && !board.hasColConflictAt(j)){
          //call recursive function(currentBoard) (do something to numberOfRooks) on each board spot.
          recursion(i+1, j, board);
        }
        //toggles piece off 
        board.togglePiece(i,j);
        board.rookCounter--;
      }
    }
    return;
  }
  //call the recursive function();
  recursion(0, 0, board);

  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
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
