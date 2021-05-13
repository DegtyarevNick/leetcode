var transposeMap = function(matrix) {
    return matrix[0].map((value,  index) => matrix.map(revert => revert[index]));
};
console.log(transposeMap([[1,2,3],[4,5,6],[7,8,9]]));
console.log(transposeMap([[1,2,3],[4,5,6]]));



var transposeForOf = function(matrix) {
    let transMatrix = [];
    for (const indexCols of matrix[0].keys()) {
        if (!transMatrix[indexCols]) transMatrix[indexCols] = [];
        for (const indexRow of matrix.keys())  {
            transMatrix[indexCols][indexRow] = matrix[indexRow][indexCols];
        }
    }    
    return transMatrix;
};

console.log(transposeForOf([[1,2,3],[4,5,6],[7,8,9]]));
console.log(transposeForOf([[1,2,3],[4,5,6]]));