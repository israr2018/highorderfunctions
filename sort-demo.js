/*
arr.sort() function is used to sort the array in place 
in a given order according to the compare() function. If the function is omitted 
then the array is sorted in ascending order.
compareFunction(a,b) < 0
Then a comes before b in the answer ( ie return -1).
compareFunction(a,b) > 0
Then b comes before a in the answer (ie return 1)

compareFunction(a,b) = 0
Then the order of a and b remains unchanged.
*/
const companies=[ 
    {name:"Company 1",category:"Finance",start:"1990",end:"2010"},
    {name:"Company 2",category:"Retailer",start:"2001",end:"2015"},
    {name:"Company 3",category:"Auto",start:"2000",end:"2016"},
    {name:"Company 4",category:"Technology",start:"2007",end:"2019"},
    {name:"Company 5",category:"Technology",start:"2005",end:"2019"},
    {name:"Company 6",category:"Technology",start:"2003",end:"2017"}
    
    ];
// sort and create new array  order from lower to higher by start date
const lower_to_higher=companies.sort(function(c1,c2){
        if(c1.start > c2.start){
        // c2 comes before c1
        return 1;
        }
        else{
        // c1 comes before c2
        return -1;
        }
}).map(c=>`${c.name}-${c.start}`);
//companies list ,by start date from lower to higher 
console.log("*************order by lower to higher start date*************");
console.log(lower_to_higher);

// sort and create new array  order from higher to lower by start date
const higher_to_lower=companies.sort(function(c1,c2){
    if(c1.start < c2.start){
    // c2 comes before c1
    return 1;
    }
    else{
        // c1 comes before c2
        return -1;
    }
    
}).map(c=>`${c.name}-${c.start}`);
 
console.log("********companies sorted by start and order by higher to lower start date**********");
console.log(higher_to_lower);
//example 

const todos=[
    {
        id:1,
        title:"Task 1",
        isCompleted:true
    },
    {
        id:2,
        title:"Task 2",
        isCompleted:true
    },
    {
        id:3,
        title:"Task 3",
        isCompleted:false
    },
    {
        id:4,
        title:"Task 4",
        isCompleted:false
    }
];

const companiesSorted=companies.sort((c1,c2)=>(c1.start>c2.start?1:-1));
console.log(companiesSorted);