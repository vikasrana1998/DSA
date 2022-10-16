const anagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    let hm = new Map();
    for (let i = 0; i < str1.length; i++) {
        if (hm.has(str1.charAt(i))) {
            hm.set(str1.charAt(i), hm.get(str1.charAt(i)) + 1);
        }
        else {
            hm.set(str1.charAt(i), 1);
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (!hm.has(str2.charAt(i))) {
            return false;
        }
        else {
            if (hm.get(str2.charAt(i)) === 1) {
                hm.delete(str2.charAt(i));
            }
            else {
                hm.set(str2.charAt(i), hm.get(str2.charAt(i)) - 1);
            }
        }
    }
    if (hm.size !== 0) {
        return false;
    }
    return true;
}
let str1 = "vicky";
let str2 = "civyk";
console.log(anagram(str1, str2));
