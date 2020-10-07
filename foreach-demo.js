/* The following are high order function in javascript. High order means that they accept functions
 as high order paramenters
*/
// 1. foreach
// 2. filter
// 3. map
// 4. reduce
const companies=[
{name:"Company 1",category:"Finance",start:"1990",end:"2010"},
{name:"Company 2",category:"Retailer",start:"2001",end:"2015"},
{name:"Company 3",category:"Auto",start:"2000",end:"2016"},
{name:"Company 4",category:"Retail",start:"2007",end:"2019"},
{name:"Company 5",category:"Technology",start:"2005",end:"2019"},
{name:"Company 6",category:"Technology",start:"2003",end:"2017"},

];
const ages=[33,12,20,16,5,54,33,19,70,25];
/* The first demo is for the foreach */
// Old way of iterating on  arrays collection
for( let i=0;i<companies.length;i++){
    console.log(companies[i]);
}
// using foreach,high ordder funciton
companies.forEach(c=>{console.log(c)});
//printing  only the name for the company

companies.forEach(c=>{console.log(c.name)});
//printing only companies  which  comes only in the Technology category
console.log("**********Companies in Category=Technology********************")
//out put: Company 5, Company 6
companies.forEach(c=>{
    if(c.category==="Technology")
    console.log(c.name)
});
//Printing ages  that are less than 25
console.log("***********Printing ages less than 25********");
ages.forEach(age=>{
    if(age<25){
        console.log(age)
    }
});
