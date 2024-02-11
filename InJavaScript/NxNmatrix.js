function maxSquarePossible(arr) { // Solution done by Binary Search T.C => O(NlogN) or O(N)
    let n = arr.length;
    function isSquarePossible(size) {
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (arr[i] >= size) {
                count++;
                if (count === size) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
        return false
    }
    let l = 0;
    let r = n - 1;
    let ans = 0;
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (isSquarePossible(mid)) {
            l = mid + 1;
            ans = mid;
        } else {
            r = mid - 1;
        }

    }
    return ans;
}

console.log(maxSquarePossible([6, 5, 5, 6, 2, 2]));


/*
Solution done by Sliding Window brute force approach  T.C => O(N^2) 
function maxSquarePossible(arr) {
    // 1 2 5 3 1 3
    for (let i = arr.length; i > 0; i--) {
        let current = 0;
        let left = 0;
        let right = left + i - 1;
        while (right < arr.length) {
            if (current > right) {
                return i;
            }
            if (arr[current] >= i) {
                current++;
            }
            else {
                left++;
                right++;
                current = left;
            }
        }

    }
    return 0;
}




Problem :
You are given an N × N matrix in which every cell is colored black or white. Columns are numbered from 0
to N-1 (from left to right). This coloring is represented by a non-empty array of integers A. If the K-th
number in the array is equal to X then the X lowest cells in the K-th column of the matrix are black. The
rest of the cells in the K-th column are white. The task is to calculate the side length of the biggest black
square (a square containing only black cells).Write a function:class Solution { public int solution(int[] A);
}that, given an array of integers A of length N representing the coloring of the matrix, returns the side
length of the biggest black square.

Sample Input: [1,2,5,3,1,3]
Output => 2

Sample Input: [3,3,3,5,4]
Output => 3

Sample Input: [6,5,5,6,2,2]
Output => 4
*/