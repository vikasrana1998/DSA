const pairEmUp = (arr, n) => {
    let ans = -1e9;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n / 2; i++) {
        let max = Math.max((arr[i] + arr[n - 1 - i]), (arr[i + 1] + arr[n - 2 - i]));
        if (max > ans) {
            ans = max;
        }
    }
    return ans;
}
let arr = [3, 1, 1, 4];
console.log(pairEmUp(arr, 4));



/*Pair Em Up (Contest)
Time Limit: 2 sec
Memory Limit: 128000 kB
Problem Statement
Given an array of N elements where N is even. You have to pair up the elements into N/2 pairs such that each element
is in exactly 1 pair. You need to find minimum possible X such that there exists a way to pair the N elements and
for no pair sum of its elements is greater than X.
Input
First line contains N.
Second line contains N space separated integers, denoting array.

Constraints:
1 <= N <= 100000
1 <= elements of the array <= 1000000000
Output
Print a single integer, minimum possible X.
Example
Sample Input
4
3 1 1 4

Sample Output
5

Explanation: we can pair (1, 3) and (1, 4) so all pairs have sum less than or equal to 5.
 */
