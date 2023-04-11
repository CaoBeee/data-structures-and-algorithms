/* 
Sean invented a game involving a 2n * 2n matrix where each cell of the matrix contains an integer. 
He can reverse any of its rows or columns any number of times. 
The goal of the game is to maximize the sum of the elements in the n * n submatrix located in the upper-left quadrant of the matrix.

Given the initial configurations for q matrices, help Sean reverse the rows and columns of each matrix 
in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.

Example
matrix = 
[
    [1,2],
    [3,4]
]

1 2
3 4
It is 2 x 2 and we want to maximize the top left quadrant, a 1 x 1 matrix. Reverse row 1:

1 2
4 3
And now reverse column 0:

4 2
1 3
The maximal sum is 4.

Function Description

Complete the flippingMatrix function in the editor below.

flippingMatrix has the following parameters:
- int matrix[2n][2n]: a 2-dimensional array of integers

Returns
- int: the maximum sum possible.

Input Format

The first line contains an integer q, the number of queries.

The next q sets of lines are in the following format:

The first line of each query contains an integer, n.
Each of the next 2n lines contains 2n space-separated integers maxtrix[i][j] in row i of the matrix.

Constraints

1 <= q <= 16
1 <= n <= 128
0 <= matrix[i][j] <= 4096, where 0 <= i,j < 2n.

Sample Input

STDIN           Function
-----           --------
1               q = 1
2               n = 2

                matrix = [
                [112, 42, 83, 119], 
                [56, 125, 56, 49],
                [15, 78, 101, 43], 
                [62, 98, 114, 108]
                    ]

112 42 83 119   
56 125 56 49
15 78 101 43
62 98 114 108

Sample Output

414

Explanation

Start out with the following 2n x 2n matrix:

matrix = [
    [112, 42, 83, 119], 
    [56, 125, 56, 49],
    [15, 78, 101, 43], 
    [62, 98, 114, 108]
]

Perform the following operations to maximize the sum of the n x n submatrix in the upper-left quadrant:

Reverse column 2 ([83,56,101,114] => [114,101,56,83]), resulting in the matrix:

matrix = [
    [112,42,114,119],
    [56,125,101,49],
    [15,78,56,43],
    [62,98,83,108]
    ]

Reverse row 0 ([112,42,114,119] => [119,114,42,112]), resulting in the matrix:

matrix = [
        [119, 114, 42, 112],
        [56, 125, 101, 49],
        [15, 78, 56, 43],
        [62, 98, 83, 108]
        ]

The sum of values in the n x n submatrix in the upper-left quadrant is 119 + 114 + 56 + 125 = 414.
 */


using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Result
{

    /*
     * Complete the 'flippingMatrix' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
     */

    public static int flippingMatrix(List<List<int>> matrix)
    {
        int n = matrix.Count, sum = 0;
        for (int i = 0; i < n / 2; i++)
        {
            for (int j = 0; j < n / 2; j++)
            {
                int max = matrix[i][j];
                //flip i  array
                matrix[i].Reverse();
                if (matrix[i][j] > max)
                {
                    max = matrix[i][j];
                }
                //flip entire array
                matrix.Reverse();
                if (matrix[i][j] > max)
                {
                    max = matrix[i][j];
                }
                //flip i array after flipping entire array
                matrix[i].Reverse();
                if (matrix[i][j] > max)
                {
                    max = matrix[i][j];
                }
                sum += max;
            }
        }
        return sum;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int q = Convert.ToInt32(Console.ReadLine().Trim());

        for (int qItr = 0; qItr < q; qItr++)
        {
            int n = Convert.ToInt32(Console.ReadLine().Trim());

            List<List<int>> matrix = new List<List<int>>();

            for (int i = 0; i < 2 * n; i++)
            {
                matrix.Add(Console.ReadLine().TrimEnd().Split(' ').ToList().Select(matrixTemp => Convert.ToInt32(matrixTemp)).ToList());
            }

            int result = Result.flippingMatrix(matrix);

            textWriter.WriteLine(result);
        }

        textWriter.Flush();
        textWriter.Close();
    }
}
