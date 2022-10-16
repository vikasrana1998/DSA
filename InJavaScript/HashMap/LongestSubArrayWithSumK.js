const longestSubArrWithSumK = (arr, k) => {
    let hm = new Map();
    let sum = 0;
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum == k) {
            ans = i + 1;
        }

        if (!hm.has(sum)) {
            hm.set(sum, i);
        }

        if (hm.has(sum - k)) {
            let len = i - (hm.get(sum - k));
            if (ans < len) {
                ans = len;
            }
        }
    }
    return ans;
}
let arr = [10, 5, 7, 2, 1, 4];
console.log(longestSubArrWithSumK(arr, 15));

/*
Problem Statement
Given an array containing N integers and an integer K. Your task is to find the length of the longest Sub-Array with
sum of the elements equal to the given value K.

Input
The first line of input contains an integer T denoting the number of test cases. Then T test cases follow. Each test
case consists of two lines. The first line of each test case contains two integers N and K and the second line
contains N space-separated elements of the array.

Constraints:-
1<=T<=500
1<=N,K<=10^5
-10^5<=A[i]<=10^5

Sum of N over all test cases does not exceed 10^5

Output
For each test case, print the required length of the longest Sub-Array in a new line. If no such sub-array can be
formed print 0.

Example
Sample Input:
3
6 15
10 5 2 7 1 9
6 -5
-5 8 -14 2 4 12
3 6
-1 2 3

Sample Output:
4
5
0
 */