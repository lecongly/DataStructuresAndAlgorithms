//Time = O(n), Space = O(1)
//Because just store max  2x26 letters, it is constant

function isIsomorphic(s: string, t: string): boolean {
    if(s.length!==t.length) return false;
    const sHash ={};
    const tHash = {};
    for(let i=0;i<s.length;i++){
        let charS = s[i];
        let charT = t[i];
        if(!sHash[charS]) sHash[charS] = charT;
        if(!tHash[charT]) tHash[charT] = charS;
        if(sHash[charS]!==charT || tHash[charT]!==charS) return false;
    }
    return true;
};
console.log(isIsomorphic("egge","addd"))