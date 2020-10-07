function Palindrome(str) { 
    
    let copyStr= str.replace(/\s+/g, '');
   
    copyStr=copyStr.split("");

    let len=copyStr.length-1;
    for( let i=0;i<copyStr.length-1;i++,len--){
      
        if(copyStr[i]!==copyStr[len]){
            return false;
        }
    }
      return true;
    
    }
    
// console.log(Palindrome(test1));
function LetterCount(str){
const words=str.split(" ");

let maxLength=0;
let atIndex=0;
for(let i=0;i<=words.length-1;i++){
    if(words[i].length > maxLength){
        maxLength=words[i].length;
        atIndex=i;
    }
}

return words[atIndex];
}
let test="No Words";
function letterinSubString(subStr){
    console.log(subStr);
 console.log(subStr.length);
}
console.log(LetterCount(test));