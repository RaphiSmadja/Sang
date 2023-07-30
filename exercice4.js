function pairOuImpair(nbT) {
    if (nbT % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


// mot palindrome radar eye

function palindrome(str) {
    let reverseStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    if (reverseStr === str) {
        return true
    } else {
        return false
    }
}

console.log(palindrome("non"))
console.log(palindrome("oui"))
console.log(palindrome("radar"))
console.log(palindrome("totor"))