/*
JavaScript | Array reduce() Method
The array reduce() method in JavaScript is used to reduce the array to a single value 
and executes a provided function for each value of 
the array (from left-to-right) and the return value of the function is stored in an accumulator.

Syntax:

array.reduce( function(total, currentValue, currentIndex, arr), initialValue )
Parameter: This method accepts two parameters as mentioned above and described below:

function(total, currentValue, index, arr): It is the required parameter and used to run for each element of array. It contains four parameter which are listed below:
total: It is required parameter and used to specify the initialValue, or the previously returned value of the function.
currentValue: It is required parameter and used to specify the value of the current element.
currentIndex: It is optional parameter and used to specify the array index of the current element.
arr: It is optional parameter and used to specify the array object the current element belongs to.
initialValue: It is optional parameter and used to specify the value to be passed to the function as the initial value.
*/

const ages=[33,12,20,16,5,54,33,19,70,25];
let ageSum=0;
for(let i=0;i<ages.length;i++){
    ageSum+=ages[i];
}
console.log("********with out reduce*************");
console.log(ageSum);
const ageSum2=ages.reduce((total,age)=>total+age,0);
console.log("************with reduce high order function**************");
console.log(ageSum2);
// example-2
const numbers=[10,20,30,40];
function sum(total,num){
    return total+num;
}
const total=numbers.reduce(sum,5);
console.log("********output example 2***************");
console.log(total);
//example-3
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const total_sum=numbers.reduce(reducer,2);
console.log(total_sum);
// example-4  using arrow functions
const total_sum2=numbers.reduce((acc,value)=>acc+value,10);
console.log("************out of example-4***************");
console.log(total_sum2);
//example-5
let data = [
    {
      country: 'China',
      pop: 10,
    },
    {
      country: 'India',
      pop: 20,
    },
    {
      country: 'USA',
      pop: 30,
    },
    {
      country: 'Indonesia',
      pop: 40,
    }
  ];
const except_china= data.reduce((acc,val)=> { return val.country==='China'?acc:acc+val.pop},0);
console.log("********Total Population Excep China");
console.log(except_china);