/*
Arrays in JavaScript consist of a list of elements. 
JavaScript has many useful built-in methods to work with arrays.
 Methods that modify the original array are known as mutator methods, 
 and methods that return a new value or representation are known as accessor methods.
  --------------push vs unshift--------------
The push methods append a new item at the end of the array
The unshift method append a new item  at the start of the array
---------------shift vs pop------------------
The shift method remove the first element from the array and return the removed element.
The pop methdo remove the last element from the array.
*/
const numbers=[10,20,30,40,50];
const numbers2=[100,200,300,400];
// shift remove the first element from the array
 const first_element=numbers.shift();

 console.log(" ***********The out put should be 10********");
 console.log(first_element);
 console.log("numbers=",numbers); //out put  [20,30,40,50]
// The pop removes the last element from the array
 const last_element=numbers2.pop();
 console.log("numbers2=",numbers2)// [100,200,300];

 // use  of unshift function , it add an element to the start of the array
numbers.unshift(2);
console.log("**********after unshift 2 into numbers array, it should be [10,20,30,40]");
console.log(numbers);
// use of the push method ,it add a new item at the end of the array  and return array length.

const size_numbers=numbers.push(50);
console.log("*******size of the new array after pushing 50*************");
console.log(`size_numbers=${size_numbers}`);
console.log("**********new array after pushing 50********");
console.log(`numbers=${numbers}`);
/********Quiz: write a funciton to check if a string is palindrom**************** */
const str_data="Dad";

const check_palindrom=(data)=>{
data=data.toLowerCase();
    let is_palindrom=true;
for(let i=0,j=data.length-1;i<data.length;){

    if(data[i]!==data[j]){
        is_palindrom=false;
        break
    }
    i++;
    j--;
    return is_palindrom;
}}
console.log("***********check_palindrom result*************");
console.log(check_palindrom(str_data));
