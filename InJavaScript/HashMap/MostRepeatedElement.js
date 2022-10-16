let arr = [1, 3, 2, 1, 4, 1, 2, 2, 2, 2];
let len = arr.length;

let hm = new Map();

for(let i = 0; i<len; i++){
    if(hm.has(arr[i])){
        hm.set(arr[i], hm.get(arr[i])+1);
    }
    else{
        hm.set(arr[i],1);
    }
}

let maxRep = 0;
let ans = -1;

hm.forEach((value, key) => {
    if(maxRep < value){
        ans = key;
        maxRep = value;
    }
});

console.log(ans);