module.exports = function reverse (n) {
    let reverseNum = String( Math.abs(n)).split("").reverse().join("");
    if(reverseNum[0] == 0){
        reverseNum = reverseNum.substr(1, reverseNum.length);
    } else{
        return reverseNum;
    }
    return Number(reverseNum);
}
