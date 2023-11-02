function flippingMatrix(matrix) {

    const size = Math.min(matrix.length, matrix[0].length) / 2;
    let reverse = 3
    
    for(let i=matrix.length-1; i>=0; i--) {
        //console.log(matrix[reverse-i][size]);
        //console.log(matrix[i][size]);
        matrix[reverse - i][size] = (matrix[i][size])
    }
    //console.log(matrix);
    
    // reverse column debe quedar [114,101,56,83]
    //reverse row debe ser asi [119, 114, 42, 112]
    // la suma debe ser el cuadrante izquierdo de arriba
    // 119, 114, 56, 125
    

    /* // Reverse row 0
    matrix[0] = matrix[0].slice().reverse();
    console.log(matrix[0]); */

   

    //return sum;
   
}

/* let matrix = [
    [ 112, 42, 83, 119 ],
    [ 56, 125, 56, 49 ],
    [ 15, 78, 101, 43 ],
    [ 62, 98, 114, 108 ]
  ] */

//console.log(flippingMatrix(matrix));


//perform the following operations to maximize the sum of the n x n submatrix in the upper-left quadrant
//reverse colum 2 resulting 114, 101 56 83
//reverse row 0 112 42 114 119 
//the sum of values in the n x n submatrix in the upper-left quadrant is 
//119 + 114 + 56+ 125 = 414matrix[i][size] = matrix[i][size].reverse();