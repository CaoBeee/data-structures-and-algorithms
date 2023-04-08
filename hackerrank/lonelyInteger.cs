/* 
Given an array of integers, where all elements but one occur twice, find the unique element.

Example

a = [1,2,3,4,3,2,1]

The unique element is 4.

Function Description

Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):

int a[n]: an array of integers

Returns

int: the element that occurs only once

Input Format

The first line contains a single integer, , the number of integers in the array.
The second line contains  space-separated integers that describe the values in a.

Constraints

i <= n < 100

It is guaranteed that n is an odd number and that there is one unique element.

0 <= a[i] <= 100, where 0 <= i < n. 
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
     * Complete the 'lonelyinteger' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY a as parameter.
     */

    public static int lonelyinteger(List<int> a)
    {
        int res = 0;
        foreach (int i in a)
        {
            if (a.IndexOf(i) == a.LastIndexOf(i))
            {
                res = i;
            }
        }
        return res;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int n = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> a = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(aTemp => Convert.ToInt32(aTemp)).ToList();

        int result = Result.lonelyinteger(a);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
