let FindFirstAndLast = (arr,elementTofind) =>  {
    let ans = [];
    let start = BinarySearch(arr,elementTofind, true);
    let end = BinarySearch(arr,elementTofind, false);

    ans.push(start);
    ans.push(end);
    return ans;
}

let BinarySearch = (arr, elementTofind, leftIndicator) => {
    let ans = -1;
    let start = 0;
    let end = arr.length - 1;
    while(start<=end){

        let mid = Math.floor(start + (end-start) / 2);

        if(elementTofind < arr[mid]){
            end = mid-1;
        }

        else if(elementTofind > arr[mid]){
            start = mid+1;
        }

        else{
            ans = mid;
            if(leftIndicator){
                end = mid-1;
            }
            else{
                start = mid+1;
            }
        }
    }
    return ans;
}

let arr = [1, 3, 5, 5, 5, 5, 67, 123, 125];
let elementTofind = 5;

let output = FindFirstAndLast(arr,elementTofind);
console.log(output);

/*
Given a sorted array arr containing n elements with possibly duplicate elements, the task is to find indexes of first
and last occurrences of an element x in the given array.

Example 1:

Input:
n=9, x=5
arr[] = { 1, 3, 5, 5, 5, 5, 67, 123, 125 }
Output:  2 5
Explanation: First occurrence of 5 is at index 2 and last occurrence of 5 is at index 5.


Example 2:

Input:
n=9, x=7
arr[] = { 1, 3, 5, 5, 5, 5, 7, 123, 125 }
Output:  6 6

Your Task:
Since, this is a function problem. You don't need to take any input, as it is already accomplished by the driver code.
You just need to complete the function find() that takes array arr, integer n and integer x as parameters and returns
the required answer.
Note: If the number x is not found in the array just return both index as -1.



Expected Time Complexity: O(logN)
Expected Auxiliary Space: O(1).



Constraints:
1 ≤ N ≤ 107
 */