
function KadaneAlgo(arr, n){
    let maxSofar = Number.MIN_SAFE_INTEGER;
    let maxTillNow = 0;
    for(let i = 0; i<n; i++){
        maxTillNow = maxTillNow + arr[i];
        if( maxTillNow > maxSofar){
            maxSofar = maxTillNow;
        }
        if(maxTillNow < 0){
            maxTillNow = 0;
        }
    }
    return  maxSofar;
}

let arr = [5, 7, -6, -3, 6, -9, 10];
let n = arr.length;

console.log(KadaneAlgo(arr, n));