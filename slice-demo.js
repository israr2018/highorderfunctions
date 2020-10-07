/*slice method returns a section of the array
array.slice(start?:number,end?:number)
@start param: the position from where the section will start
this is include in the section 
@end param: the position where the section ends
this is exclude  in the section

*/
let names=['Israr',"Tahir",'Tanweer','Wahab'];
//          0       1           2       3

console.log(names.slice(1,3));// out put=["Tahir","Tanweer"]
console.log(names.slice(1));// out put=["Tahir","Tanweer","Wahab"]
console.log(names.slice(0,3));// out put=["Israr","Tahir","Tanweer"]
// it does not change the original array

console.log("names===",names);