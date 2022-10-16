const MSdivide = (arr, left, right) => {
    if (left >= right) {
        return;
    }
    let mid = left + Math.floor((right - left) / 2);
    MSdivide(arr, left, mid);
    MSdivide(arr, mid + 1, right);
    MSconquer(arr, left, mid, right);
}

const MSconquer = (arr, sIdx, mid, eIdx) => {
    let mergedArray = [];
    let idx1 = sIdx;
    let idx2 = mid + 1;
    while ((idx1 <= mid) && (idx2 <= eIdx)) {
        if (arr[idx1] <= arr[idx2]) {
            mergedArray.push(arr[idx1++]);
        }
        else {
            mergedArray.push(arr[idx2++]);
        }
    }

    while (idx1 <= mid) {
        mergedArray.push(arr[idx1++]);
    }

    while (idx2 <= eIdx) {
        mergedArray.push(arr[idx2++]);
    }

    for (let i = 0, j = sIdx; i < mergedArray.length; i++, j++) {
        arr[j] = mergedArray[i];
    }
}

let arr = [5, 1, 2, 7, 3, 5];

MSdivide(arr, 0, arr.length - 1);
console.log(arr);

// TC => O(NlogN)  SC => O(N)