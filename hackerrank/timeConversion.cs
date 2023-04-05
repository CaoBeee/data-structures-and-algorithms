/* 
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
s = '12:01:00PM'
Return '12:01:00'.

s= '12:01:00AM'
Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 12 hour format
Returns

string: the time in 24 hour format
Input Format

A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ss:AM or hh:mm:ssPM).

Constraints

All input times are valid
Sample Input

07:05:45PM
Sample Output

19:05:45 
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
     * Complete the 'timeConversion' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING s as parameter.
     */

    public static string timeConversion(string s)
    {
        bool isPm = s.Contains("PM");
        bool isAm = s.Contains("AM");
        int hour = Int32.Parse(s.Substring(0, 2));
        string doubleZero = "00";
        string minute = s.Substring(3, 2);
        string second = s.Substring(6, 2);
        string convertedTime = "";

        if (isPm && hour == 12)
        {
            convertedTime = ($"{hour}:{minute}:{second}");
        }
        else if (isPm)
        {
            hour += 12;
            convertedTime = ($"{hour}:{minute}:{second}");
        }
        else if (isAm && hour == 12)
        {
            convertedTime = ($"{doubleZero}:{minute}:{second}");
        }
        else
        {
            convertedTime = ($"{s.Substring(0, 2)}:{minute}:{second}");
        }
        return convertedTime;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string s = Console.ReadLine();

        string result = Result.timeConversion(s);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
