const QSpivot = (arr, sIdx, eIdx) => {
    if (sIdx < eIdx) {
        let partitonIdx = QSpartition(arr, sIdx, eIdx);
        QSpivot(arr, sIdx, partitonIdx - 1);
        QSpivot(arr, partitonIdx + 1, eIdx);
    }
}

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const QSpartition = (arr, sIdx, eIdx) => {
    let pivot = arr[eIdx];
    let i = sIdx - 1;
    for (let j = sIdx; j < eIdx; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, eIdx);
    return i + 1;
}

let arr = [5, 4, 1, 3, 2];
QSpivot(arr, 0, arr.length - 1);
console.log(arr);



// TC - O(N^2)  SC - O(logN)