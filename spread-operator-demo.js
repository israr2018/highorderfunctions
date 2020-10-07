/*
    Spread operator/ Rest operator
*/
//use-1: add the elements of the existing array into
// a new array 
const certsToAdd=['Algorithm and Data Structures',
'Front End Libraries'
];
const certifications=[...certsToAdd,'Data Visualization','APIs and Micrososervice',
'Quality Assurance and IT'
]
console.log("*use of spread operator adding elements of an existing array into new array *********");
console.log(certifications);
//use-2: spread operator can be used to pass the elements of an array to 
// a function as arguments
const addThreeNumbers=(x,y,z)=>{
return x+y+z;
}
const numbers=[1,2,3];
console.log("********spread operator can be use to pass array elements as params to function********");
console.log(addThreeNumbers(...numbers));// out put 6
// uses- 3: copy array
let arr=[1,2,3];
let arr2=[...arr];
arr2.push(4)
console.log(arr2);// out put [1,2,3,4]
// user-4 concatenate array
let numbers1=[2,4,6];
let numbers2=[8,10];
//numbers1.concat(numbers2);
//or
numbers1=[...numbers1,...numbers2];
console.log("number1=",numbers1);//[2,4,6,8,10]
const INITIAL_VALUES={
        email:"",
        password:""
};
const values={
email:"",
password:""
};
const result={
    ...values
   
};
console.log(result);

let new_obj=Object.assign({},values);
console.log("new_obj:",new_obj);