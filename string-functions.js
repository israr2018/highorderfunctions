const str_data="Java_Script_Script";
// use of the substring , it returns substring from specified location , index ,which include the 
//specified location value
// str_data.substring(fromIndex)
let sub_str=str_data.substring(5);
// out put should be "Script"
console.log(`sub_str=${sub_str}`);
// this out put sub=str  , as the specied index  is not correct
console.log(`sub_str=${str_data.substring(20)}`);
// use of charAt, returns character at specified position
console.log(`demo of charAt=${str_data.charAt(0)}`);
//use of indexOf,  return the index of the first occurence of the string 
//string.indexOf(searchString:string,position?:number)
// for exmaple
console.log(`demo of indexOf=${str_data.indexOf('Script')}`);
console.log(`demo of indexOf=${str_data.indexOf('Script',2)}`);
