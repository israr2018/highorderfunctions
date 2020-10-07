/* In this file , we demonstrate the use of the filter, high order function. The filter , functions is used to create
a new array , based on some condition

*/
const companies=[
    {name:"Company 1",category:"Finance",start:"1990",end:"2010"},
    {name:"Company 2",category:"Retailer",start:"2001",end:"2015"},
    {name:"Company 3",category:"Auto",start:"2000",end:"2016"},
    {name:"Company 4",category:"Technology",start:"2007",end:"2019"},
    {name:"Company 5",category:"Technology",start:"2005",end:"2019"},
    {name:"Company 6",category:"Technology",start:"2003",end:"2017"},
    
    ];
const ages=[33,12,20,16,5,54,33,19,70,25];

//get array of companies which comes in the category=Technology
const technology_companies=companies.filter(c=>{
    if(c.category==='Technology')
    return true;
});
// now print the technolog-companies
console.log(technology_companies);
//get array of companies which are not in the  Technology category
const other_then_tech=companies.filter(c=>{
    if(c.category!=='Technology')
    return true;
});
console.log("*************companies that are not in the Technology category***********");
console.log(other_then_tech);

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
// todos which are completed
const completed_todos=todos.filter(
    (todo)=>{
        if(todo.isCompleted)
          return todo;
    }
);
console.log("********completed-todos**************");
console.log(completed_todos);